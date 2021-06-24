const { getSlots } = require('../lib/utils')

module.exports = bot => {
  bot.action('date', async ctx => {
    ctx.answerCbQuery('buscando horarios')
    const date =
      ctx.update.callback_query.message.reply_markup.inline_keyboard[0][0].text
    const slots = await getSlots(date)
    slots.forEach(slot => {
      bot.telegram.sendMessage(ctx.chat.id, date, {
        reply_markup: {
          inline_keyboard: [[{ text: slot, callback_data: 'slot' }]],
        },
      })
    })
  })
}
