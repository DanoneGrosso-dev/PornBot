const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["blowjob","bj","blowjb","bjob"], // Coloque no diminutivo
    help: {
        desc: "BlowJob",
        exemplo: "blowjob",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            randomPuppy("blowjob").then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("BlowJob (Mamada)")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            });
        }
    }
}