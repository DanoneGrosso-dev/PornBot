module.exports ={
    aliases:["convite","invite"], // Coloque no diminutivo
    help:{
        desc:"mando meu convite",
        exemplo: "convite",
    },
    run:(client,message,args) =>{
        message.reply(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958591`)
    }
}