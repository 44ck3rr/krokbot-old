const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    const reason = args.splice(1).join(' ');
    user ? message.guild.member(user).kick(reason) : message.channel.send('Je n\'ai pas trouvé cette utilisateur.')
}

module.exports.config = {
    name: 'kick'
}