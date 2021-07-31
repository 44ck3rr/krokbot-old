const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();
    if(message.author.bot) return

    let msg = await message.channel.send('Calcule en cours...')
    msg.delete();

    let PING = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('PONG !')
    .setDescription('Voici les résultats.')
    .addField('Ma latence est de :', Math.floor(msg.createdAt - message.createdAt)+ " " + "ms")
    message.channel.send(PING)
}

module.exports.config = {
    name: 'ping'
}
