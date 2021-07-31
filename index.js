const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client;

const prefix = '.';

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
    
    const status = [
        'Dev by: 4_4ck3r',
        () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} Autistes Total`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(status[i], {type: 'PLAYING'})
        i = ++i % status.length
    }, 5000)
})

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
})

client.on('error', (error) => console.error());

client.login(process.env.TOKEN);
