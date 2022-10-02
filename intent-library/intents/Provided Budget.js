const admin = require('../../database/firebase-connector/connection')
const db = admin.firestore();
const collection = db.collection('Hotel_bookings')
const { hotel_fetch } = require('../../helper/hotel_api')

const budget = async (df) => {
  const data = df.getContext('global').parameters
  const city = data.city;
  const userName = data.userName;
  const checkInDate = data.checkInDate;
  const stayCount = data.nightStay;
  const budgetUSD = data.budgetUSD.amount;

  const uniqueId = Math.random().toString().substring(2, 9);

  const destId = data.Destinationid;

  let date = new Date(checkInDate).toLocaleDateString('en-in', { day: "numeric", month: "short", year: "numeric" })
  let dt = new Date(date);
  dt.setDate(dt.getDate() + stayCount)
  let nextDate = dt.toLocaleDateString('en-in', { day: "numeric", month: "short", year: "numeric" })

  const hotel_name = await hotel_fetch(destId, budgetUSD)

  const filter_hotel = hotel_name.data.body.searchResults.results.filter(element => {
    const value = budgetUSD / stayCount
    return element.ratePlan.price.exactCurrent <= value
  });

  const length = filter_hotel.length

  const doc = collection.doc(`${uniqueId}`)
  doc.create({
    "User Name": userName,
    "Booking Id": uniqueId,
    "Check In Date": date,
    "Check Out Date": nextDate,
    "City": city,
    "Hotel name": filter_hotel[length - 1].name,
    "Price": budgetUSD
  })

  // df.setOutputContext('global', 50, { uniqueId: uniqueId,
  //   hotel_name:filter_hotel[length - 1].name,
  //   checkin:date,checkout:nextDate
  //  })

  df.setOutputContext('global', 50, { uniqueId: uniqueId })

  df.setResponseText(`Thanks, I found the best match as per your requirement. Would you like to book ${filter_hotel[length - 1].name} in ${city} from ${date.toString()} to ${nextDate.toString()} for $ ${budgetUSD} ?`);

  df.setPayload({
    richContent: [
      [
        {
          options: [
            {
              text: "Yes",
            },
            {
              text: "No",
            },
          ],
          type: "chips",
        },
      ],
    ],
  });


  //  df.setEvent('data','en-US',{username:"Piyanshu"})

  // df.setResponseText("okay deli")

};

module.exports = budget;

