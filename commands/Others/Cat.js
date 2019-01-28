module.exports = new (class cmd {
    constructor() {
        this.name = "cat";
        this.category = "others";
        this.help = "Cat Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["gato"]
    }
    run({ message, buildMessage, client, args}){
        client.external.randomPuppy("cat")
            .then(url => {
                let embed = new client.external.Discord.RichEmbed()
                    .setTitle("Cat")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
    }
})