const Discord = require('discord.js')
const client = new Discord.Client()
const disbut = require('discord-buttons')
disbut(client)

module.exports.run = async (client, message, args) => {
    let button = new disbut.MessageButton()
    .setStyle('url')
    .setURL('https://matias.ma/nsfw/')
    .setLabel('Trust me.')
    .setEmoji('👀')

    message.channel.send('Ok.', button)

    
}

module.exports.config = {
    name: 'button'
}
