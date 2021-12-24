const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (message.guild.id == 908063418727165982){
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('**Catalogue de Films**')
        .setDescription(`Voici notre catalogue de films.
        Utilisez la commande \`!film [Nom du film]\` pour avoir l\'accès au film
        Le nom du film à entrer est **__souligner__** !

        ─────────────

        🟢: Disponible
        🟠: Partiellement Disponible
        🔴: Possiblement Disponible à l'avenir

        ─────────────`)
        .addField(`_ _`, `
        🟠・__\`Dragons\`__ (1, 2, Retrouvailles)
        🟢・__\`LVS\`__ (La vie scolaire)
        🟢・__\`SMF\`__ (Spider-Man: Far From Home)
        🔴・__\`SMN\`__ (Spider-Man: No Way Home)
        🟢・__\`Afond\`__ (A fond)
        🟢・__\`FastHS\`__ (Fast & Furious: Hobbs & Shaw)`)
        .setColor('#FF8000'))
    }
    else message.channel.send('Commande seulement utilisable sur KrokCine !')
},

module.exports.config = {
    name: 'catalogue'
}