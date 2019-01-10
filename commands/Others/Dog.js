const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["dog"], // Coloque no diminutivo
    help: {
        desc: "dog",
        exemplo: "dog",
    },
    run: (client, message, args) => {
        randomPuppy("dog")
            .then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Dog")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
    }
}