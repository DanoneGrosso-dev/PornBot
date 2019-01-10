const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["cat"], // Coloque no diminutivo
    help: {
        desc: "cat",
        exemplo: "cat",
    },
    run: (client, message, args) => {
        randomPuppy("cat")
            .then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Cat")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
    }
}