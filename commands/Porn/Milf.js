const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["milf"], // Coloque no diminutivo
    help: {
        desc: "Milf ",
        exemplo: "milf",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

        var subreddits = [
            'milf',
            'amateur_milfs',
            'NotTeenNotMilf'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

        randomPuppy(sub)
            .then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Milf Porn")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
    }
}