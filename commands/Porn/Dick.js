module.exports = new (class cmd {
    constructor() {
        this.name = "dick";
        this.category = "porn"
        this.help = "Porn Dick";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["dickpic"]
    }
    run({ message, buildMessage, client, args }) {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            client.external.randomPuppy("dickpic").then(url => {
                let embed = new client.external.Discord.RichEmbed()
                    .setDescription("<:benis:539281418962862084>")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
        }
    }
})