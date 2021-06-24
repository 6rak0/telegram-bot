const { getDates } = require('../lib/utils')

module.exports = bot => {
  bot.command('programar', async ctx => {
    const dates = await getDates()
    dates.forEach(date => {
      bot.telegram.sendMessage(ctx.chat.id, 'fecha disponible', {
        reply_markup: {
          inline_keyboard: [[{ text: date.date, callback_data: 'date' }]],
        },
      })
    })
  })
}
