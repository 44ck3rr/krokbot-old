const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client;

const prefix = '=';

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
})

client.on('message', message => {
    if(message.content.startsWith(prefix + 'play')){
        if(message.member.voice.channel){
            if(message.member.voice.channel.id = ('657697993423716355')){
                message.member.voice.channel.join().then(connection => {
                    let args = message.content.split(' ');

                    if(!args[1]){
                        message.reply('Url invalide')
                  }
                  else {
                    
                  let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio" }));

                 dispatcher.on('finish', () => {
                     dispatcher.destroy();
                 })

                 dispatcher.on('error', err => {
                      console.log('Erreur de dispatcher : ' + err);
                  })
                  }
               }).catch(err => {
                 message.reply('Erreur lors de la connexion : ' + err);
                 })
            }
            else {
                message.reply("Vous n'êtes pas dans le salon vocal 🎶・Music")
            }   
        }
        
        else {
            message.reply("Vous n'êtes pas connecté en vocal");
        }
    }
})

client.on('error', (error) => console.error());

client.login('process.env.TOKEN')
