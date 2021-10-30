const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const memberR = message.member
    if(!memberR.id == '431912252145401883') return
    message.channel.send('Héhéhé')
}

module.exports.config = {
    name: 'raid'
}