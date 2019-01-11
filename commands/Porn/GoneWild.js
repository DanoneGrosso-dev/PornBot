const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["gonewild"], // Coloque no diminutivo
    help: {
        desc: "gonewild",
        exemplo: "gonewild",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            var subreddits = [
                "gonewild",
            ]
            var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
            randomPuppy(sub).then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Gone Wild")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            });
        }
    }
}