const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["uniform","military"], // Coloque no diminutivo
    help: {
        desc: "uniform",
        exemplo: "uniform",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

        var subreddits = [
            'MilitaryGoneWild',
            'sexyuniforms'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

        randomPuppy(sub)
            .then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Uniform Porn")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
    }
}