const Discord = require('discord.js');
const client = new Discord.Client({
    disabledEvents: ['TYPING_START', 'VOICE_STATE_UPDATE', 'VOICE_SERVER_UPDATE', 'PRESENCE_UPDATE', 'MESSAGE_DELETE', 'CHANNEL_CREATE', 'CHANNEL_DELETE', 'CHANNEL_UPDATE'],
    messageCacheMaxSize: 300,
    messageCacheLifetime: 60 * 30,
    messageSweepInterval: 60 * 60
});
//const attstatus = require("./update.js");
const config = require('./data/config.json');
client.prefix = config.prefix;
const nameprefix = "alo"
const fs = require('fs');
const tempoxp = new Set()
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
    if (!message.guild) return message.reply("Comandos não funcionam aqui! caso precise de ajuda entre no meu servidor:\n  https://discord.gg/Qq2J2xW")
    if (!message.content.startsWith(config.prefix) && !message.content.toLocaleLowerCase().startsWith(nameprefix)) return;
    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(config.prefix.length)
    if (message.content.split(' ')[0].toLowerCase() == nameprefix) {
        command = message.content.split(' ')[1] ? message.content.split(' ')[1].toLowerCase() : ""
    }
    try {
        args = message.content.split(" ").slice(1);
        if (!comandos.some(a => a.aliases.map(b => b.toLowerCase()).includes(command))) return;
        if (temposet.has(message.author.id)) return message.reply("Espere 5 segundos antes de usar um comando novamente!")
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
