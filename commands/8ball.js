const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const replies = ['Oui', 'Non', 'Probablement', 'Probablement pas', 'Il y a peu de chances']
    const question = args.join(" ");
    const reponse = Math.floor(Math.random() * replies.length);

    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#cb4e41")
    .setThumbnail("https://cdn.discordapp.com/attachments/882622734507593818/882623617932881950/unnamed.png")
    .addField(question, replies[reponse]);

    message.channel.send(embed)
}

module.exports.config = {
    name: '8ball'
}