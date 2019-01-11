const Discord = require('discord.js');
const client = new Discord.Client({
    disabledEvents: ['TYPING_START', 'VOICE_STATE_UPDATE', 'VOICE_SERVER_UPDATE', 'PRESENCE_UPDATE', 'MESSAGE_DELETE', 'CHANNEL_CREATE', 'CHANNEL_DELETE', 'CHANNEL_UPDATE'],
    messageCacheMaxSize: 300,
    messageCacheLifetime: 60 * 30,
    messageSweepInterval: 60 * 60
});
//const attstatus = require("./update.js");
var moment = require('moment/moment'); moment.locale('pt-BR');
const config = require('./data/config.json');
client.prefix = config.prefix;
const nameprefix = "alo"
const fs = require('fs');
const temposet = new Set()
const comandos = [];
// Leitor
(async () => {
    let pastas = await fs.readdirSync("./commands")
    for (let a of pastas) {
        if (!a.includes(".")) {
            let cmds = await fs.readdirSync("./commands/" + a)
            for (b of cmds) {
                let requiro = require("./commands/" + a + "/" + b)
                requiro["categoria"] = a.toLowerCase();
                requiro["categoria2"] = a;
                if (!requiro.aliases || !requiro.run) console.log(b)
                comandos.push(requiro)
            }
        }
    }
})()
client.cmds = comandos;

// Mensagem Automática
client.on('messageUpdate', (old, msg) => client.emit('message', msg));
// Jogando do Bot
client.on("ready", async () => {
    // Donos do Bot
    var Donos = ""
    for (let scr = 0; scr < config.DonoId.length; scr++) {
        Donos += client.users.get(config.DonoId[scr]) + "\n"
    }
    client.Donos = Donos
    client.cmds = comandos
    console.log('on')
    // Jogando do Botv
    const falas = [`Ajudando ${client.guilds.size} Servidores!`, `${client.users.size} Pessoas Me Conhecem!`, `Ola Use ${config.prefix}help Para Ver Meus Comandos`, `Quer Me Convidar Para O Seu Servidor? Use ${config.prefix}convite!`, `use a!help ou a!ajuda`, `Estou em ${client.channels.size} canais!`, `Use ${config.prefix}info Para Ver Minhas Informaçoes!`]
    setInterval(() => {
        var selecionada = falas[Math.floor(Math.random() * falas.length)]
        if (selecionada == null) selecionada = falas[Math.floor(Math.random() * falas.length)]
        client.user.setPresence({ game: { name: `${selecionada}`, type: 1, url: "https://www.twitch.tv/acnologlas" } })
    }, 5 * 60 * 1000)
    client.user.setPresence({ game: { name: `${config.prefix}ajuda ou ${config.prefix}help` } })
});
client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.startsWith(`<@${client.user.id}>`)) {
        let embed = new Discord.RichEmbed()
            .setColor(`#602bff`)
            .setDescription("Olá, Eu me chamo " + client.user.username + ".\nAbaixo você pode ver algumas informações sobre mim ^-^")
            .setThumbnail(client.user.avatar ? `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=512` : client.user.displayAvatarURL)
            .setAuthor(client.user.username + " Info", client.user.avatarURL)
            .addField(":alembic:️ Commands", `**${client.cmds.filter(a => !a.hide).length}** Comandos\n**4** Categories\nFor more info, ${config.prefix}help`, true)
            .addField(":sparkles: Discord", `**${client.guilds.size}** Guilds\n**${client.users.size}** Users\n**${client.channels.size}** Channels`, true)
            .addField(":information_source:️ Info", `Uptime **${moment(client.readyAt).format('LT L')}**\nRam **${process.memoryUsage().rss / 1024 / 1000}**\nPrefix [** ${config.prefix} **]`, true)
            .addField(":computer: Creators", "**" + client.Donos + "**", true)
            .addField(":link: Links", "**- [Support](" + config.Support + ") - | - [Invite](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&permissions=0&scope=bot) -**", true)
        //.setFooter("---------------------------------", "https://cdn.discordapp.com/emojis/492090395619098625.gif?v=1")
        message.channel.send({ embed })
    }
    //if (!message.guild) return message.reply("Comandos não funcionam aqui! caso precise de ajuda entre no meu servidor:\n  https://discord.gg/Qq2J2xW")
    if (!message.content.startsWith(config.prefix) && !message.content.toLocaleLowerCase().startsWith(nameprefix)) return;
    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(config.prefix.length)
    if (message.content.split(' ')[0].toLowerCase() == nameprefix) {
        command = message.content.split(' ')[1] ? message.content.split(' ')[1].toLowerCase() : ""
    }
    try {
        args = message.content.split(" ").slice(1);
        if (!comandos.some(a => a.aliases.map(b => b.toLowerCase()).includes(command))) return;
        if (temposet.has(message.author.id)) return message.reply("Espere 2 segundos antes de usar um comando novamente!")
        let commandFile = comandos.find(a => a.aliases.map(b => b.toLowerCase()).includes(command));
        commandFile.run(client, message, args)
        //if (Math.floor(Math.random() * 300) > 297) msg
        temposet.add(message.author.id)
        setTimeout(() => {
            temposet.delete(message.author.id)
        }, 2000);
    }
    catch (err) {
        if (err == 'MISSING_PERMISSIONS') return;
        console.error(err + ' No comando: ' + command);
    }
});

// Iniciação do Bot
client.login(config.token)
