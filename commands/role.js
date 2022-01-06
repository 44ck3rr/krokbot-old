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

        if(newColor === 'rouge'){
            message.member.roles.cache.get('925234649972748298').edit({ name: `${newSymbol}・${newName}`, color: 'FF0000' });
            message.channel.send(new Discord.MessageEmbed().setTitle(`Role Personnalisé.`).setDescription(`Votre role personnalisé a été modifié avec succès.\n_ _\n**Symbole:** ${newSymbol}\n**Nom:** ${newName}\n**Couleur :** Rouge\n_ _\n<@&925234649972748298>`))
        }
        else if(newColor === 'orange'){
            message.member.roles.cache.get('925234649972748298').edit({ name: `${newSymbol}・${newName}`, color: 'FF8300' });
            message.channel.send(new Discord.MessageEmbed().setTitle(`Role Personnalisé.`).setDescription(`Votre role personnalisé a été modifié avec succès.\n_ _\n**Symbole:** ${newSymbol}\n**Nom:** ${newName}\n**Couleur :** Orange\n_ _\n<@&925234649972748298>`))
        }
        else if(newColor === 'jaune'){
            message.member.roles.cache.get('925234649972748298').edit({ name: `${newSymbol}・${newName}`, color: 'FFF300' });
            message.channel.send(new Discord.MessageEmbed().setTitle(`Role Personnalisé.`).setDescription(`Votre role personnalisé a été modifié avec succès.\n_ _\n**Symbole:** ${newSymbol}\n**Nom:** ${newName}\n**Couleur :** Jaune\n_ _\n<@&925234649972748298>`))
        }
        else if(newColor === 'vert'){
            message.member.roles.cache.get('925234649972748298').edit({ name: `${newSymbol}・${newName}`, color: '1FFF00' });
            message.channel.send(new Discord.MessageEmbed().setTitle(`Role Personnalisé.`).setDescription(`Votre role personnalisé a été modifié avec succès.\n_ _\n**Symbole:** ${newSymbol}\n**Nom:** ${newName}\n**Couleur :** Vert\n_ _\n<@&925234649972748298>`))
        }
        else if(newColor === 'cyan'){
            message.member.roles.cache.get('925234649972748298').edit({ name: `${newSymbol}・${newName}`, color: '00FFF3' });
            message.channel.send(new Discord.MessageEmbed().setTitle(`Role Personnalisé.`).setDescription(`Votre role personnalisé a été modifié avec succès.\n_ _\n**Symbole:** ${newSymbol}\n**Nom:** ${newName}\n**Couleur :** Cyan\n_ _\n<@&925234649972748298>`))
        }
        else if(newColor === 'bleu'){
            message.member.roles.cache.get('925234649972748298').edit({ name: `${newSymbol}・${newName}`, color: '0023FF' });
            message.channel.send(new Discord.MessageEmbed().setTitle(`Role Personnalisé.`).setDescription(`Votre role personnalisé a été modifié avec succès.\n_ _\n**Symbole:** ${newSymbol}\n**Nom:** ${newName}\n**Couleur :** Bleu\n_ _\n<@&925234649972748298>`))
        }
        else if(newColor === 'violet'){
            message.member.roles.cache.get('925234649972748298').edit({ name: `${newSymbol}・${newName}`, color: '7800FF' });
            message.channel.send(new Discord.MessageEmbed().setTitle(`Role Personnalisé.`).setDescription(`Votre role personnalisé a été modifié avec succès.\n_ _\n**Symbole:** ${newSymbol}\n**Nom:** ${newName}\n**Couleur :** Violet\n_ _\n<@&925234649972748298>`))
        }
        else if(newColor === 'rose'){
            message.member.roles.cache.get('925234649972748298').edit({ name: `${newSymbol}・${newName}`, color: 'FF00E4' });
            message.channel.send(new Discord.MessageEmbed().setTitle(`Role Personnalisé.`).setDescription(`Votre role personnalisé a été modifié avec succès.\n_ _\n**Symbole:** ${newSymbol}\n**Nom:** ${newName}\n**Couleur :** Rose\n_ _\n<@&925234649972748298>`))
        }
        else{
            message.member.roles.cache.get('925234649972748298').edit({ name: `${newSymbol}・${newName}`, color: newColor });
            message.channel.send(new Discord.MessageEmbed().setTitle(`Role Personnalisé.`).setDescription(`Votre role personnalisé a été modifié avec succès.\n_ _\n**Symbole:** ${newSymbol}\n**Nom:** ${newName}\n**Couleur (HTML):** ${newColor}\n_ _\n<@&925234649972748298>`))
        }

        
        }
        else return message.channel.send(new Discord.MessageEmbed().setTitle('Erreur.').setDescription(`Vous n'avez pas de rôle personnalisé.`))
    }
    else return message.channel.send(new Discord.MessageEmbed().setDescription('Commande seulement utilisable sur [KrokCine](https://discord.gg/E4KSjhv8WR) !'))
    
}

module.exports.config = {
    name: 'role'
}