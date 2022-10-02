"use strict";

const axios = require('axios');
//const { options } = require('../../app');

exports.data_fetch = async(value)=>{
    const axios = require("axios");

    const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
    params: {query: value, locale: 'en_US', currency: 'USD'},
    headers: {
        'X-RapidAPI-Key': '0058c07698mshb5c7746650d0279p1eed54jsnecf97be00118',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    }

};

const data = await axios.request(options)
//console.log(data.data);
return data.data;

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

}
//module.exports = options;