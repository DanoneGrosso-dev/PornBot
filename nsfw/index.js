const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: false});

bot.on("ready", async () => {
    console.log(`${bot.user.username} Está online!`);
    bot.user.setActivity("?comandos | Desenvolvido pelo T0PL1X0#3202  💸")
  });

bot.on('guildMemberAdd', member => {
    console.log(`${member}`, "has joined " + `${member.guild.name}`)
  });

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
  });

bot.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}ip`) {

    let botembed = new Discord.RichEmbed()
      .setAuthor("Nosso IP")
      .setColor("#23CAD5")
      .setDescription("lonexnetwork.reis.host")
      .setFooter(`Comando solicitado por: ${message.author.username} | LonexNetwork | IPs | `, "https://images-ext-1.discordapp.net/external/BCKxPNzZzEVfkbIublv7_3wG2016jTwGk3onTemVRnM/%3Fv%3D1/https/cdn.discordapp.com/emojis/450112878108999680.gif");

    message.channel.send(botembed);
    return;
    }
    if(cmd === `${prefix}convite`) {

    let botembed = new Discord.RichEmbed()
      .setAuthor("Convide seus amigos para nosso Discord!")
      .setColor("#23CAD5")
      .setDescription("https://discord.gg/apQw7GT")
      .setFooter(`Comando solicitado por: ${message.author.username} | LonexNetwork | Discord | `, "https://images-ext-1.discordapp.net/external/BCKxPNzZzEVfkbIublv7_3wG2016jTwGk3onTemVRnM/%3Fv%3D1/https/cdn.discordapp.com/emojis/450112878108999680.gif");

    message.channel.send(botembed);
    return;
  }
    if(cmd === `${prefix}bot`) {

    let botembed = new Discord.RichEmbed()
      .setAuthor("Sobre meu criador", message.author.avatarURL)
      .setColor("#36E15A")
      .addField("Eu fui desenvolvido pelo T0PL1X0#3202.", "Quer um BOT? Chama na DM!" )
      .addField("Obrigado por estar presente neste discord, a Gerencia agradesce!", "[Clique para entrar em nossa Loja!](https://servidorlonex.minepag.com/)")
      .setFooter(`Comando solicitado por: ${message.author.username} | LonexNetwork | Desenvolvedores | `, "https://images-ext-1.discordapp.net/external/BCKxPNzZzEVfkbIublv7_3wG2016jTwGk3onTemVRnM/%3Fv%3D1/https/cdn.discordapp.com/emojis/450112878108999680.gif");

    message.channel.send(botembed);
    return;
  }
    if(cmd === `${prefix}regras`) {

    let botembed = new Discord.RichEmbed()
      .setTitle("Regras")
      .setColor("RANDOM")
      .addField("1- Sem flood, ou spam!", "---")
      .addField("2- Não é permitido qualquer tipo de preconceito nesse servidor, por isso se você tiver algo contra, homossexuais, gays, lesbicas,trans... etc por favor retire-se! Ou apenas respeite.", "---")
      .addField("3- Não use comandos de bot's no chat-principal! tem canal próprio dos bot's pra isso, então por favor não queria dar uma de engraçadinho, haverá punições caso contrário", "---")
      .addField("4- Divulgação nesse servidor é proibido! Se alguém divulgar no chat geral, ou no seu privado por favor mande uma foto pra algum adm, pra estar aplicando a devida punição!", "---")
      .addField("5- O intuito do servidor é fazer novas amizades e jogar com a galera do seu clã ou amigos,. Então por favor mantenham a paz!", "---")
      .addField("Mas e a zoeira pode ter ? Claro sem dúvidas, só não abuse caso alguém não goste, saiba respeitar!", "---")
      .addField("INFRAÇÕES QUE RESULTAM EM MUTE: ", "• Flood/Spam. \n• Reclamar de punição que foi aplicada no servidor (FICA DE MIMIMI FALANDO QUE FOI MUTE INJUSTAMENTE) \n• Falar Coisas inadequadas ")
      .addField("INFRAÇÕES QUE RESULTAM EM BANIMENTO: ", "• Ofensa a algum membro ou Staff do Discord. \n• É extremamente proibido qualquer tipo de divulgação seja ela de ips, links no geral, discords, canal do youtube, (A MENOS QUE TENHA TAG YouTuber ou Youtube-Mini) \n• Ofensa ao servidor \n• Ameaçar o servidor ")
      .setFooter(`Comando solicitado por: ${message.author.username} | LonexNetwork | Regras | `, "https://images-ext-1.discordapp.net/external/BCKxPNzZzEVfkbIublv7_3wG2016jTwGk3onTemVRnM/%3Fv%3D1/https/cdn.discordapp.com/emojis/450112878108999680.gif");

    message.author.send(botembed);
    message.channel.send(`${message.author}, Enviei as Regras do Servidor em seu DM! Checa lá :wink: `);
    return;
  }
    if(cmd === `${prefix}comandos`) {

    let botembed = new Discord.RichEmbed()
      .setTitle("")
      .setColor("RANDOM")
      .addField("Lonex - Comandos ", "• ?ip \n• ?convite \n• ?regras \n• ?sites \n• ?bot \n• ?comandos \n• ?donos \n• ?ping \n• !comandos \n• !mineinfo \n• !skin \n• !head \n• !calcular")
      .setFooter(`Comando solicitado por: ${message.author.username} | LonexNetwork | Comandos | `, "https://images-ext-1.discordapp.net/external/BCKxPNzZzEVfkbIublv7_3wG2016jTwGk3onTemVRnM/%3Fv%3D1/https/cdn.discordapp.com/emojis/450112878108999680.gif");

    message.channel.send(botembed);
    return;
  }
    if(cmd === `${prefix}sites`) {

    let botembed = new Discord.RichEmbed()
      .setTitle("Sites")
      .setColor("RANDOM")
      .addField("Twitter", "[Clique para entrar em nosso Twitter!](https://twitter.com/ServidorLonex)")
      .addField("Loja", "[Clique para entrar em nossa Loja!](https://servidorlonex.minepag.com/)")
      .setFooter(`Comando solicitado por: ${message.author.username} | LonexNetwork | Sites | `, "https://images-ext-1.discordapp.net/external/BCKxPNzZzEVfkbIublv7_3wG2016jTwGk3onTemVRnM/%3Fv%3D1/https/cdn.discordapp.com/emojis/450112878108999680.gif");

    message.channel.send(botembed);
    return;
  }
  if(cmd === `${prefix}donos`) {

  let botembed = new Discord.RichEmbed()
    .setTitle("Donos do LonexNetwork")
    .setColor("RANDOM")
    .addField("Os donos do LonexNetwork são o", "T0PL1X0#3202 e o Yuriropp#8233")
    .setFooter(`Comando solicitado por: ${message.author.username} | LonexNetwork | CEOS | `, "https://images-ext-1.discordapp.net/external/BCKxPNzZzEVfkbIublv7_3wG2016jTwGk3onTemVRnM/%3Fv%3D1/https/cdn.discordapp.com/emojis/450112878108999680.gif");

  message.channel.send(botembed);
  return;
}
  if(cmd === `${prefix}ping`) {

  let botembed = new Discord.RichEmbed()
    .setTitle("Segurança - Lonex")
    .setColor("#e40e0e")
    .addField("Ping?", `**Pong!** ${bot.ping}`)
    .setFooter(`Comando solicitado por: ${message.author.username} | LonexNetwork | Latencia | `, "https://images-ext-1.discordapp.net/external/BCKxPNzZzEVfkbIublv7_3wG2016jTwGk3onTemVRnM/%3Fv%3D1/https/cdn.discordapp.com/emojis/450112878108999680.gif");

  message.channel.send(botembed);
  return;
}
  if(cmd === `${prefix}moderação`) {

  if(!message.member.roles.find(`name`, "STAFF")) return message.reply("você não tem permissão para executar este comando");
  let botembed = new Discord.RichEmbed()
    .setTitle("")
    .setColor("#e40e0e")
    .addField("Lonex - Moderação ", "• !ban \n• !mute \n• !kick \n• !chaton \n• !chatoff \n• !limpar \n• !falar \n• !anunciar \n• ?anunciar")
    .setFooter(`Comando solicitado por: ${message.author.username} | LonexNetwork | Moderação | `, "https://images-ext-1.discordapp.net/external/BCKxPNzZzEVfkbIublv7_3wG2016jTwGk3onTemVRnM/%3Fv%3D1/https/cdn.discordapp.com/emojis/450112878108999680.gif");

  message.channel.send(botembed);
  return;
}
if(cmd === `${prefix}anuncio`) {
  if(!message.member.roles.find(`name`, "STAFF")) return message.reply("você não tem permissão para executar este comando");
  let botembed = new Discord.RichEmbed()
    .setTitle("Anúncio", )
    .setColor("RANDOM")
    .setDescription(`${args.join(" ")}`)
    .setFooter(`Comando solicitado por: ${message.author.username} `, "https://images-ext-1.discordapp.net/external/BCKxPNzZzEVfkbIublv7_3wG2016jTwGk3onTemVRnM/%3Fv%3D1/https/cdn.discordapp.com/emojis/450112878108999680.gif");

  message.delete().catch(O_o=>{});
  message.channel.send('@everyone', botembed);
  return;
}
if (cmd === `${prefix}falar`) {

  if (!message.member.roles.find(`name`, "STAFF")) return message.reply("você não tem permissão para executar este comando");
  let botembed = new Discord.RichEmbed()
    .setTitle("Anúncio")
    .setColor("RANDOM")
    .setDescription(`${args.join(" ")}`)
    .setTimestamp()
    .setFooter(`Comando solicitado por: ${message.author.username} `, "https://images-ext-1.discordapp.net/external/BCKxPNzZzEVfkbIublv7_3wG2016jTwGk3onTemVRnM/%3Fv%3D1/https/cdn.discordapp.com/emojis/450112878108999680.gif");

    message.delete().catch(O_o=>{});
  message.channel.send(args.join(" "));
  return;
}
});

bot.login('');
