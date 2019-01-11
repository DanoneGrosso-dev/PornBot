const config = require("../../data/config.json")
const Discord = require("discord.js");
var moment = require('moment/moment'); moment.locale('pt-BR');
module.exports = {
    aliases: ["info"], // Coloque no diminutivo
    help: {
        desc: "Mostro minhas informações",
        exemplo: "info",
    },
    run: (client, message, args) => {
        var Argumentos = ""
        if (args[0]) {
            var Argumentos = args[0].toLowerCase()
        }
        if (Argumentos == "bot") {
            const embed = new Discord.RichEmbed()
                .setColor(`#602bff`)
                .setAuthor(client.user.username, client.user.avatarURL)
                .setDescription("**Sobre Mim**\nOlá me chamo " + client.user.username + ", Sou um Bot Brasileiro e Fui programada em Node.js!\nMeu prefix é ``[ " + config.prefix + " ]``!")
                .addField("<:server:412263453550575627> Servidores:", "```js\n" + client.guilds.size + "```", true)
                .addField("<:pessoas:412266233845645312> Usuarios:", "```js\n" + client.users.size + "```", true)
                .addField("<:canal:412265582541406208> Canais:", "```js\n" + client.channels.size + "```", true)
                .addField("<:ping:412266860667731970> Ping:", "```js\n" + client.ping + " Ms```", true)
                .addField("<:memoria:412267464605433877> Ram:", "```js\n" + Math.floor(process.memoryUsage().rss / 1024 / 1000) + ' Mb' + '```', true)
                .addField("<:temporeal:412273857433436171> Fiquei online:", "```js\n" + moment(client.readyAt).format('LT L') + "```", true)
                .addField(":computer: Creators", "**" + client.Donos + "**", true)
                .addField("<:links:505518935886659616> Links:", "**[Support](" + config.Support + ")\n[Invite](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&permissions=999999999&scope=bot)**", true)
            message.reply(embed)
        } else if (Argumentos == "server") {
            let online = message.guild.members.filter(a => a.presence.status == "online").size;
            let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
            let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
            let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
            let bot = message.guild.members.filter(a => a.user.bot).size;
            let totalmembros = message.guild.memberCount;
            let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
            let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;

            let a = new Discord.RichEmbed()
                .addField("• Nome do servidor", `${message.guild.name}`, true)
                .addField("• :crown: Dono", `${message.guild.owner}`, true)
                .addField("• :earth_americas: Região", `${message.guild.region}`, true)
                .addField("• Total de canais", `\`\`${canaistexto}\`\` Texto /\`\`${canaisvoz}\`\` Voz`, true)
                .addField("• Total De Membros", `\`\`${totalmembros}\`\` Membros Atuais!`, true)
                .addField("•Total De Bots", `\`\`${bot}\`\` Bots Atuais!`, true)
                .addField("• :calendar:  Criado Dia", `\`\`${moment(message.guild.createdAt).format("LL")}\`\``, true)
                .addField("•:id:  ID Do Servidor", `\`\`${message.guild.id}\`\``, true)
                .addField("• Nivel De Verificação", `\`\`${message.guild.verificationLevel}\`\``, true)
                .addField("• Status Dos Membros", `\`\`${ocupado}\`\` Ocupados [<:DND:525424905928441857>] - \`\`${ausente}\`\` Ausentes [<:Idle:527926220986384394>]\n\`\`${offline}\`\` Offline [<:Offline:527926221028327424>] - \`\`${online}\`\` Online [<:Online:527926221124927528>]`, true)
                .setFooter(`${message.author.username} -> ServerInfo`, message.author.avatarURL)
            message.channel.send(a)
        } else {
            const embed = new Discord.RichEmbed()
                .setColor(`#602bff`)
                .setDescription("**Módulos Disponiveis:**\n``" + client.prefix + "info bot\n" + "" + client.prefix + "info server``")
                .setAuthor(client.user.username, client.user.avatarURL)
                .setThumbnail(client.user.avatarURL)
            message.reply(embed)
        }
    }
}