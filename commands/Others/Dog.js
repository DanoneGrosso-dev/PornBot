const Discord = require("discord.js");
const request = require('request');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["dog","doge"], // Coloque no diminutivo
    help: {
        desc: "dog",
        exemplo: "dog",
    },
    run: (client, message, args) => {
        request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
            let image = JSON.parse(body)
            let embed = new Discord.RichEmbed()
                .setTitle("Dog")
                .setImage(image.message)
                .setColor('RANDOM')
            message.channel.send(embed)
        });
    }
}