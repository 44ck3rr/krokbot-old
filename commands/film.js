const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (message.guild.id == 908063418727165982){
        const film = args.join(" ")
        if (!film) return message.channel.send('Aucun film indiquer')
        if(args[0] === 'LVS'){
            if(!message.member.roles.cache.has('913149663832571945')){
                message.member.roles.add('913149663832571945')
                message.channel.send('Réussie ! Accès ajouté.')
            }
            else{
                message.member.roles.remove('913149663832571945')
                message.channel.send('Réussie ! Accès retiré.')
            }
            
        }
        else if(args[0] === 'Dragons'){
            if(!message.member.roles.cache.has('908092305012056114')){
                message.member.roles.add('908092305012056114')
                message.channel.send('Réussie ! Accès ajouté.')
            }
            else{
                message.member.roles.remove('908092305012056114')
                message.channel.send('Réussie ! Accès retiré.')
            }
            
        }
        else if(args[0] === 'SMF'){
            if(!message.member.roles.cache.has('923616649825898537')){
                message.member.roles.add('923616649825898537')
                message.channel.send('Réussie ! Accès ajouté.')
            }
            else{
                message.member.roles.remove('923616649825898537')
                message.channel.send('Réussie ! Accès retiré.')
            }
        }
        else if(args[0] === 'Afond'){
            if(!message.member.roles.cache.has('923813598835380265')){
                message.member.roles.add('923813598835380265')
                message.channel.send('Réussie ! Accès ajouté.')
            }
            else{
                message.member.roles.remove('923813598835380265')
                message.channel.send('Réussie ! Accès retiré.')
            }
        }
        else if(args[0] === 'FastHS'){
            if(!message.member.roles.cache.has('923820089118191627')){
                message.member.roles.add('923820089118191627')
                message.channel.send('Réussie ! Accès ajouté.')
            }
            else{
                message.member.roles.remove('923820089118191627')
                message.channel.send('Réussie ! Accès retiré.')
            }
        }
        else if(args[0] === 'Tuches'){
            if(!message.member.roles.cache.has('927186585550725230')){
                message.member.roles.add('927186585550725230')
                message.channel.send('Réussie ! Accès ajouté.')
            }
            else{
                message.member.roles.remove('927186585550725230')
                message.channel.send('Réussie ! Accès retiré.')
            }
        }
        else if(args[0] === 'Inseparables'){
            if(!message.member.roles.cache.has('927190236193259561')){
                message.member.roles.add('927190236193259561')
                message.channel.send('Réussie ! Accès ajouté.')
            }
            else{
                message.member.roles.remove('927190236193259561')
                message.channel.send('Réussie ! Accès retiré.')
            }
        }
        else if(args[0] === 'Venom'){
            if(!message.member.roles.cache.has('927202473045786695')){
                message.member.roles.add('927202473045786695')
                message.channel.send('Réussie ! Accès ajouté.')
            }
            else{
                message.member.roles.remove('927202473045786695')
                message.channel.send('Réussie ! Accès retiré.')
            }
        }
        else message.channel.send(`Ce film n'est pas dans notre catalogue.`)
    }
    else message.channel.send(new Discord.MessageEmbed()
    .setDescription('Commande seulement utilisable sur [KrokCine](https://discord.gg/E4KSjhv8WR) !'))
}

module.exports.config = {
    name: 'film'
}