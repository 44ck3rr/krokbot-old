const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const bdd = require('./bdd.json');
const fs = require('fs');

const client = new Discord.Client;

const prefix = '.';

bot.on('messageReactionAdd', async (reaction, member) => {
//	if(reaction.partial){
//            await reaction.fetch();
//            console.log(`le message avec l'id : ${reaction.message.id} à bien été restocké dans le cache !` );
//           return;
//       }
    if (member.bot) return;
    if (reaction.emoji.name == "✨" && reaction.message.id == bdd["message-event-1k"]) {
        bdd["participants-event-1k"].push(member.id)
        Savebdd()
        member.send('Votre participation au concours à bien été enregistrée !').catch(err => console.log(err));
    }
})
bot.on('messageReactionRemove', (reaction, member) => {
    if (member.bot) return;
    if (reaction.emoji.name == "✨" && reaction.message.id == bdd["message-event-1k"]) {
        getindex = bdd["participants-event-1k"].indexOf(member.id)
        if (getindex > -1) {
            bdd["participants-event-1k"].splice(getindex, 1);
        }
        Savebdd();
        member.send('Votre désabonnement au concours à bien été enregistré !').catch(err => console.log(err));
    }
})

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
})

client.on('error', (error) => console.error());

client.login(process.env.TOKEN);