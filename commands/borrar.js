const { getSlots, updateSlots } = require('../lib/utils')

module.exports = bot => {
  bot.command('borrar', async ctx => {
    msg = ctx.message.text.split(' ')
    slots = await getSlots(msg[1])
    filteredSlots = slots.filter(slot => msg[2] != slot)
    response = await updateSlots(filteredSlots, msg[1])
    ctx.reply(response.statusText)
  })
}
