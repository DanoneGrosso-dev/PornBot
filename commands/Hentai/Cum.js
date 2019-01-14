const Discord = require("discord.js");
const request = require('snekfetch');
module.exports = {
    aliases: ["cum","cumg"], // Coloque no diminutivo
    help: {
        desc: "Hentai Cum (Hentai Porra)",
        exemplo: "cum",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            request.get('https://nekos.life/api/v2/img/cum_jpg').end((err, response) => {
                    const lewdembed = new Discord.RichEmbed()
                    .setTitle("Cum Hentai")
                        .setImage(response.body.url)
                        .setColor(`RANDOM`)
                    message.channel.send(lewdembed);
                })
        }
    }
}