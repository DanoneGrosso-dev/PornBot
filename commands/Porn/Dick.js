const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["dick","dickpic"], // Coloque no diminutivo
    help: {
        desc: "Dick <3 (Pinto)",
        exemplo: "dick",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            randomPuppy("dickpic").then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Dick (Penis)")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
        }
    }
}