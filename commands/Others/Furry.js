const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["furry"], // Coloque no diminutivo
    help: {
        desc: "furry",
        exemplo: "furry",
    },
    run: (client, message, args) => {
        randomPuppy("furry")
            .then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Furry")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
    }
}