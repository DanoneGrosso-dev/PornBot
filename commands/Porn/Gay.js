const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["gay"], // Coloque no diminutivo
    help: {
        desc: "lesbian",
        exemplo: "lesbian",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            var subreddits = [
                "nsfw_gay",
                "nsfwgay",
                "gayporn"
            ]
            var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
            randomPuppy(sub).then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Gay")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            });
        }
    }
}