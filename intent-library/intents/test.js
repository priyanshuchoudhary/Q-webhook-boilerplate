// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://hotels4.p.rapidapi.com/properties/list',
//   params: {
//     destinationId: '1640701',//
//     pageNumber: '1',
//     pageSize: '25',
//     checkIn: '2022-10-20',//
//     checkOut: '2022-10-22',//
//     adults1: '1',
//     priceMax: '180',//
//     sortOrder: 'PRICE',
//     locale: 'en_US',
//     currency: 'USD'
//   },
//   headers: {
//     'X-RapidAPI-Key': '0058c07698mshb5c7746650d0279p1eed54jsnecf97be00118',
//     'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data.data.body.searchResults.results[1].name);
// }).catch(function (error) {
// 	console.error(error);
// });