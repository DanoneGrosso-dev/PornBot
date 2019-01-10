const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["yaoi"], // Coloque no diminutivo
    help: {
        desc: "Yaoi <3",
        exemplo: "yaoi",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            randomPuppy("yaoi").then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Yaoi")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
        }
    }
}