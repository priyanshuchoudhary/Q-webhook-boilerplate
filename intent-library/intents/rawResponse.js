// const axios = require("axios");
// //const { defaultResponseFilter } = require("express-winston");

// const {hotel_fetch}=require('../../helper/hotel_api')
// const budget = async(df)=>{
//     // const data = df._request.queryResult.outputContexts[1].parameters;

//     const data = df.getContext('global').parameters;
//     const city = data.city;
//     const startDate = data['date-time'].substring(0, 10);
//     const budget = data.money.amount + " " + data.money.currency;
//     const dateArray = startDate.split('-');
//     const startYear = dateArray[0];
//     const startMonth = dateArray[1];
//     const startday = dateArray[2];
//     const dateOne = new Date(startYear, startMonth, startday).toDateString();
//     const arrFinalStartDate = dateOne.split(' ');
//     const destId = data["Destinationid"];
//     let hotel = "";

//     //start fetching...




//     // const op = axios.request(options).then(function (response) {
//     //   console.log(response.data);
//     //   return response.data.data.body.header;
//     // }).catch(function (error) {
//     //   console.error(error);
//     // });

//     hotel = await hotel_fetch(destId, data.money.amount);
//     hotel = hotel.data.body.header;

//     console.log(hotel + " ==== op2");

//     df.setResponseText(`Thanks, I found the best match as per your requirement. Would you like to book ${hotel} from ${arrFinalStartDate[2]} ${arrFinalStartDate[1]} to endDate in ${city} for ${budget}`);  
//     // hitel = op;
//     // hotel = hitel.then((x)=>{
//     //   console.log("hitel ======= " + x);
//     //   return x;
//     // })

//     //end fetching...
//     // const checkInDate = data.date-time;
//     // const stayCount = data.stayCount;
//     // const budget=data.budget;
//     // let date = new Date(checkInDate).toLocaleDateString()
//     // let dt = new Date(date);
//     // dt.setDate(dt.getDate()+stayCount)

//     // let nextDate = dt.toLocaleDateString();
//     // console.log(date, "to", nextDate);

//     // df.setResponseText("Thanks, I found the best match as per your requirement. Would you like to book Taj Hotel from "+startDate+
//     // +" to 'yaha end date aegi!' in Mumbai for $ "+ budget +"?")
//     df.setOutputContext("global",50,{hotel_name:hotel})
//     df.setEvent('test','en-US',{username:"piyush"})



//   }
//   module.exports=budget;


//   // df.setPayload({
//   //     richContent: [
//   //       [
//   //         {
//   //           options: [
//   //             {
//   //               text: "Yes",
//   //             },
//   //             {
//   //               text: "No",
//   //             },
//   //           ],
//   //           type: "chips",
//   //         },
//   //       ],
//   //     ],
//   //   });



// {
//     "responseId": "7072f2fd-f420-407f-a245-9cc7d4f4419d-32d6a6f2",
//         "queryResult": {
//         "queryText": "200 dollars",
//             "parameters": {
//             "money": {
//                 "currency": "USD",
//                     "amount": 200
//             }
//         },
//         "allRequiredParamsPresent": true,
//             "outputContexts": [
//                 {
//                     "name": "projects/q-hotel-booking-bot-cfkg/agent/sessions/12d30a9f-7a07-0562-8b07-02770a3235bb/contexts/providedbudget-followup",
//                     "lifespanCount": 2,
//                     "parameters": {
//                         "money.original": "200 dollars",
//                         "money": {
//                             "currency": "USD",
//                             "amount": 200
//                         }
//                     }
//                 },
//                 {
//                     "name": "projects/q-hotel-booking-bot-cfkg/agent/sessions/12d30a9f-7a07-0562-8b07-02770a3235bb/contexts/awaiting_budget",
//                     "lifespanCount": 1,
//                     "parameters": {
//                         "number": 2,
//                         "number.original": "2",
//                         "money": {
//                             "amount": 200,
//                             "currency": "USD"
//                         },
//                         "money.original": "200 dollars"
//                     }
//                 },
//                 {
//                     "name": "projects/q-hotel-booking-bot-cfkg/agent/sessions/12d30a9f-7a07-0562-8b07-02770a3235bb/contexts/awaiting_night",
//                     "lifespanCount": 1,
//                     "parameters": {
//                         "money": {
//                             "amount": 200,
//                             "currency": "USD"
//                         },
//                         "money.original": "200 dollars",
//                         "number.original": "2",
//                         "number": 2
//                     }
//                 },
//                 {
//                     "name": "projects/q-hotel-booking-bot-cfkg/agent/sessions/12d30a9f-7a07-0562-8b07-02770a3235bb/contexts/providednightroomtype-followup",
//                     "lifespanCount": 1,
//                     "parameters": {
//                         "number": 2,
//                         "money": {
//                             "amount": 200,
//                             "currency": "USD"
//                         },
//                         "number.original": "2",
//                         "money.original": "200 dollars"
//                     }
//                 },
//                 {
//                     "name": "projects/q-hotel-booking-bot-cfkg/agent/sessions/12d30a9f-7a07-0562-8b07-02770a3235bb/contexts/global",
//                     "lifespanCount": 47,
//                     "parameters": {
//                         "hotel_name": "Mumbai, Maharashtra, India",
//                         "number": 2,
//                         "date-time.original": "21 march",
//                         "city": "Mumbai",
//                         "date-time": "2023-03-21T12:00:00+05:30",
//                         "any.original": "Bushra khan",
//                         "any": "Bushra khan",
//                         "Destinationid": "1640701",
//                         "city.original": "Mumbai",
//                         "money": {
//                             "amount": 200,
//                             "currency": "USD"
//                         },
//                         "number.original": "2",
//                         "money.original": "200 dollars"
//                     }
//                 }
//             ],
//                 "intent": {
//             "name": "projects/q-hotel-booking-bot-cfkg/agent/intents/dcc7490e-7467-443d-9954-4fafacc1cbb9",
//                 "displayName": "provided_budget"
//         },
//         "intentDetectionConfidence": 1,
//             "diagnosticInfo": {
//             "webhook_latency_ms": 4893
//         },
//         "languageCode": "en",
//             "sentimentAnalysisResult": {
//             "queryTextSentiment": { }
//         }
//     },
//     "webhookStatus": {
//         "code": 4,
//             "message": "Webhook call failed. Error: DEADLINE_EXCEEDED, State: URL_TIMEOUT, Reason: TIMEOUT_WEB."
//     }
// }

// {
//     "type": "service_account",
//     "project_id": "q-hotel-booking-db",
//     "private_key_id": "4f7d8a9719192744d1b3a7b0fe1cc28ef4049265",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCs2CZG4ki5G0UO\netM/6TQjgCr0kePmsU1w4zq0kooyoLF2KMvYfLX9b0LOSM0hbCEL7a0H4XaYr7mb\nnYtzHE7cJDTe2H9GxUGCDivF2NX+sgB70+fgoNg5iddqzKvz8oYL+VTo4ORJI/cr\nZ/hiRTJpsIucVmchg3w+TLNkAF4psevWFfa/PJYIY4Y5g6/RGLLdXiPCKjvamr2E\nn+yH7WEWbBFatvCXCjx5bVSNh20c6vmrmfqSXptm9uHgYB6/dUN8jVDKzRh3Ptkz\nIJSiugJYsin6KJuA3j5Uk8Vvm0+k0L1qrUmUklWyk13I6xDji7GfJFN0fcq5RwUn\nIhnBYmOHAgMBAAECggEABh+6a3SFAxn2PmcXqQIIOOHHo9avbnMFvWQvpkoy30xW\nPUuAvXDdudcBVPG7Yt3D5fpL0SWp4AsJ1nukfzWXjbEytlqRV96RTZxW7LGcE2QX\nJEwDwS+xuYgqu7v4s7H6Ed6JpZ6iN/0wOrd6U3EEMj5xE97z1HomIsbw7DAfJfb6\nyrXpPQl9iMGgLb5xUQ3RU05K5kC8xaFkQZNGSn5CwHaXrW/fIeKDMFUFAN2BvzF0\nFW1rhStML+kG3FSi2LKEf8KjUmiVknh3mPW7MzjGuBm+74d/Z9WIgGc+7Ui3Q3m3\nTpQUrEpP1sHMpd/iHxuX/j7fbBHAUJ7iIVU9DkdO0QKBgQDxEPDIEBwQbor9ZZJS\nmRC8F9St3FZPZAB0ur/1bXT07yjXw+1fnJmDubfaYPiqI/ssHyjck7pbDvVB7/Xv\nVlO9vpxSVuck0dvxOPviE+CwF63ooCiDs73t4sCyWq4O6kEe5CPT+MzDAsp33KRt\nTv9JEtcJryYEo0ePN/NvEghQOwKBgQC3jUgG477/gpDE34+Q3wtzOuKFDVZYsCKQ\nyQtrHJ1UQnTSZFe5zCywf0zQLnxkhXut64gqRxiGjMrbGpXvUZuMGxZcDLb8ym0K\nqKHscb7eLK3s+urSauaBn37q5HTMuZIt0VqTVcPLdSv30cHmD9bQ3LBUQECUNkd7\nM9PHLsKxJQKBgFFHpfe+vsenjgOMSL7Cz0qsOlB4tz1DeYfiI7ELu+CN9tZxQEr5\nkSVB7EScZ5tuUFT7GJru0Gm9bGJUFzcgg1G5wBlfJcZbX+5AiWUb0KlvAnsp7R8i\n7ooT52b7fi6XO2fAAniJLfkeqsepRGN6vEaWLJ0eShJMP2eBtPmhOd5bAoGBAIyu\nVkQhjiRbuAWMq4aHzUjWGwOLQ2DaLsP1szC3T8Zi4RLYIXygBqiICSGOX3zT6gVU\n/poYv61wf5ILAFvamnN511tZy25Y39ZJhUGptHaom+2EKzJ3CJDU4/u4eeTnXiiL\nyvYdx+FKvxZDyG9COI0AeI06acSvDX5aLLj/F+2ZAoGADZikT5kCPUQmPl5+0Nsf\n8yqjyegSCt7eftZ3JQf17VoIYFqRYRGB4MtYnb4RnLqK46j0yKEYm8faQ9arQBn9\nyO/iJ7yyV7nSZarmOQKqjqK8hDsKdQ5yNVsM0KsX48qEkSpdaA77Vvf/OSZ9vha7\nfq9BK5xmHfreECNuszAuPcI=\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-z5coj@q-hotel-booking-db.iam.gserviceaccount.com",
//     "client_id": "105035176524793334499",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-z5coj%40q-hotel-booking-db.iam.gserviceaccount.com"
//   }
  



// 025877
// 130381
// 163822
// 175927
// 265434
// 274129
// 332550
// 365738
// 373509
// 446115
// 539625
// 553886
// 556169
// 583524
// 593924
// 629961
// 635469
// 666786
// 672884
// 687195
// 702772
// 735978
// 746267
// 746337
// 785262
// 799560
// 812762
// 816408
// 842738
// 890460
// 897496
// 901858
// 906471
// 958196
// 991562


// 735978
// 746267
// 746337
// 785262
// 799560
// 812762
// 816408
// 842738
// 890460
// 897496
// 901858
// 906471
// 958196
// 991562

