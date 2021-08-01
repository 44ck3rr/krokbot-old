const Discord = require('discord.js');
const client = new Discord.Client()
const config = require('./config.json')
const prefix = config.prefix
const fs = require('fs')

client.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files ) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === 'js');
    if(jsfile.length <= 0) {
        console.log('Aucune commande n\'a été trouvée dans le Handler')
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`HANDLER: ${f} a été detecter.`)
        client.commands.set(props.config.name, props)
    })
})

client.on('message', async message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.splice(1);

    let commandFile = client.commands.get(command.slice(prefix.length))
    if(commandFile) commandFile.run(client, message, args)
})

client.on('ready', async () => {
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
    let statuses = [
        'Dev by 4_4ck3r',
        '.help'
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: 'STREAMING'})
    }, 5000)
})

client.on('guildMemberAdd', async (member) => {
    let welcomeChannel = client.channels.cache.get('676111418776354866')
    welcomeChannel.send(`Bienvenue, ${member.user} dans La Taverne des Autistes ! 🎉`)

    member.roles.add(config.welcomeRoles)
})

client.on('guildMemberRemove', async (member) => {
    let leaveChannel = client.channels.cache.get('676135861078851628')
    leaveChannel.send(`${member.user.tag} a quitté notre taverne 😥, Ce n'est plus un autiste`)
})

client.login(process.env.TOKEN);
