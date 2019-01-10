const Discord = require("discord.js");
const request = require('snekfetch');
module.exports = {
    aliases: ["eron"], // Coloque no diminutivo
    help: {
        desc: "Eron <3",
        exemplo: "eron",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            request.get('https://nekos.life/api/v2/img/eron').end((err, response) => {
                    const lewdembed = new Discord.RichEmbed()
                    .setTitle("Eron Hentai")
                        .setImage(response.body.url)
                        .setColor(`RANDOM`)
                    message.channel.send(lewdembed);
                })
        }
    }
}