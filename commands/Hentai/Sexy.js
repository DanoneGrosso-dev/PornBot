const superagent = require("snekfetch");
const Discord = require('discord.js')
module.exports = {
    aliases: ["sexy","lewd","lewdk","lewdkemo"], // Coloque no diminutivo ( Nome do comando para usar )
    help: { // Sistema de Help
        desc: "Gifs e fotos hentais", // Descrição dele
        exemplo: "sexy", // Como usar o comando!
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        var subreddits = [
            "https://nekos.life/api/v2/img/lewd",
            "https://nekos.life/api/v2/img/lewdk",
            "https://nekos.life/api/v2/img/lewdkemo"
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        superagent.get(sub)
            .end((err, response) => {
                const lewdembed = new Discord.RichEmbed()
                    .setTitle("Sexy")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                message.channel.send(lewdembed);
            })
    }
}