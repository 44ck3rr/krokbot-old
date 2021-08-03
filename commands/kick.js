const Discord = require('discord.js')
const client = new Discord.Client

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    const reason = args.splice(1).join(' ');
    user ? message.guild.member(user).kick(reason) : message.channel.send('Je n\'ai pas trouvé cette utilisateur.')
    if (!user) return
    if (!reason) reason = 'Non-spécifié';

    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Membre Exclu')
    .setThumbnail(member.user.displayAvatarURL())
    .addField('Utilisateur exclu', member)
    .addField('Exclu par', message.author)
    .addField('Raison', reason)
    .setFooter('Pour toute erreur d\'exclusion, contactez 4_4ck3r#4918', client.user.displayAvatarURL())
    .setTimestamp())

    let modMessage = client.channels.cache.get('857648787090178099');
    modMessage.send(new Discord.MessageEmbed()
    .setTitle('Membre Exclu')
    .setThumbnail(member.user.displayAvatarURL())
    .addField('Utilisateur exclu', member)
    .addField('Exclu par', message.author)
    .addField('Raison', reason)
    .setFooter('Pour toute erreur d\'exclusion, contactez 4_4ck3r#4918', client.user.displayAvatarURL())
    .setTimestamp())

}

module.exports.config = {
    name: 'kick'
}