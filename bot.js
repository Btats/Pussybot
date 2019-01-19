const Discord = require('discord.js');

const client = new Discord.Client();

client.on("message", message => {
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith("مسح!")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **زبك مش كبير كفاية**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "مسحت الشات بكسي يقلبي",
        footer: {
          text: "Plus Bot"
        }
      }}).then(msg => {msg.delete(3000)});
                          }
});
