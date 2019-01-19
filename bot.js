const Discord = require('discord.js');

const client = new Discord.Client();

client.on('message', function(message) {
                  if(!message.channel.guild) return;
    if(message.content ===  ("!color 100")) {
        if(message.member.hasPermission('MANAGE_ROLES')) {
            setInterval(function(){})
            message.channel.send('اصبر اخلص يبن المتناكة')
        }else{
            message.channel.send('معكش برمشن يبن الوسخة')
            }
    }
});

client.login("NTM2MDk3ODM2NzY1NDEzMzc2.DyRviQ.nmfchfgZjFwoiX62IAea7tgGTZY");
