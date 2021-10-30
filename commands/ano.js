const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (!message.channel.parentID == '676065537125515284') return message.channel.send('Cette commande est utilisable seulement sur La Taverne des Autistes dans la section "Tavernes".')
    const anoMsg = args.join(" ");
    if(message.author.bot) return
    if(!args[0]) return message.channel.send('Aucun message indiquer')
    message.delete();

    const anoEmbed = new Discord.MessageEmbed()
    .setTitle('Message anonyme !')
    .setDescription(anoMsg)
    .setTimestamp()

    let anoChannel = client.channels.cache.get('876781983617937468')
    let anoLogs = client.channels.cache.get('876783871620939816')

    anoChannel.send(anoEmbed)

}

module.exports.config = {
    name: 'ano'
}