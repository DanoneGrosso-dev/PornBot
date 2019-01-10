const Discord = require("discord.js");
const request = require('snekfetch');
module.exports = {
    aliases: ["trap","futanari"], // Coloque no diminutivo
    help: {
        desc: "Yuri <3",
        exemplo: "yuri",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            request.get(`https://nekos.life/api/v2/img/trap`, 'https://nekos.life/api/v2/img/futanari')
                .end((err, response) => {
                    const lewdembed = new Discord.RichEmbed()
                        .setImage(response.body.url)
                        .setColor(`RANDOM`)
                    message.channel.send(lewdembed);
                })
        }
    }
}