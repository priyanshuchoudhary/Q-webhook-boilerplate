
"use strict";

/**
 * Default Welcome Intent controller
 * @param {object} df webhook fulfillment object
 */

const defaultWelcomeIntent = async (df) => {
    df.setResponseText("Hi Welcome to Quantiphi Virtual Assistant! How can I help you today?");


    df.setPayload({
        richContent: [
            [
                {
                    options: [
                        {
                            text: "Book a hotel",
                        },
                        {
                            text: "Booking status",
                        },
                    ],
                    type: "chips",
                },
            ],
        ],
    });

    //df.setOutputContext('global',50)

};

module.exports = defaultWelcomeIntent;
