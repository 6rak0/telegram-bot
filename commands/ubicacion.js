module.exports = bot => {
  bot.command('ubicacion', ctx =>
    ctx.replyWithVenue(
      19.34767,
      -99.145557,
      'Dental Ramac',
      'Escocia #11, Parque San Andrés, Coyoacán, CDMX'
    )
  )
}
