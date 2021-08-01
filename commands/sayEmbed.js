const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande !')
    const SayEmbed = args.join(" ");
    if(message.author.bot) return
    message.delete();
    message.channel.send(new Discord.MessageEmbed()
    .setDescription(SayEmbed))
}

module.exports.config = {
    name: 'sayEmbed'
}