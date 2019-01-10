const Discord = require("discord.js");
const request = require('snekfetch');
module.exports = {
    aliases: ["boobs","peitos"], // Coloque no diminutivo
    help: {
        desc: "Boobs né poha",
        exemplo: "Boobs",
    },
    run: (client, message, args) => {
        var max = 13440;
        var min = 10000;
        var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
        var MathLoL = Math.round(MathRan);
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            let embed = new Discord.RichEmbed()
                .setTitle("Boobs (Peitos)")
                .setImage("http://media.oboobs.ru/boobs_preview/" + MathLoL + ".jpg")
                .setColor('RANDOM')
            message.channel.send(embed)
        }
    }
}