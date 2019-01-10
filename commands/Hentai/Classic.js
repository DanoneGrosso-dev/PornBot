const Discord = require("discord.js");
const request = require('snekfetch');
module.exports = {
    aliases: ["hclassic","hc"], // Coloque no diminutivo
    help: {
        desc: "Yaoi <3",
        exemplo: "yaoi",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            request.get(`https://nekos.life/api/v2/img/classic`)
                .end((err, response) => {
                    const lewdembed = new Discord.RichEmbed()
                    .setTitle("Classic Hentai")
                        .setImage(response.body.url)
                        .setColor(`RANDOM`)
                    message.channel.send(lewdembed);
                })
        }
    }
}