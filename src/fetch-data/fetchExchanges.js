const axios = require('axios');

export const fetchExchanges = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:8000/exchanges',
    
  };
  // debugger
  const data = await axios.request(options).then(function (response) {
     const exchangeData = response.data.map(item => {
      //  debugger
       return {
         id: item.id,
         name: item.name,
         year_stablished: item.year_stablished,
         country: item.country,
         description: item.description,
         url: item.url,
         image: item.image,
         trust_score: item.trust_score,
         trust_score_rank: item.trust_score_rank,
         trade_volume_24h_btc: Intl.NumberFormat().format(item.trade_volume_24h_btc.toFixed(3))
       }
     })

     const top10Exchanges = exchangeData.slice(0,10);

    //  const orderExchange = exchangeData.sort((a,b) => {
    //   return b.price_change_percentage_24h - a.price_change_percentage_24h
    //   // if(a.price_change_percentage_24h > 0) {
    //   //   debugger
    //   // }
    // })
    //  debugger
     return { exchangeData, top10Exchanges }
  }).catch(function (error) {
    console.error(error);
  });
  // debugger
  return data
}