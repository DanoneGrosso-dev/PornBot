



exports.run = async (client , message , args) => {


  let msg = args.slice(0).join(' ') 
  if(!msg) msg = "Fale o nome de um emoji";


  let emoji = message.guild.emojis.find('name', msg);
  let jeff = `<a:${emoji.id.animated ? '' : ''}${emoji.identifier}>`;
  let jeff2 = `<:${emoji.id.animated ? '' : ''}${emoji.identifier}>`;
  let identify = `\`<a:${emoji.id.animated ? '' : ''}${emoji.identifier}>\``;
  let identif = `\`<:${emoji.id.animated ? '' : ''}${emoji.identifier}>\``;
  message.channel.send(`Se o emoji for animado ==>  ${identify} ${jeff}`)
  message.channel.send(`Se o emoji não for animado ==> ${identif} ${jeff2}`)
}