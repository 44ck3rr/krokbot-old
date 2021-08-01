const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
    await message.channel.clone().then((ch) => {
        ch.setParent(message.channel.parent.id);
        ch.setPosition(message.channel.position);
        message.channel.delete()
        ch.send(`**__Nuked__**`)

    })
}

module.exports.config = {
    name: 'nuke'
}