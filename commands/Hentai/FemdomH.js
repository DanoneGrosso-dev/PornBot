const Discord = require("discord.js");
const request = require('snekfetch');
module.exports = {
    aliases: ["hfemdom"], // Coloque no diminutivo
    help: {
        desc: "Femdom Hentai",
        exemplo: "hfendom",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            request.get(`https://nekos.life/api/v2/img/femdom`)
                .end((err, response) => {
                    const lewdembed = new Discord.RichEmbed()
                    .setTitle("Femdom Hentai")
                        .setImage(response.body.url)
                        .setColor(`RANDOM`)
                    message.channel.send(lewdembed);
                })
        }
    }
}