const command = require("command-discord");
const client = command.Client({
    token: "Your Token", // Token Bot
    color: "65535", //optional color for  embeds in decimal (65535 default)
    path: "./commands", // path for commands folder, (./commands default)
    prefix: "r", // prefix can be an array, (! default)
    logErrors: true, // true default, if you dont want to console log errors in command false
    // you can get errors using the commandError event
    // prefix can be an array if you need multiple prefix, (! default)
    commandExists: false,
    commandExistsContent: {
        embed: {
            color: "16711680",
            description: "We dont have this command yet!"
        }
    },
    prefixConfig: { // ~ The Bot only needs a one name to work (useUsername)
        useUsername: true, // Example: mee6 help
        useMention: true, // Example: @mee6 help
    },
    external: [ // Dependencies and Consts
        { key: "Discord", value: require("discord.js") },
        { key: "Owners", value: ["Your Id"] },
        { key: "Support", value: "Your Server" },
        { key: "request", value: require('request') },
        { key: "randomPuppy", value: require('random-puppy') },
        { key: "superagent", value: require('snekfetch') }
    ] // external variables to use instead of doing global variables

}, {
        //client options for discordjs (https://discord.js.org/#/docs/main/stable/typedef/ClientOptions)
    });

client.on("commandError", function (command, error) {
    console.error(`Error ${error.toString()} in command ${command.name}`)
    //this log is automatic if you dont disable the logErrors option
})

// Playing
client.on("ready", async () => {
    console.log('on')
    const phrases = [`${client.prefix}help - Helping ${client.users.size} Wankers`,`${client.prefix}help - I see XVideos for 24h`,`${client.prefix}help - i'm in ${client.guilds.size} Guilds`, `${client.prefix}help - ${client.users.size} People Know Me!`, `Use ${client.prefix}help to view my Commands`, `Want to Invite Me to Your Server? Use ${client.prefix} invitation! `]
    setInterval(() => {
        var selected = phrases[Math.floor(Math.random() * phrases.length)]
        if (selected == null) selected = phrases[Math.floor(Math.random() * phrases.length)]
        client.user.setPresence({ game: { name: `${selected}` } })
    }, 5 * 60 * 1000)
    client.user.setPresence({ game: { name: phrases[0] } })
});

client.start(); // you can pass token here, if you dont want to pass options