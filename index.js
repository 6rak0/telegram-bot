const { Telegraf } = require('telegraf');
const { getGamesAmerica } = require('nintendo-switch-eshop');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start(ctx => ctx.reply('Welcome!'));
bot.hears('pepito', ctx => ctx.reply('pepitos crew'));
bot.command('hipster', Telegraf.reply('λ'));
//bot.on('message', ctx => ctx.reply(ctx.message.text));
bot.hears('nintendo', async ctx => {
  const allGames = await getGamesAmerica();
  const query = allGames.filter(game => game.title.includes('Mario Kart'));
  ctx.reply(query[0].title);
});

bot.launch();
