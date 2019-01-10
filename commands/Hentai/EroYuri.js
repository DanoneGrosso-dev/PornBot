const Discord = require("discord.js");
const request = require('snekfetch');
module.exports = {
    aliases: ["eroyuri","eronyuri"], // Coloque no diminutivo
    help: {
        desc: "EroYuri <3",
        exemplo: "eroyuri",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            request.get('https://nekos.life/api/v2/img/eroyuri').end((err, response) => {
                    const lewdembed = new Discord.RichEmbed()
                    .setTitle("EroYuri Hentai")
                        .setImage(response.body.url)
                        .setColor(`RANDOM`)
                    message.channel.send(lewdembed);
                })
        }
    }
}