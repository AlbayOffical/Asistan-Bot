const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = 'a!'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Yardım Menüsü')
  .setDescription(`:white_small_square: \`${p}yardım eğlence\` = Eğlence Komutlarını Listeler. \n\n:white_small_square: \`${p}yardım yetkili\` = Yetkili Komutlarını Listeler. \n\n:white_small_square: \`${p}yardım genel\` = Genel Komutları Listeler.`)
  message.channel.send({embed})
  }
   if (arg === 'eğlence' || arg === '1') {
  const embed = new Discord.RichEmbed()
  .setTitle('Eğlence Komutları')
  .setDescription(`:white_small_square: \`${p}gif\` = Gif gösterir. \n:white_small_square: \`${p}1vs1\` = İstediğin kişiyle 1vs1 atarsın. \n:white_small_square: \`${p}ara155\` = Polisi arar. \n:white_small_square: \`${p}arkadaşın\` = Arkadaşını bilir. \n:white_small_square: \`${p}ateşet\` = İstediğin kişiye ateş eder. \n:white_small_square: \`${p}avatar\` = Avatarınızı gösterir. \n:white_small_square: \`${p}aşkölcer\` = Aşkınızı ölçer. \n:white_small_square: \`${p}balık-tut\` = Balık tutar. \n:white_small_square: \`${p}bayrak\` = Bayrak gösterir. \n:white_small_square: \`${p}fake-mesaj\` = Kişi hakkında sahte mesaj yazabilirsiniz. \n:white_small_square: \`${p}havadurumu\` = Hava durumunu gösterir. \n:white_small_square: \`${p}herkesebendençay\` = Herkese benden çay söyler. \n:white_small_square: \`${p}mcbaşarım\` = Minecraft başarımı verir. \n:white_small_square: \`${p}slots\` = Slots oyunu oynatır. \n:white_small_square: \`${p}strestçarkı\` = Strest çarkı çevirir. \n:white_small_square: \`${p}tkm\` = Tas kağıt makas oyunu oynatır. \n:white_small_square: \`${p}trampet\` = Trampet çalar. \n:white_small_square: \`${p}ucan-tekme\` = Uçan tekme atar. \n:white_small_square: \`${p}urfa-gonder\` = Urfa gönderir. \n:white_small_square: \`${p}reklamlar\` = Reklam gösterir.`)
  message.channel.send(embed)
  }
  if (arg === 'genel' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Genel Komutları:')
      .setDescription(`:white_small_square: \`${p}davet\` = Botu sunucunuza davet edebilirsiniz. \n:white_small_square: \`${p}duyuru\` = Duyuru yapabilirsiniz. \n:white_small_square: \`${p}yapımcım\` = Botun yapımcısını gösterir. \n:white_small_square: \`${p}afk-ol\` = Afk moduna geçersiniz. \n:white_small_square: \`${p}afk-çık\` = Afk modundan çıkarsınız. \n:white_small_square: \`${p}ailemiz\` = Botun hangi sunucularda oldugunu gösterir. \n:white_small_square: \`${p}ping\` = Botun pingini gösterir. \n:white_small_square: \`${p}google\` = Arama yapar. \n:white_small_square: \`${p}istatistik\` = Botun istatistiğini gösterir. \n:white_small_square: \`${p}javascript\` = Discord <#> JS rölü verir. \n:white_small_square: \`${p}atatürk\` = Atatürkü Gösterir. \n:white_small_square: \`${p}atatürk-çerçeve\` = Atatürk'ün çerçevelenmiş fotorafını gösterir. \n:white_small_square: \`${p}kullanıcıbilgim\` = Komut kullanan kişinin kullanıcı bilgisini gösterir. \n:white_small_square: \`${p}mesaj-kucult\` = Belirtdiğiniz mesajı küçültür. \n:white_small_square: \`${p}romen-rakamı\` = Roman rakamlarını gösterir. \n:white_small_square: \`${p}emojiler\` = Sunucudaki emojileri gösterir. \n:white_small_square: \`${p}slowmode\` = Sunucuda yazma hızını ayarlarsın. \n:white_small_square: \`${p}sunucu-bilgi\` = Sunucu hakkında bilgi verir. \n:white_small_square: \`${p}sunucu-tanıt\` = Sunucuyu tanıtır. \n:white_small_square: \`${p}sunucu-kur\` = Gelişmiş sunucu kurar. \n:white_small_square: \`${p}sunucu-resmi\` = Sunucu resmini gösterir.`)
      return message.channel.send(embed);
}
   if (arg === 'yetkili' || arg === '3') {
      const embed = new Discord.RichEmbed()
      .setTitle('Yetkili Komutları:')
      .setDescription(`:white_small_square: \`${p}ban\` = Sunucudaki kişileri banlaya bilirsiniz. \n:white_small_square: \`${p}unban\` = Sunucudaki kişinin banını kaldırmaya yarar. \n:white_small_square: \`${p}kick\` = Sunucudan kişileri atabilirsiniz. \n:white_small_square: \`${p}mute\` = Sunucudaki kişileri susturabilirsiniz. \n:white_small_square: \`${p}uyar\` = Sunucudaki kişileri uyarabilirsiniz.  \n:white_small_square: \`${p}ototag\` = Otomatik tag verir. \n:white_small_square: \`${p}sayaç-ayarla\` = Sayaçı ayarlar. \n:white_small_square: \`${p}sayaç-sıfırla\` = Sayaçı sıfırlar. \n:white_small_square: \`${p}otorol\` = Sunucudaki kişilere otomatik rol verir. \n:white_small_square: \`${p}otorol-kapat\` = Otorolü kapatır. \n:white_small_square: \`${p}otorol-mesaj-kapat\` = Otorol mesajı kapatır. \n:white_small_square: \`${p}küfür-engelle\` = Küfür engelini açar. \n:white_small_square: \`${p}link-engelle\` = Link engelini açar. \n:white_small_square: \`${p}giriş-çıkış-ayarla\` = Giriş ve çıkışı ayarlar. \n:white_small_square: \`${p}mod-log-ayarla\` = Log kanalını ayarlar. \n:white_small_square: \`${p}prefix-ayarla\` = Botun prefixsini ayarlayabilirsiniz. \n:white_small_square: \`${p}ses-kanalı-aç\` = Ses kanalı açar. \n:white_small_square: \`${p}temizle\` = Belirtiğiniz miktarda mesajı siler. \n:white_small_square: \`${p}çekiliş\` = Sunucuda çekiliş yapar. \n:white_small_square: \`${p}oylama\` = Sunucuda oylama yapar.`)
      return message.channel.send(embed);
} 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
};