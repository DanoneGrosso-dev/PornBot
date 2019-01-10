const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["4k","hdporn","wallpaperporn","nsfw"], // Coloque no diminutivo
    help: {
        desc: "HD PORN",
        exemplo: "hdporn",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

        var subreddits = [
            'NSFW_Wallpapers',
            'SexyWallpapers',
            'HighResNSFW',
            'nsfw_hd',
            'UHDnsfw',
            'nsfw'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

        randomPuppy(sub)
            .then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Wallpaper HD Porn")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
    }
}