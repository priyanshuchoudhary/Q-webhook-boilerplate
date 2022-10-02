const admin = require('../../database/firebase-connector/connection')
const db = admin.firestore();
const collection = db.collection('Hotel_bookings')

const booking_id_status = async (df) => {

    const uniqueId = df.getContext('global').parameters.uniqueId;
    console.log(uniqueId);

    const doc = await collection.doc(`${uniqueId}`).get()
    //console.log(doc.data()['Booking Id'])
    if (doc.exists) {
        if (doc.data()['Booking Id'] == uniqueId) {
            df.setResponseText(`Great ${doc.data()['User Name']}, You have a reservation in ${doc.data()['Hotel name']} from ${doc.data()['Check In Date']} to ${doc.data()['Check Out Date']}  in ${doc.data()['City']}`)
        }
    } else {
        df.setResponseText("Id doesn't exist in our database");
    }
    //df.setResponseText(`Got it, You have a reservation in Taj Hotel from  to 17th March in Mumbai`)
}
module.exports = booking_id_status;