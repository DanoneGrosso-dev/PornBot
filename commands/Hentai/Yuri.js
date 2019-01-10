const Discord = require("discord.js");
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["yuri"], // Coloque no diminutivo
    help: {
        desc: "Yuri <3",
        exemplo: "yuri",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            randomPuppy("yuri").then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Yuri")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
        }
    }
}