const db = require('quick.db')
const Discord = require('discord.js')
const economy = new db.table('Economy')

module.exports.run = async (client, message, args) => {
    let token = economy.fetch(`money_${message.guild.id}_${user.id}`)
    if (token === null) token = 0
    return message.channel.send(`${token} **Tokens**`)
}

module.exports.config = {
    name: 'test'
}