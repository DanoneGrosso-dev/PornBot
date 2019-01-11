var Redtube = require('redtube');
module.exports = {
    aliases: ["redtube"], // Coloque no diminutivo
    help: {
        desc: "Procuro no RedTube",
        exemplo: "redtube",
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        let reason = args.slice(0).join(' ');
        if (!reason) { return message.reply(":no_bicycles: Quer que eu busque oque? ;-; tua mãe?")} 
        //Define the output. can be 'json' or 'xml'
        var r = new Redtube({ output: 'json' });

        //Search method
        r.search({ search: reason }, function (err, response) {
            if (!err)
                var msg = ''
            for (var i = 0; i < 10; i++) {
                msg += response.videos[i].video.title + " - " + response.videos[i].video.duration + " - " + response.videos[i].video.url + "\n";
            }
            message.channel.send(""+msg+"")
        });
    }
}