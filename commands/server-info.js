const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    message.channel.send(new Discord.MessageEmbed()
    .addField('Nom', message.guild.name, true)
    .addField('Région', message.guild.region, true)
    .addField('Membres', `${message.guild.memberCount} Membres`, true)
    .addField('Salons', `${message.guild.channels.cache.size} salons\n${message.guild.channels.cache.filter(channel => channel.type === 'text').size} salons textuels\n${message.guild.channels.cache.filter(channel => channel.type === 'voice').size} salons vocaux\n${message.guild.channels.cache.filter(channel => channel.type === 'category').size} catégories`, true)
    .addField('Emojis', `${message.guild.emojis.cache.size} emojis\n${message.guild.emojis.cache.filter(emoji => !emoji.animated).size} emojis statiques\n${message.guild.emojis.cache.filter(emoji => emoji.animated).size} emojis animés`, true)
    .addField('Rôles', message.guild.roles.cache.size, true)
    .addField('Propriétaire', message.guild.owner, true)
    .addField('Nitro boost', `Tier : ${message.guild.premiumTier}\nNombre de boosts : ${message.guild.premiumSubscriptionCount}`, true)
    .setFooter(`ID : ${message.guild.id}`)
    .setThumbnail(message.guild.iconURL())
    .setImage(message.guild.bannerURL()))
},

module.exports.config = {
    name: 'server-info'
}