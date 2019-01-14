module.exports ={
    aliases:["shards","shardinfo"],
    help:{
        exemplo:"shards",
        desc:"Veja os status das minhas shards"
    }
}
module.exports.run = (client,message,args) =>{
    client.shard.fetchClientValues('guilds.size').then(a =>{
            client.shard.fetchClientValues('users.size').then(b=>{
    
                client.shard.fetchClientValues('channels.size').then(c =>{
                    
            var nm = 0,nm2 = 0,nm3 = 0;
            
            a.map(a =>{
                nm += a;
            })
            b.map(b =>{
                nm2+=b
            })
            c.map(c =>{
                nm3+=c
            })
            var txt = a.map((a,b) =>`Shard[${(b)}]\nGuildas: **${a}**\n` )
    message.reply({embed:{
       'title': 'shards',
        'description':`${txt.join('')}\nTotal de servidores: **${nm}** ** | **Total de usuarios: **${nm2}** ** | **Total de canais: **${nm3}**`,
        'color':65535,
    
    }})
        })
        })
        })
        
    }