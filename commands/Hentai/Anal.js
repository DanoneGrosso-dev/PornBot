const Discord = require("discord.js");
const request = require('snekfetch');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["hanal"], // Coloque no diminutivo
    help: {
        desc: "Anal <3",
        exemplo: "hanal",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            request.get('https://nekos.life/api/v2/img/anal').end((err, response) => {
                    const lewdembed = new Discord.RichEmbed()
                    .setTitle("Anal Hentai")
                        .setImage(response.body.url)
                        .setColor(`RANDOM`)
                    message.channel.send(lewdembed);
                })
        }
    }
}