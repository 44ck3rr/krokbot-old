const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client({
    fetchAllMembers: true
}),
config = require('./config.json')
fs = require('fs')

const prefix = '.';

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
    
    const status = [
        'Dev by: 4_4ck3r',
        '꒰⑅•ᴗ•⑅꒱'
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(status[i], {type: 'STREAMING', url: 'https://twitch.tv/NyanCat'})
        i = ++i % status.length
    }, 400)
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
    command.run(message, args, client)
})