const Discord = require('discord.js')
const fs = require('fs')

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Vous n\'avez pas le permissions d\'utiliser cette commande.')
    const channel = message.mentions.channels.first() || message.channel
    if (client.db.lockedChannels.includes(channel.id)) return message.channel.send('Ce salon est déjà vérrouillé.')
    client.db.lockedChannels.push(channel.id)
    fs.writeFileSync('./db.json', JSON.stringify(client.db))
    message.channel.send('Ce salon a été vérrouillé !')
},

module.exports.config = {
    name: 'lock'
}