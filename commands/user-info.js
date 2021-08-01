const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const member = message.mentions.members.first() || message.member
    message.channel.send(new Discord.MessageEmbed()
        .addField('Membre', member, true)
        .addField('Tag', member.user.tag, true)
        .setThumbnail(member.user.displayAvatarURL())
        .setFooter(`ID : ${member.id}`))
},

module.exports.config = {
    name: 'user-info'
}
