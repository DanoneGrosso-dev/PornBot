const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["amateur","realgirls","rgirl","realgirl","rg","rgirls"], // Coloque no diminutivo
    help: {
        desc: "RealGirls",
        exemplo: "amateur",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            var subreddits = [
                'RealGirls',
                'amateur',
                'gonewild'
            ]
            var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
            randomPuppy(sub).then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("RealGirls")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            });
        }
    }
}