const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (message.guild.id == 908063418727165982){
        if(message.member.roles.cache.has('925234649972748298')){
        let newName = args[0]
        let newSymbol = args[1]
        let newColor = args[2]

        if(!newName) return message.channel.send(new Discord.MessageEmbed().setTitle('Commande incorrecte.').setDescription('!role `Nom` `Symbole` `Couleur (HTML)`'))
        if(!newColor) return message.channel.send(new Discord.MessageEmbed().setTitle('Commande incorrecte.').setDescription('!role `Nom` `Symbole` `Couleur (HTML)`'))
        if(!newSymbol) return message.channel.send(new Discord.MessageEmbed().setTitle('Commande incorrecte.').setDescription('!role `Nom` `Symbole` `Couleur (HTML)`'))

        message.member.roles.cache.get('925234649972748298').edit({ name: `${newSymbol}・${newName}`, color: newColor });

        message.channel.send(new Discord.MessageEmbed().setTitle(`Role Personnalisé.`).setDescription(`Votre role personnalisé a été modifié avec succès.\n_ _\n**Symbole:** ${newSymbol}\n**Nom:** ${newName}\n**Couleur (HTML):** ${newColor}\n_ _\n<@&925234649972748298>`))
        }
        else return message.channel.send(new Discord.MessageEmbed().setTitle('Erreur.').setDescription(`Vous n'avez pas de rôle personnalisé.`))
    }
    else return message.channel.send(new Discord.MessageEmbed().setDescription('Commande seulement utilisable sur [KrokCine](https://discord.gg/E4KSjhv8WR) !'))
    
}

module.exports.config = {
    name: 'role'
}