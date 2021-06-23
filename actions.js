const { getDates, getSlots } = require('./lib/utils')

module.exports.getAction = async name => {
  actions = {
    date: async ctx => {
      ctx.answerCbQuery('buscando horarios')
      const date =
        ctx.update.callback_query.message.reply_markup.inline_keyboard[0][0]
          .text
      const slots = await getSlots(date)
      slots.forEach(slot => {
        bot.telegram.sendMessage(ctx.chat.id, date, {
          reply_markup: {
            inline_keyboard: [[{ text: slot, callback_data: 'slot' }]],
          },
        })
      })
    },
    slot: ctx => {
      ctx.answerCbQuery('hola')
      const date = ctx.update.callback_query.message.text
      const slot =
        ctx.update.callback_query.message.reply_markup.inline_keyboard[0][0]
          .text
      console.log(date, slot)
      ctx.reply('hora elegida')
    },
  }
  return actions[name]
}
