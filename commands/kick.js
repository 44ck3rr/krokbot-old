const Discord = require('discord.js')
const client = new Discord.Client

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('Je n\'ai pas la permission de faire celà')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Merci de mentionné l\'utilisateur a bannir');

        if(!member) return message.channel.send('Je n\'ai pas trouvé cette utilisateur.');
        if(!member.kickable) return message.channel.send('Ce membre ne peut pas être exclu.');

        if(member.id === message.author.id) return message.channel.send('Pourquoi vous exclure vous meme 🤔');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Non-spécifié';

        member.kick({reason: reason}).catch(err => { 
          message.channel.send('Erreur')
            console.log(err)
        })

        const kickembed = new Discord.MessageEmbed()
        .setTitle('Membre Exclu')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Utilisateur exclu', member)
        .addField('Exclu par', message.author)
        .addField('Raison', reason)
        .setFooter('Pour toute erreur d\'exclusion, contactez 4_4ck3r#4918', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(kickembed);

        let modMessage = client.channels.cache.get('857648787090178099');
        modMessage.send(kickembed);

}

module.exports.config = {
    name: 'kick'
}