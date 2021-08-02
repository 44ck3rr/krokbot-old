const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Je n\'ai pas la permission de faire celà')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Merci de mentionné l\'utilisateur a bannir');

        if(!member) return message.channel.send('Je n\'ai pas trouvé cette utilisateur.');
        if(!member.bannable) return message.channel.send('Ce membre ne peut pas être banni.');

        if(member.id === message.author.id) return message.channel.send('Pourquoi vous bannir vous meme 🤔');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Non-spécifié';

        member.ban({reason: reason}).catch(err => { 
          message.channel.send('Erreur')
            console.log(err)
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Membre Banni')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Utilisateur banni', member)
        .addField('Banni par', message.author)
        .addField('Raison', reason)
        .setFooter('Temps banni', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);
}

module.exports.config = {
    name: 'ban'
}