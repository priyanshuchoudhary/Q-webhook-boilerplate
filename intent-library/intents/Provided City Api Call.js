"use strict";

/**
 * Default Welcome Intent controller
 * @param {object} df webhook fulfillment object
 */
const { data_fetch } = require('../../helper/fetchapi');

const cityStay = async (df) => {

    const usercity = df._request.queryResult.parameters.city
    if (!usercity) {
        return df.setResponseText("What city will you be staying in?");
    }

    const city = df.getContext('global').parameters.city;
    const resultId = [];
    const fetch = await data_fetch(city);

    fetch.suggestions.forEach(element => {
        resultId.push(element.entities[0].destinationId);
    });


    df.setOutputContext('global', 50, { "Destinationid": resultId[0] });
    //console.log(resultId + "=================================================");

    df.setResponseText("Great, when would you like to check-in");
    //df.setEvent("test","en-US",{"username":"piyush"})

};

module.exports = cityStay;
