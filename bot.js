require('dotenv').config()
const fs = require('fs')
const { Telegraf } = require('telegraf')

bot = new Telegraf(process.env.BOT_TOKEN)

const commandFiles = fs
  .readdirSync('./commands')
  .filter(file => file.endsWith('.js'))
commandFiles.forEach(file => {
  const command = require(`./commands/${file}`)
  command(bot)
})
const actionFiles = fs
  .readdirSync('./actions')
  .filter(file => file.endsWith('.js'))
actionFiles.forEach(file => {
  const action = require(`./actions/${file}`)
  action(bot)
})

bot.launch()
