const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    message.delete()
    let GodMode = 'GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}'
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Commande Secrète')
    .setDescription(`Astuce: Renomme un nouveau dossier avec ceci :\n${GodMode}`))
}

module.exports.config = {
    name: 'GodMode'
}