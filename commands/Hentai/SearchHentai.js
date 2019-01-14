var request = require('https');
const Discord = require('discord.js')
module.exports = {
    aliases: ["searchhentai", "shentai"], // Coloque no diminutivo
    help: {
        desc: "Hentai s2",
        exemplo: "hentai (nome do estilo de hentai)\nSite: https://gelbooru.com/\nAPI? Feita pelo Acnologia",
    },
    run: (client, message, args) => {
        if (message.channel.nsfw == false) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.");
        request.get('https://gelbooru.com/index.php?page=dapi&s=post&q=index&json=1&cid=1&limit=100' + (args.length >= 1 ? '&tags=' + args.join('+').substring(0, 100) : ''), function (res) {
            var b = '';
            res.on('data', function (chunk) {
                b += chunk;
            });
            res.on('end', function () {
                if (!Boolean(b)) return message.channel.send("**Não foi encontrado!**");
                b = JSON.parse(b);
                if (!b[0] || b.length < 1) return message.channel.send("**Não foi encontrado!**");
                const hentaiz = new Discord.RichEmbed()
                    .setColor(`RANDOM`)
                    .setImage(b[Math.floor(Math.random() * b.length)].file_url)
                    .setFooter(`${message.author.username} - ${args.slice(0).join(' ')}`, message.author.avatarURL)
                message.channel.send(hentaiz)
                //message.reply(b[Math.floor(Math.random() * b.length)].file_url)
            });
        });
    }
}