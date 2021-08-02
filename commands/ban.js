const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
    let mention = message.mention.members.first();

    if (mention == undefined)
        message.reply('Membre non ou mal mentionné.')
    else {
        if(mention.bannable){
            let raison = args.slice(1).join(' ')
            if (!raison) return message.channel.send('Aucune raison défini')

            mention.ban(raison);
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('Membre Banni')
            .setThumbnail(member.user.displayAvatarURL())
            .addField('User Banned', member, true)
            .addField('Kicked by', message.author, true)
            .addField('Raison', raison, true)
            .setTimestamp()
            .setFooter('Pour toutes erreur de bannissement, contactez 4_4ck3r#4918'))
        }
        else
            message.reply('Impossible de bannir ce membre.')
    }
}

module.exports.config = {
    name: 'ban'
}