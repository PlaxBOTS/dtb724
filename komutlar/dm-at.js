const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)

  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('❌ Yazıyı yazmayı unuttun galiba ❌');
  if (message.mentions.users.size < 1) return message.reply('❌ Kime DM atacam onuda @kullanıcı şeklinde yazı ver. ❌').catch(console.error);
  message.delete();
  message.reply('✅ Mesajınızı gönderdim. ✅')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permlevel: 0,
};

exports.help = {
  name: 'pm-at',
  description: 'Bir kullanıcıya Özel mesaj yollar.',
  usage: 'dm-at'
}; 
