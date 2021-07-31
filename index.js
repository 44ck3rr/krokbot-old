const Discord = require('discord.js');
const client = new Discord.Client({
    fetchAllMembers: true
}),
config = require('./config.json')
fs = require('fs')

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
})

client.login(process.env.TOKEN);

client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${files}`)
        client.commands.set(command.name, command)
    })
})

client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return

    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    if (command.guildOnly && !message.guild) return message.channel.send('**Cette commande ne peut être utilisé que dans notre Taverne !**')
    command.run(message, args, client)
})

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(config.greeting.joinChannel).send(`**${member} a rejoint notre Taverne ! 🥴**\n**Nous somme maintenant ${member.guild.memberCount} Autistes dans notre Taverne** 🍻`)
    member.roles.add(config.greeting.joinRole)
})

client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(config.greeting.leaveChannel).send(`**${member.user.tag} a quitté notre Taverne 😭**\n**Ce n'est plus un Autiste ! 😥**\nNous somme maintenant ${member.guild.memberCount} Autistes dans notre Taverne ! 🍺**`)
})