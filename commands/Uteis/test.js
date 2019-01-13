module.exports = {
    aliases: ["test"], // Coloque no diminutivo
    help: {
        desc: "Mostro minha Latẽncia",
        exemplo: "test",
    },
    run: (client, message, args) => {
        // Await !vote messages
        const filter = m => m.content.startsWith("!vote");
        // Errors: ['time'] treats ending because of the time limit as an error
        message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
            .then(collected => console.log(collected.size))
            .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));
            var tazer = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 50, max: 1 });
            tazer.on('collect', r=> {
                let escolha = r.content
            });
    }
}

const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
    message.delete()

        await message.author.createDM();
        message.author.send(`Olá, ${message.author.username}.
Primeira mensagem
                
Segunda mensagem... `);
        var tazer = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer.on('collect', r=> {
            let player = r.content;
            message.author.send("Por qual motivo esse membro deveria ser punido?");
          
            var tazer1 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer1.on('collect', r=> {
            let outracoisa = r.content;
            message.author.send("Mande provas,caso seja alguma foto mande-a por link, caso não há, sua denúncia será negada.");
            var tazer2 = message.author.dmChannel.createMessageCollector(b=>b.author.id == message.author.id,  { time: 1000 * 60, max: 1 });
            tazer2.on('collect', r2=> {
                let motivo = r2.content;
                let usuarioicone = message.author.displayAvatarURL;
                const reportplayer = new Discord.RichEmbed()
                .setDescription(`**Autor:** ${message.author.username}
**Acusado:** ${player}
**Motivo:** ${outracoisa}
**Provas:** ${motivo}`)
                .setThumbnail(usuarioicone)
                let canal = client.channels.get("526969918273355787").send(reportplayer);
                message.author.send("Manda mensagem pro autor que executou o comando")
            })
        })
    })
}