const axios=require('axios');

exports.hotel_fetch=async(destId, budgetUSD)=>{

    const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/properties/list',
        params: {
          destinationId: destId, //
          pageNumber: '1',
          pageSize: '25',  
          checkIn: "2023-03-10",
          checkOut: "2023-03-12",
          adults1: '1',
          priceMax: budgetUSD,  //
          sortOrder: 'PRICE',
          locale: 'en_US',
          currency: 'USD'
        },
        headers: {
          'X-RapidAPI-Key': '0058c07698mshb5c7746650d0279p1eed54jsnecf97be00118',
          'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
      };

      const response=await axios.request(options)

      return response.data
}