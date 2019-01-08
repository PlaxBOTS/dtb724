const Discord = require('discord.js');


exports.run = function(client, message, args) {
    
    var başvuru = args.slice(0).join(' ');
	var guildID = "509056257773142028";
	var channelID = "528240165140037633";
	
	if (!başvuru){
        return message.reply(":no_entry_sign: Yanlış kullanım ! Doğru kullanım : **d!başvuru <Bot ismi> <Bot ID'si> <Bot prefixi> :no_entry_sign: **");
	} else {
		
		var embed = new Discord.RichEmbed()
            .setTimestamp()
            .setColor("RANDOM")
			.addField("Eylem:", "Başvuru")
			.addField("Kullanıcı:",message.author.tag)
			.addField("ID", message.author.id)
			.addField("Başvuru", başvuru)
		
        client.guilds.get(guildID).channels.get(channelID).send(embed);
        message.reply(":white_check_mark: Başvurunuz alınmıştır. Yanıt bekleyin !, Saçma bir başvuru gönderdiyseniz, aksi takdirde başvurnuzun sayılmayacak, ve 2 gün başvurunuz kabul edilmeyecektir. :white_check_mark: ");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botbaşvuru"], 
  permLevel: 0 
};

exports.help = {
  name: 'başvuru', 
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır", 
  usage: 'başvuru' 
};
