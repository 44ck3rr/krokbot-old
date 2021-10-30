const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (!message.channel.id === "872591585525780530") return message.channel.send('Cette commande est utilisable seulement sur La Taverne des Autistes dans le salon <#872591585525780530>')
    const anoMsg = args.join(" ");
    if(message.author.bot) return
    if(!args[0]) return message.channel.send('Aucun message indiquer')
//    const anoAuthor = message.author.id()
    message.delete();

/*
    const anoLogsMsg = new Discord.MessageEmbed()
    .setAuthor(anoAuthor)
    .setTitle(`Message anonyme de ${anoAuthor}`)
    .setDescription(anoMsg)
    .setTimestamp()
*/

    const anoEmbed = new Discord.MessageEmbed()
    .setTitle('Message anonyme !')
    .setDescription(anoMsg)
    .setTimestamp()

    let anoChannel = client.channels.cache.get('876781983617937468')
    let anoLogs = client.channels.cache.get('876783871620939816')

    anoChannel.send(anoEmbed)
//    anoLogs.send(anoLogsMsg)

}

module.exports.config = {
    name: 'ano'
}