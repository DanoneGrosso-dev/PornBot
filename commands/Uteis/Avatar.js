const Discord = require("discord.js");
module.exports = {
    aliases: ["avatar"], // Coloque no diminutivo
    help: {
        desc: "Mostro seu Avatar ou do usuário mencionado!",
        exemplo: "avatar @user",
    },
    run: (client, message, args) => {
        let User = message.mentions.users.first() || message.author
        let embed = new Discord.RichEmbed()
            .setColor(`#602bff`)
            .setDescription(`**[Avatar de ${User} (Download)](${User.avatarURL})**`)
            .setImage(User.avatarURL)
        message.reply({ embed })
    }
}