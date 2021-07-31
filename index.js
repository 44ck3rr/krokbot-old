const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client;

const prefix = '.';

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
    
    const status = [
        '.',
        '.h',
        '.he',
        '.hel',
        '.help',
        '꒰⑅•ᴗ•⑅꒱',
        '.help',
        '꒰⑅•ᴗ•⑅꒱'
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(status[i], {type: 'STREAMING', url: 'https://twitch.tv/NyanCat'})
        i = ++i % status.length
    }, 1000)
})

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
})

client.on('error', (error) => console.error());

client.login(process.env.TOKEN);
