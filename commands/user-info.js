const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async (client, message, args) => {
    const member = message.mentions.members.first() || message.member
    message.channel.send(new Discord.MessageEmbed()
        .addField('Membre', member, true)
        .addField('Tag', member.user.tag, true)
        .addField('Date de création du compte', moment(member.user.createdAt).format(`[Le] DD/MM/YYYY [à] HH:mm:ss`), true)
        .addField('Date d\'arrivée sur le serveur', moment(member.joinedAt).format(`[Le] DD/MM/YYYY [à] HH:mm:ss`), true)
        .addField('Date de début de boost', member.premiumSince ? moment(member.premiumSince).format(`[Le] DD/MM/YYYY [à] HH:mm:ss`) : 'Ne boost pas', true)
        .setThumbnail(member.user.displayAvatarURL())
        .setFooter(`ID : ${member.id}`))
},

module.exports.config = {
    name: 'user-info'
}