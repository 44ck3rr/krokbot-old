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
        🟠・__\`Tuches\`__ ([1](https://www.youtube.com/watch?v=ndCzT6dyOqk), [2](https://www.youtube.com/watch?v=pKbox8S-se4), [3](https://www.youtube.com/watch?v=WqSPFOLA9sE), [4](https://www.youtube.com/watch?v=vxWSTApFmR4))
        🟢・__\`LVS\`__ ([La vie scolaire](https://www.youtube.com/watch?v=n05KRM4Qbq0))
        🟢・__\`SMF\`__ ([Spider-Man: Far From Home](https://www.youtube.com/watch?v=FguIk-SEkWI))
        🟢・__\`Inseparables\`__ ([Inséparables](https://www.youtube.com/watch?v=Dd-r11c42xQ))
        🟢・__\`Afond\`__ ([A fond](https://www.youtube.com/watch?v=Hh29AkftLn8))`)
        .addField(`_ _`, `
        🟢・__\`FastHS\`__ ([Fast & Furious: Hobbs & Shaw](https://www.youtube.com/watch?v=NfCiX81lcDU))
        🟠・__\`Venom\`__ ([1](https://www.youtube.com/watch?v=Pw9ZvTicmIg), [2](https://www.youtube.com/watch?v=eUkslWrf1Ds))
        🔴・__\`BlackWidow\`__ ([Black Widow](https://www.youtube.com/watch?v=4l99M0zOEaA))
        🔴・__\`Avengers\`__ ([1](https://www.youtube.com/watch?v=b-kTeJhHOhc), [2](https://www.youtube.com/watch?v=Z0mPyiZ23x8), [3](https://www.youtube.com/watch?v=eIWs2IUr3Vs), [4](https://www.youtube.com/watch?v=wV-Q0o2OQjQ))
        🔴・__\`SpiderMan\`__ ([1](https://www.youtube.com/watch?v=rcVNkgpLhPM), [2](https://www.youtube.com/watch?v=4ZIekwOMhdU), [3](https://www.youtube.com/watch?v=qK7nMGNlHgk&t))
        🔴・__\`SpiderAmazing\`__ ([1](https://www.youtube.com/watch?v=mJlDpguadbk), [2](https://www.youtube.com/watch?v=Vd3YX3O6P_8))`)
        .setColor('#FF8000'))
    }
    else message.channel.send(new Discord.MessageEmbed()
    .setDescription('Commande seulement utilisable sur [KrokCine](https://discord.gg/E4KSjhv8WR) !'))
},

module.exports.config = {
    name: 'catalogue'
}