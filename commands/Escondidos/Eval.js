
function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
  function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  }
  
  //const database = require("../../data/database.js")
  //var Users2 = database.Users2
  var Discord = require('discord.js')
  var moment = require('moment')
  const config = require("../../data/config.json")
  const ids = config.DonoId
module.exports ={
  aliases:["eval"],
  hide:true
}
module.exports.run = async (client,message,args) =>{
  var achar55 = message.content.indexOf("client.token")
  if (achar55 > 0) return

    if (ids.indexOf(message.author.id) == -1) return message.channel.send(`:no_good: ${message.author.toString()} Voce não tem permissão para usar esse comando`)

 var codigo = args.join(' ').replace(/`/g,'`')
    try{
        codigo = eval(codigo)}
        catch(err){
            codigo = err;
        }
         codigo = await Promise.resolve(codigo)
         message.channel.send("```js\n"+codigo+ "```")

}
