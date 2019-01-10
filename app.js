const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./index.js')
Manager.spawn(2,1000*7).catch(err2 =>{
    console.log(err2)
});