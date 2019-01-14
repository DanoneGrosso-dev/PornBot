const Discord = require("discord.js");
const request = require('request');
module.exports = {
    aliases: ["redtube", "rt"], // Coloque no diminutivo
    help: {
        desc: "Procuro no RedTube",
        exemplo: "redtube",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        var maximo = 15
        let reason = args.slice(0).join(' ');
        if (!reason) {
            let embed = new Discord.RichEmbed()
                .setDescription(":no_entry_sign: Missing Args\n" + client.prefix + "redtube <tag> or random");
            return message.reply(embed);
        }
        var msg = ''
        request('https://api.redtube.com/?data=redtube.Videos.searchVideos' + (args.length >= 1 ? '&output=' + args.join('+').substring(0, 100) : ''), function (error, response, body) {
            var categories = JSON.parse(body).videos
            for (var i = 0; i < maximo; i++) {
                msg += "[ " + (i + 1) + " ]" + categories[i].video.title + " = " + categories[i].video.duration + "\n"
            }
            message.delete();
            const filter = m => m.author.id == message.author.id;
            message.channel.send("Selecione um Número do 1 ao "+maximo+"!\n```css\n" + msg + "```").then(function (sending) {
                message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
                    .then(collected => {
                        var Escolhido = collected.first().content
                        sending.delete();
                        let numero = parseInt(Escolhido)
                        var open = true
                        if (numero < 1) {
                            open = false
                        } else if (numero > maximo) {
                            open = false
                        } else if (isNaN(numero)) {
                            open = false
                        };
                        if (open == true) {
                            let embed = new Discord.RichEmbed()
                                .setColor(`#ec97ff`)
                                .setTitle("RedTube video search")
                                .setDescription(`[${categories[Escolhido].video.title}](${categories[Escolhido].video.url})\nRedTube video search`)
                                .addField("Video stats", `Views: ${categories[Escolhido].video.views}\nRating: ${categories[Escolhido].video.rating}\nRatings: ${categories[Escolhido].video.ratings}\nDuration: ${categories[Escolhido].video.duration}\nDate published: ${categories[Escolhido].video.publish_date}\nUrl: ${categories[Escolhido].video.url}`)
                                .setImage(categories[Escolhido].video.thumb)
                                .setFooter(`${message.author.username} - ${args.slice(0).join(' ')}`, message.author.avatarURL);
                            message.channel.send(embed)
                        } else {
                            message.channel.send(`:no_good: ${message.author.toString()} Selecione um Número correto!`)
                        }
                        collected.first().delete();
                    });
            })
        });
    }
}