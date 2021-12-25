const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (message.guild.id == 908063418727165982){
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('**Catalogue de Films**')
        .setDescription(`Voici notre catalogue de films.
        Utilisez la commande \`!film [Nom du film]\` pour avoir l\'accès au film
        Le nom du film à entrer est **__souligner__** !
        Vous pouvez visionner les bandes-annonces en cliquant sur le film correspondant.

        ─────────────

        🟢: Disponible
        🟠: Partiellement Disponible
        🔴: Possiblement Disponible à l'avenir

        ─────────────`)
        .addField(`_ _`, `
        🟠・__\`Dragons\`__ ([1](https://www.youtube.com/watch?v=rsj6Iv2jE1I), [2](https://www.youtube.com/watch?v=zizhykXsrPI), [Retrouvailles](https://www.youtube.com/watch?v=twYrNKt2Vbw))
        🟢・__\`LVS\`__ ([La vie scolaire](https://www.youtube.com/watch?v=n05KRM4Qbq0))
        🟢・__\`SMF\`__ ([Spider-Man: Far From Home](https://www.youtube.com/watch?v=FguIk-SEkWI))
        🔴・__\`SMN\`__ ([Spider-Man: No Way Home](https://www.youtube.com/watch?v=7w_w10HVa54))
        🟢・__\`Afond\`__ ([A fond](https://www.youtube.com/watch?v=Hh29AkftLn8))
        🟢・__\`FastHS\`__ ([Fast & Furious: Hobbs & Shaw](https://www.youtube.com/watch?v=NfCiX81lcDU))`)
        .setColor('#FF8000'))
    }
    else message.channel.send(new Discord.MessageEmbed()
    .setDescription('Commande seulement utilisable sur [KrokCine](https://discord.gg/E4KSjhv8WR) !'))
},

module.exports.config = {
    name: 'catalogue'
}