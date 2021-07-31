const Discord = require('discord.js');
const bdd = require('../bdd.json');
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        bot.channel.cache.get(bdd['channel-events']).send('Concours (Test)').then(message => {
            message.react('✨');
            bdd['message-event-1k'] = message.id;
            Savebdd;
        });
}
function Savebdd() {
    fs.writeFile('../bdd.json', JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send('Une erreur est survenue.');
    });
}
module.exports.config = {
    name: 'event'
}