var Discord = require('discord.js')
module.exports = {
    aliases: ["ajuda", "help"],
    help: {
        exemplo: "help",
        desc: "Mostro Meus comandos"    
    }
}
var Emoji = {
    "uteis":"<a:blobdance:532963311290023950>",
    "others":"<a:Dog:532963598767489045>",
    "porn":"🔞",
    "hentai":"<:hentai:532962268028076054>"
}
module.exports.run = async (client, message, args) => {
    const comandos = client.cmds.filter(a => !a.hide)
    const categorias = [comandos.filter(a => a.categoria == "uteis"), comandos.filter(a => a.categoria == "others"), comandos.filter(a => a.categoria == "hentai"), comandos.filter(a => a.categoria == "porn")]
    //console.log(categorias[2].map(a => `${a.aliases[0]}`).join(', '))
    const embed = new Discord.RichEmbed()
        .setColor(`#602bff`)
        .setFooter("Prefix "+client.prefix+"","https://cdn.discordapp.com/emojis/532964141225476106.gif?v=1?size=2048");
        //.setThumbnail(champions[coiso].icon)
        for (var b=0; b < categorias.length;b++){
            embed.addField(Emoji[categorias[b][0].categoria]+categorias[b][0].categoria2, categorias[b].map(a => "``"+a.aliases[0]+"``").join(' | '))
        }
        message.channel.send(embed)
}