module.exports = {
name:"yavaşmod",
aliases:['slow-mode','yaşaş-mod','yaşaşmod'],
code:`
**<#$channelID> Adlı Kanalda Yavaş Mod \`$message[1]\` Olarak Ayarlandı!**
$onlyIf[$isNumber[$message[1]]!=false;**Lütfen Bir Sayı Belirtin!**]
$onlyIf[$message[1]!=;**Doğru Kullanım: $getServerVar[prefix]slowmode <değer>**]
$slowmode[$channelID;$message[1]s]
$onlyPerms[managechannels;**Yavaş Mod Ayarlamak için Yetkin Bulunmamakta**]
$onlyBotPerms[managechannels;**Yavaş Mod Ayarlamak için \`Kanalları Yönet\` İznim Olmalı!**] 
$suppressErrors[**Lütfen Daha Düşük veya Daha Yüksek Bir Değer Gir**]
`
} 