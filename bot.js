const Discord = require('discord.js');
const client = new Discord.Client();

  client.on("message", message => {
    if(message.content.startsWith("%verify")) {
      let num = Math.floor((Math.random() * 4783) + 10);
    
      message.channel.send(`يرجاء كتابة الرقم التالي: **${num}**`).then(m => {
        message.channel.awaitMessages(res => res.content == `${num}`, {
          max: 1,
          time: 60000,
          errors: ['time'],
        }).then(collected => {
          message.delete();
          m.delete();
          message.member.addRole(message.guild.roles.find(c => c.name == "Verified"));
        }).catch(() => {
          m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
});
})
}
})
//حقوق فرييق كس للطباعة ههه طيزي وجعاني


var guilds = {};
client.on('message',async message => {
 var prefix2 = '!';//البرفكس
  if(message.content.startsWith("!تقديم")) {
 
if(!message.channel.guild) return message.reply(' ');
 
 
  let submite = message.guild.channels.find(`تقديم-ادارة`);
 
  if(!submite) return message.channel.send("❌لم اجد الروم الخاص بالتقديمات");
 
    let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('📝 **| من فضلك اكتب اسمك الأن... ✏ **').then(msg => {
 
 //حقوق فرييق كس للطباعة ههه طيزي وجعاني

 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('📜 **| من فضلك اكتب عمرك  الأن... ✏ **').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('🤵 **| من فضلك اكتب من اي بلد انت الأن... ✏ **').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;
 
      msg.edit('🛡 **| [ هل انت متأكد من تقديمك؟ | [ نعم ] او [ لا**');
 
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === 'لا') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === 'نعم') {
 
          if(thisFalse === false) return;
 
          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديمات**');
 
          collected.first().delete();
 
          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submite⬇**
 
[**اسم المقدم**]:
${thisMessage}
 
[**عمره**]:
${boi}
 
[**من بلد**]:
${boi2}
 
[**تم التقديم بواسطة**]:
${message.author}
 
[**ايدي المقدم**]:
${message.author.id}`);
 
        }
 
      }
 
  );
 
});
 
    });
 
  }
 
    );
 
  });
 
}
 
);
 
    })}});

	
	
	client.on("message", message => {
    if (message.content === ("يكس تعالى سلم على عمو")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
   
   **
كس بوت يقدم لكم
   
           ***General Commands***
   **
   『${prefix}id/ معلومات عن حسابك』
   『${prefix}2id / معلومات عن الحساب في صوره』
   『${prefix}embed/ يكرر كلامك بمبيد』
   『${prefix}sug/ الإقتراحات』
   『${prefix}roles/ يطلع الرتب』
   『${prefix}roles-n يعطيك الرتب بالترتيب』
   『${prefix}server/ معلومات عن السيرفر』
   『${prefix}image/ يعرض صوره السيرفر』
   『${prefix}avatar/ يعرض صورتك او صوره شخص』
   『${prefix}dt/يعرض لك الوقت والتاريخ واليوم 』
   『${prefix}invites/ يعرض كم ضياف 』
   『${prefix}topinvite/ لعرض قائمه فيها كل واحد ضاف كم 』
   『${prefix}zalgo / يزخرف لك شي تكتب لازم يكون انقليزي مو عربي』
   『${prefix}draw / يكرر الكلام في صوره』
   『${prefix}say / يكرر الكلام لتكتب』
   『${prefix}translate / يترجم』
   『${prefix}botserver / يحطيك سرفرات البوت بترتيب』
   『${prefix}short / اختصار الروابط』
   『${prefix}calculate / حاسبة』
   **
           ***Administrative Commands***
   **
   『${prefix}color 50 /انشاء 50 لون』
   『${prefix}color 100/انشاء 100 لون』
   『${prefix}color 140/انشاء 140 لوم』
   『${prefix}ct /انشاء روم كتابي』
   『${prefix}cv /انشاء روم صوتي』
   『${prefix}delet / مسح روم』
   『${prefix}bc /لإرسال رسالة جماعية』
   『${prefix}clear / لمسح الشات』
   『${prefix}addrole / لراية اوامر اعطاء الرتبه او حدفها للعضو』
**
           ***Bot Commands***
  **
   『${prefix}ping/ يعرض لك سرعه اتصال البوت』
   『${prefix}uptime/ يعرض لك صار للبوت كم شغال』
   『${prefix}support/ سيرفر الدعم القني و المساعده』
   『${prefix}invite/ اضافه البوت』
   『${prefix}mb/ حاله الاعضاء』
   『${prefix}bot/ معلومات عن البوت』
   **
           ***Games Commands***
    **       
   『${prefix}لعبه صراحه/صراحه』
   『${prefix}لعبه خواطر/خواطر 』
   『${prefix}يعطيك ذكر من الاذكار/ اذكار』
   『${prefix}يخيرك بين شي وشي / لو خيروك』
   『${prefix}يعطيك عقاب و لازم تنفذه/ عقاب』
   『${prefix}لعبه اسئله / كت』
   『${prefix}للعب لعبه قلب العمله/ عمله』
   『${prefix}للعب لعبه عل تعلم/ هل تعلم』
   『${prefix}للعب لعبه مريم/ مريم』
   『${prefix}يعطيك كلمات حب/ حب』
   **
           ***profile Commands***
    
   『soon』
    
             _ _---------------- _ _
  BOT By: | <@374911904885506048> |-| <@311163751522893826> |-| <@407695930750402561> |

   **

   `)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === ("كس هيلب")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});
	
	
	//حقوق فرييق كس للطباعة ههه طيزي وجعاني
//حقوق فرييق كس للطباعة ههه طيزي وجعاني
//حقوق فرييق كس للطباعة ههه طيزي وجعاني
//حقوق فرييق كس للطباعة ههه طيزي وجعاني
//حقوق فرييق كس للطباعة ههه طيزي وجعاني
//حقوق فرييق كس للطباعة ههه طيزي وجعاني
//حقوق فرييق كس للطباعة ههه طيزي وجعاني
//حقوق فرييق كس للطباعة ههه طيزي وجعاني
//حقوق فرييق كس للطباعة ههه طيزي وجعاني

	
	
	
	
	

client.login("NTM2MDk3ODM2NzY1NDEzMzc2.DyRviQ.nmfchfgZjFwoiX62IAea7tgGTZY");
