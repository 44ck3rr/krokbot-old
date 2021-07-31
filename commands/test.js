const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setColor('#10eee2')
    .setTitle('Ceci est un Test')
    .setDescription('Description test')
    .addField('Field test', 'test')
    .setTimestamp();

    message.channel.send(Embed);

}

module.exports.config = {
    name: 'test'
}