const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["ass", "bundas"], // Coloque no diminutivo
    help: {
        desc: "HD PORN",
        exemplo: "hdporn",
    },
    run: (client, message, args) => {
        var max = 5511;
        var min = 1000;
        var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
        var MathLoL = Math.round(MathRan);
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            let embed = new Discord.RichEmbed()
                    .setTitle("Ass (Bundas)")
                    .setImage("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg")
                    .setColor('RANDOM')
                message.channel.send(embed)
        }
    }
}