const Discord = require("discord.js");
const request = require('request');

module.exports = {
    aliases: ["pornhub", "ph"], // Coloque no diminutivo
    help: {
        desc: "Procuro no PornHub",
        exemplo: "PornHub",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        let reason = args.slice(0).join(' ');
        if (!reason) {
            let embed = new Discord.RichEmbed()
                .setDescription(":no_entry_sign: Missing Args\n" + client.prefix + "redtube <tag> or random");
            return message.reply(embed);    
        }
        var msg = ''
        request('https://pt.pornhub.com/webmasters/search?&search=' + args.join('+').substring(0, 100), function (error, response, body) {
            var categories = JSON.parse(body).videos
            var maximo = categories.length
            if(maximo > 18) {maximo = 18}
            //console.log(categories)
            for (var i = 0; i < maximo; i++) {
                msg += "[ " + (i + 1) + " ]" + categories[i].title + " = " + categories[i].duration + "\n"
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
                                .setAuthor("PornHub video search","https://1000logos.net/wp-content/uploads/2017/12/Pornhub-symbol.jpg")
                                .setDescription(`[${categories[Escolhido].title}](${categories[Escolhido].url})\nPornHub video search`)
                                .addField(":mag_right: Video stats", `**Views:** ${categories[Escolhido].views} - **Rating:** ${categories[Escolhido].rating}\n**Ratings:** ${categories[Escolhido].ratings} - **Duration:** ${categories[Escolhido].duration}\n**Date published:** ${categories[Escolhido].publish_date}\n**Url:** ${categories[Escolhido].url}\n**Categories:** [ ${categories[Escolhido].categories.map(a => a.category).join(' | ')} ]\n**Tags:** [ ${categories[Escolhido].tags.map(a => a.tag_name).join(' | ')} ]`)
                                .setImage(categories[Escolhido].thumb)
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