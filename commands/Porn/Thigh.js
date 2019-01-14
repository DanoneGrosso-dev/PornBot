const superagent = require("snekfetch");
const Discord = require('discord.js')
module.exports ={
    aliases:["thigh"], // Coloque no diminutivo ( Nome do comando para usar )
    help:{ // Sistema de Help
        desc:"Gifs e fotos nsfw", // Descrição dele
        exemplo:"thigh", // Como usar o comando!
    },
    run:(client,message,args) =>{
        if (message.channel.nsfw === true) {
            superagent.get('https://nekobot.xyz/api/image')
            .query({ type: 'thigh'})
            .end((err, response) => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Thigh Porn")
                    .setImage(response.body.message)
                    .setColor('RANDOM')
                message.channel.send(embed)
            });
          } else {
            message.channel.send("este nao e um  canal de NSFW!")
          }
        }
    }
