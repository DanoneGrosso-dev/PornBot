const Discord = require("discord.js");
const request = require('snekfetch');
module.exports = {
    aliases: ["horgarms","horgarmos"], // Coloque no diminutivo
    help: {
        desc: "Orgarms Hentai <3",
        exemplo: "horgarms",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            request.get('https://nekos.life/api/v2/img/anal').end((err, response) => {
                    const lewdembed = new Discord.RichEmbed()
                    .setTitle("Orgarms Hentai")
                        .setImage(response.body.url)
                        .setColor(`RANDOM`)
                    message.channel.send(lewdembed);
                })
        }
    }
}