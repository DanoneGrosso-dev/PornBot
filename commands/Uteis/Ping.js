module.exports ={
    aliases:["ping","pinga"], // Coloque no diminutivo
    help:{
        desc:"Mostro minha Latẽncia",
        exemplo: "ping",
    },
    run:(client,message,args) =>{
        message.reply(`:ping_pong:Pong ${Math.floor(client.ping)}`)
    }
}