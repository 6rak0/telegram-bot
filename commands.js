const { getSlots, updateSlots, getDates } = require('./lib/utils')

function getCommand(name) {
  commands = {
    test: ctx => ctx.reply('prueba exitosa'),
    borrar: async ctx => {
      msg = ctx.message.text.split(' ')
      slots = await getSlots(msg[1])
      filteredSlots = slots.filter(slot => msg[2] != slot)
      response = await updateSlots(filteredSlots, msg[1])
      ctx.reply(response.statusText)
    },
    ubicacion: ctx =>
      ctx.replyWithVenue(
        19.34767,
        -99.145557,
        'Dental Ramac',
        'Escocia #11, Parque San Andrés, Coyoacán, CDMX'
      ),
    programar: async ctx => {
      const dates = await getDates()
      dates.forEach(date => {
        bot.telegram.sendMessage(ctx.chat.id, 'fecha disponible', {
          reply_markup: {
            inline_keyboard: [[{ text: date.date, callback_data: 'date' }]],
          },
        })
      })
    },
  }
  return commands[name]
}

module.exports.getCommand = getCommand
