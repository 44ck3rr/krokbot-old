const Discord = require('discord.js');
const client = new Discord.Client()
//const db = require('quick.db')
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

client.on('guildMemberAdd', member => {
    if(member.guild.id === '908063418727165982')
    client.channels.cache.get('923631031326740490').send(`||${member}||`)
    client.channels.cache.get('923631031326740490').send(new Discord.MessageEmbed()
    .setTitle('Nouveau Membre !')
    .setDescription(`👋・Bienvenue ${member.displayName}
    👥・Nous sommes maintenant ${member.guild.memberCount} membres !
    📕・Lis les règles afin d'éviter toutes sanctions !`))
    client.channels.cache.get('923641625605980300').send(`${member} **Choisis tes roles.**`).then(sent => sent.delete({timeout: 5e3}))
    client.channels.cache.get('908064712594444298').send(`${member} **Accès aux films.**`).then(sent => sent.delete({timeout: 5e3}))
})

client.login(process.env.TOKEN);
