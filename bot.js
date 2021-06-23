require('dotenv').config()
const { Telegraf } = require('telegraf')
const { getCommand } = require('./commands')
const { getAction } = require('./actions')

bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('test', getCommand('test'))
bot.command('borrar', getCommand('borrar'))
bot.command('ubicacion', getCommand('ubicacion'))
bot.command('programar', getCommand('programar'))

bot.action('date', getAction('date'))
bot.action('slot', getAction('slot'))

bot.launch()
