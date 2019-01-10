const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["pussy"], // Coloque no diminutivo
    help: {
        desc: "Pussy",
        exemplo: "pussy",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            var subreddits = [
                'pussy',
                'rearpussy',
                'simps',
                'vagina',
                'MoundofVenus',
                'PerfectPussies',
                'spreading'
            ]
            var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

            randomPuppy(sub).then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Pussy <3")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
        }
    }

}