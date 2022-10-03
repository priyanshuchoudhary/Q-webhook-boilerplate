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
/**
 * Maps dialogflow intent with its controller
 */

const intents = {
    "Default Welcome Intent": require("./intents/Default Welcome Intent"),
    "Provided City Api Call" : require("./intents/Provided City Api Call"),
    "Provided Budget" : require("./intents/Provided Budget"),
    "Provided Budget Yes" : require("./intents/Provided Budget Yes"),
    "Booking Id Status" : require("./intents/Booking Id Status"),
    "Booking Event" : require("./intents/Booking Event"),
    "Default Fallback Intent" : require("./intents/Default Fallback Intent")
};

module.exports = intents;
