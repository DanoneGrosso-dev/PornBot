const superagent = require("snekfetch");
const Discord = require('discord.js')
module.exports ={
    aliases:["hboobs"], // Coloque no diminutivo ( Nome do comando para usar )
    help:{ // Sistema de Help
        desc:"Gifs e fotos hentais", // Descrição dele
        exemplo:"boobs", // Como usar o comando!
    },
    run:(client,message,args) =>{
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
    superagent.get('https://nekos.life/api/v2/img/boobs')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
  message.channel.send(lewdembed);
    })
  }
}