module.exports = ({
  name:"durum",
  code:`$title[$userTag[$clientID] Şuanki Durumu]
  $description[

**---------------------------------------------**

 **Toplam komutlar: \`$commandsCount\`**
 **Toplam sunucular: \`$serverCount\`**
 **Toplam kanallar: \`$allChannelsCount\`**
 **Toplam kanallar (yazı): \`$allChannelsCount[text]\`**
 **Toplam kanallar (ses): \`$allChannelsCount[voice]\`**
 **Toplam kategoriler: \`$allChannelsCount[category]\`**
 **Toplam Üye: \`$replaceText[$replaceText[$abbreviate[$allMembersCount];K; Bin];.;,]\`**
 **Websocket Ping: \`$ping ms\`**
 **Bot Pingi: \`$botPing ms\`**
 **Uptime: \`$replaceText[$replaceText[$replaceText[$uptime;s;Saniye;-1];h; Saat;-1];m; Dakika;-1]\`**
 **NodeJS Sürümü: \`$getObjectProperty[nodev]\`**
 **Discord.js Sürümü: \`$getObjectProperty[discordv]\`**
 **Dbd.js Sürümü: \`$packageVersion\`**
 **CPU Kullanımı: \`%$cpu\`**
 **CPU İşletim sistemi: \`$djsEval[require ('os').platform();yes]\`**
 **RAM kullanımı: \`$ram MB\`**
 **Depolama kullanımı: \`$djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB\`**

**---------------------------------------------**

 **Linkler**
 [Destek Sunucusu](https://discord.gg/SxmAZYrt) | [Botu davet et!]($getBotInvite) | [Sahibim](https://discord.com/users/809564232282406932)]
 $footer[Gelişmeye Devam Ediyor...]
 $color[303136]
 $thumbnail[$userAvatar[$clientID]]
 $djseval[d.object.nodev = process.version
d.object.discordv = require('discord.js').version
$createObject[{}]]
  `
})