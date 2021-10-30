const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.id == '431912252145401886') return
    message.channel.send('Héhéhé')
}

module.exports.config = {
    name: 'raid'
}