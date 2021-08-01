const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    message.delete()
    message.channel.send(new Discord.MessageEmbed()
    .setColor('#0062ff')
    .setTitle('__Bot Informations__')
    .setDescription('**Prefixe:** .\n**Code Language:** NodeJs\n**Dev by:** 4_4ck3r#4918')
    .addField('__Admin Commands__', 'say\nsayEmbed\nclear\nnuke\nbanList', true)
    .addField('__Other__', 'help\nping\nuser-info\nserver-info', true)
    .setThumbnail(message.guild.iconURL())
    .setFooter('© Tous droits réservés'))
}

module.exports.config = {
    name: 'help'
}
