const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let args = message.content.substring(prefix.length).split(" ")
    if(message.member.permissions.has('ADMINISTRATOR')){
        if (message.content.startsWith(`${prefix}giveaway`)) {
            let time = args[1]
            if (!time) return message.channel.send('Vous n\'avez pas préciser le temps !');

            if (
                !args[1].endsWith("d") &&
                !args[1].endsWith("h") &&
                !args[1].endsWith("m") &&
                !args[1].endsWith("s") 
            )
                return message.channel.send('Vous devez utilisez D (jours), H (heures), M (minutes) ou S (secondes)')

                let gchannel = message.mentions.channels.first();
                if (!gchannel) return message.channel.send("Je ne trouve pas le salon dans le serveur !")

                let prize = args.slice(3).join(" ")
                if (!prize) return message.channel.send('Argument manquant. Quel est le prix ?')

                message.delete()
                gchannel.send(":tada: **NEW GIVEAWAY** :tada:")
                let gembed = new Discord.MessageEmbed()
                    .setTitle("Nouveau Giveaway !")
                    .setDescription(`Réagis avec :tada: pour participer au concours !\nLancer par: **${message.author}**\nTemp: **${time}**\nRécompense: **${prize}**`)
                    .setTimestamp(Date.now + ms(args[1]))
                    .setColor(3447003)
                let n = await gchannel.send(gembed)
                n.react("🎉")
                setTimeout(() => {
                    if(n.reactions.cache.get("🎉").count <= 1) {
                        return message.channel.send("Personne n'a participé !")
                    }

                    let winner = n.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
                    gchannel.send(`Félicitation ${winner}! Vous venez de gagnez **${prize}**!`
                    );
                }, ms(args[1]));
        }
    }
}

module.exports.config = {
    name: 'giveaway'
}