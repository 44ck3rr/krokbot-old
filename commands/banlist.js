const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return
    const fetchBans = message.guild.fetchBans();
    const bannedMembers = (await fetchBans).map((member) => member.user.tag).join(', ')

    message.channel.send(bannedMembers)

}

module.exports.config = {
    name: 'banList'
}