const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(':white_check_mark: ``Aqui esta alguns de meus comandos``').then(m => m.delete(3000))
    let serverembed10 = new Discord.RichEmbed()
    .setTitle("Abaixo esta as paginas de help !!")
    .addField("👮 | Adms", 'Comandos para adms')
    .addField("😂 | Fun", 'Comandos dirvertido')
    .addField("⬅ | Voltar", 'Para voltar pro inicio')
    .addField("📓 | Info ", 'Para ver mais coisas do bot')
    .addField("🌏 | Meu Convite", 'Nosso servidor')
    .addField("📋 | reportes", 'Aki esta alguns comandos diversos')
    .setFooter('Bot em desenvolvimento !!', message.author.displayAvatarURL )
    .setColor('#1a4284')   
    let serverembed = new Discord.RichEmbed()
    .setTitle("Comandos para adms")
    .addField("t!say", 'Fale como se fosse o bot')
    .addField("t!ban", 'Bana alguem marcando ')
    .addField("t!kick", 'De um kick em alguem marcando')
    .addField("t!dartag", 'Sete uma tag facilmente nos seus membros')
    .addField("t!tirartag", 'Retire uma tag facilmente de um membro')
    .addField("t!apagar", 'Apague as mensagens do chat')
    .setFooter('Bot em desenvolvimento !!', message.author.displayAvatarURL )
    .setColor('#1a4284')  
    let serverembed2 = new Discord.RichEmbed()
    .setTitle("Comandos")
    .addField("t!Botinfo", 'Veja algumas informaçoes sobre mim')
    .addField("t!votar", 'Inicie uma votacao')
    .addField("t!fake", 'Crie msgs como se fosse seus amigos')
    .addField("t!membros", 'Veja informaçoes sobre os membros')
    .addField("t!serverinfo", 'Informaçoes sobre o servidor')
    .setFooter('Criador TioBomba , Bot em Desenvolvimento !!', message.author.displayAvatarURL )
    .setColor('#1a4284')
    let serverembed15 = new Discord.RichEmbed()
    .setTitle("Info do bot")
    .addField("Criador", 'TioBomba#8805')
    .addField("Mega Ajudantes", 'AzypyUs')
    .addField("Testers", 'BlackSide')
    .setFooter('Bot em desenvolvimento !!', message.author.displayAvatarURL )
    .setColor('#1a4284')
    let serverembed19 = new Discord.RichEmbed()
    .setTitle("Servidor de help do nosso bot")
    .addField("t!convite", 'Em criaçao | Reporte bugs etc.')
    .setFooter('Bot em desenvolvimento !!', message.author.displayAvatarURL )
    .setColor('#1a4284')
    let serverembed13 = new Discord.RichEmbed()
    .setTitle("Comandos variaveis")
    .addField("t!reportar", 'Denuncie alguem com @Nome Motivo')
    .addField("t!desmutar", 'Desmute algum membro')
    .addField("t!mutar", 'Mute aquele membro chato')
    .addField("t!site", 'Site Do Meu Criador')
    .addField("t!msg", 'Crie testos em forma de desenho')
    .setFooter('Bot em desenvolvimento !!', message.author.displayAvatarURL )
    .setColor('#1a4284')
    let serverembed39 = new Discord.RichEmbed()
    .setTitle("Comandos Divertidos")
    .addField("t!roleta", 'Em criaçao | Reporte bugs etc.')
    .addField("t!duvida", 'Tire duvidas com nosso profeta')
    .addField("t!corrida", 'Aposte uma corrida com seu amigo')
    .setFooter('Bot em desenvolvimento !!', message.author.displayAvatarURL )
    .setColor('#1a4284')
message.channel.send(serverembed10).then(msg=>{
msg.react('👮').then(r=>{
msg.react('😂')
msg.react('⬅')
msg.react('📓')
msg.react('🌏')
msg.react('📋')
msg.react('😂')
})
 
const qualquercoisafilter = (reaction, user) => reaction.emoji.name === '👮' && user.id === message.author.id;
const qualquercoisafilter2 = (reaction, user) => reaction.emoji.name === '😂' && user.id === message.author.id;
const qualquercoisafilter5 = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
const qualquercoisaFilter8 = (reaction, user) => reaction.emoji.name === '📓' && user.id === message.author.id;
const qualquercoisaFilter12 = (reaction, user) => reaction.emoji.name === '🌏' && user.id === message.author.id;
const qualquercoisaFilter20 = (reaction, user) => reaction.emoji.name === '📋' && user.id === message.author.id;
const qualquercoisafilter39 = (reaction, user) => reaction.emoji.name === '😂' && user.id === message.author.id;
 
const qualquercoisa = msg.createReactionCollector(qualquercoisafilter, { time: 60000 });
const qualquercoisa2 = msg.createReactionCollector(qualquercoisafilter2, { time: 60000 });
const qualquercoisa5 = msg.createReactionCollector(qualquercoisafilter5, { time: 60000 });
const qualquercoisa8 = msg.createReactionCollector(qualquercoisaFilter8, { time: 60000 });
const qualquercoisa11 = msg.createReactionCollector(qualquercoisaFilter12, { time: 60000 });
const qualquercoisa21 = msg.createReactionCollector(qualquercoisaFilter20, { time: 60000});
const qualquercoisa39 = msg.createReactionCollector(qualquercoisafilter39, { time: 60000});

qualquercoisa.on('collect', r => {
    msg.edit(serverembed);
  })
qualquercoisa2.on('collect', r2 => {
    msg.edit(serverembed2);
  })
qualquercoisa5.on('collect', r2 => {
    msg.edit(serverembed10);
  })
qualquercoisa8.on('collect', r2 => {
    msg.edit(serverembed15);
  })
qualquercoisa11.on('collect', r2 => {
    msg.edit(serverembed19);
  })
qualquercoisa21.on('collect', r2 => {
    msg.edit(serverembed13);
  })
  qualquercoisa39.on('collect', r2 => {
    msg.edit(serverembed39);
  })  
})
}

  module.exports.help = {
    name:"ajuda"
  }