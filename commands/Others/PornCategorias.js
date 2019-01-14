const Discord = require("discord.js");
const request = require('request');
const randomPuppy = require('random-puppy');
module.exports = {
    aliases: ["categories"], // Coloque no diminutivo
    help: {
        desc: "categories",
        exemplo: "categories",
    },
    run: (client, message, args) => {
        request('https://api.redtube.com/?data=redtube.Categories.getCategoriesList&output=json', function (error, response, body) {
            var categories = JSON.parse(body).categories
            message.channel.send("```css\n"+categories.map(a => a.category).join(' | ')+"```")
        });
    }
}