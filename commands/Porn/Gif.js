const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["gif","giff"], // Coloque no diminutivo
    help: {
        desc: "Boobs né poha",
        exemplo: "Boobs",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            const subreddits = [
                "NSFW_GIF",
                "nsfw_gifs",
                "porninfifteenseconds",
                "60FPSPorn",
                "porn_gifs",
                "nsfw_Best_Porn_Gif",
                "LipsThatGrip",
                "adultgifs"
            ]
            var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

            randomPuppy(sub).then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Gif Porn")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
        }
    }

}