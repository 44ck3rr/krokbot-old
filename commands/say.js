const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande !')
    const SayMessage = args.join(" ");
    if (!SayMessage) message.channel.send('Aucun message indiqué')
    else{
        if(message.author.bot) return
        message.delete();
        message.channel.send(SayMessage);
    }
}

module.exports.config = {
    name: 'say'
}