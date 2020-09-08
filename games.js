const { getGamesAmerica, getPrices } = require('nintendo-switch-eshop')

async function getDiscounted() {
  const allGames = await getGamesAmerica()
  const prices = allGames.map(async game => {
    await getPrices('MX', game.nsuid)
  });

  console.log(prices);
  // const query = await getPrices('MX', queryGames[0].nsuid);
  // console.log(query.prices[0]);
  // console.log(queryGames[0]);
  // queryGames.map(async game => {
  //   let data = await getPrices('MX', game.nsuid);
  //   data = data.prices[0];
  //   console.log(data);
  // })
}

getDiscounted()
