const Discord = require("discord.js");
const request = require('snekfetch');
module.exports = {
    aliases: ["neko","neeko"], // Coloque no diminutivo
    help: {
        desc: "BlowJob Hentai",
        exemplo: "hblowjob",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            request.get(`https://nekos.life/api/v2/img/nsfw_neko_gif`)
                .end((err, response) => {
                    const lewdembed = new Discord.RichEmbed()
                    .setTitle("Neko Hentai")
                        .setImage(response.body.url)
                        .setColor(`RANDOM`)
                    message.channel.send(lewdembed);
                })
        }
    }
}