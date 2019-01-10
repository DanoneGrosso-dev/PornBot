const superagent = require("snekfetch");
const Discord = require('discord.js')
module.exports ={
  run:(client,message,args) =>{
    if (!message.channel.nsfw) return message.channel.send('Use este comando em um canal NSFW!')
    superagent.get('https://nekos.life/api/v2/img/pussy_jpg')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
  message.channel.send(lewdembed);
    })
  }
}