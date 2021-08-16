const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const anoMsg = args.join(" ");
    if(message.author.bot) return
    message.delete();
    const anoEmbed = new Discord.MessageEmbed()
    .setTitle('Message anonyme !')
    .setDescription(anoMsg)
    .setTimestamp()

    let anoChannel = client.channels.cache.get('876781983617937468')
    anoChannel.send(anoEmbed)
}

module.exports.config = {
    name: 'ano'
}