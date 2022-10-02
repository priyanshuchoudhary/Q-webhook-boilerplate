/**
 * Copyright 2020 Quantiphi, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const winston = require("winston");
const expressWinston = require("express-winston");
const webhookController = require("./intent-library/webhook-controller");
const errorHandler = require("./helper/error-handler");
const config = require("./config")();
const authMiddleware = require("./helper/basic-auth");
const helmet = require("helmet");
// const admin=require('./database/firebase-connector/connection')
// const db=admin.firestore()
// const collection= db.collection("Hotel_bookings")

let app = express();


 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());

let router = express.Router();

router.get("/healthcheck", (req, res) => {
    res.status(200).json({ "message": "ok" });
});

// router.post('/create',async(req,res)=>{
//     try{
//         //const BookingId = req.body.BookingId;
//         const userJson={
//             BookingId : req.body.BookingId,
//             uname : req.body.uname,
//             city : req.body.city,
//             hotel_name : req.body.hotel_name,
//             room_type : req.body.room_type,
//             check_in_date : req.body.check_in_date,
//             check_out_date : req.body.check_out_date,
//             price : req.body.price
//         };
//         await collection.doc().create(
//             userJson
//         )

    
//     res.send(response);
//     }catch(error){
//         res.send(error);
//     }
//  })

router.post("/v2beta1/webhook", webhookController);

expressWinston.requestWhitelist.push("body");
expressWinston.responseWhitelist.push("body");

expressWinston.bodyBlacklist = config.logger.piiFields;

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    metaField: "apiDetails",
    format: winston.format.combine(
        winston.format.json()
    )
}));

if (config.auth.enable) {
    app.use(authMiddleware);
}

app.use("/", router);

app.use(errorHandler);

module.exports = app;