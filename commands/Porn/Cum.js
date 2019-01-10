const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["cum", "porra"], // Coloque no diminutivo
    help: {
        desc: "Cum",
        exemplo: "cum",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            randomPuppy("cum").then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Cum (Porra)")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            });
        }
    }
}