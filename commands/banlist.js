const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return
    const fetchBans = message.guild.fetchBans();
    const bannedMembers = (await fetchBans).map((member) => member.user.tag).join('\n')

    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Liste des membres bannis')
    .setDescription(bannedMembers))

}

module.exports.config = {
    name: 'banList'
}