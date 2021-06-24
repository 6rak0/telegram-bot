module.exports = bot => {
  bot.action('slot', ctx => {
    ctx.answerCbQuery('hola')
    const date = ctx.update.callback_query.message.text
    const slot =
      ctx.update.callback_query.message.reply_markup.inline_keyboard[0][0].text
    console.log(date, slot)
    ctx.reply('hora elegida')
  })
}
