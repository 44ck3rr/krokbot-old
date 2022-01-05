const Discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
    
    message.channel.send(new Discord.MessageEmbed()
    .setColor('#0062ff')
    .setTitle('__Bot Informations__')
    .setDescription(`**🏷・Prefixe:** Universelle\n**🗣・Code Language:** NodeJs\n**⚙・Dev by:** 4_4ck3r#4918`)
    .addField('🔰・__Admin Commands__', '`say`\n`sayEmbed`\n`clear`\n`nuke`\n`banList`\n`ban`\n`kick`', true)
    .addField('🔆・__Other__', '`help`\n`ping`\n`user-info`\n`server-info`\n`ano`', true)
    .addField('🎥・__KrokCine__', '`film`\n`catalogue`\n`role`', true)
    .setThumbnail(message.guild.iconURL())
    .setFooter(`© Tous droits réservés`))
}

module.exports.config = {
    name: 'help'
}