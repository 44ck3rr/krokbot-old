const Discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
    message.delete()
    
    message.channel.send(new Discord.MessageEmbed()
    .setColor('#0062ff')
    .setTitle('__Bot Informations__')
    .setDescription(`**🏷・Prefixe:** Universelle\n**🗣・Code Language:** NodeJs\n**⚙・Dev by:** 4_4ck3r#4918\n**🌐・Site:** https://votretaverne.hubside.fr/bot \n**❓・Support:** https://discord.gg/7tgVRJpXCu `)
    .addField('🔰・__Admin Commands__', 'say\nsayEmbed\nclear\nnuke\nbanList\nban\nkick', true)
    .addField('🔆・__Other__', 'help\nping\nuser-info\nserver-info\nano', true)
    .addField('🔒・__Secret__', '1 commande secrète est disponible.', true)
    .setThumbnail(message.guild.iconURL())
    .setFooter(`© Tous droits réservés`))
}

module.exports.config = {
    name: 'help'
}
