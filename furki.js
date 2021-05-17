var furki = require(`dbd.js`)
var fs = require('fs') 
var bot = new furki.Bot({
  token: process.env.TOKEN, 
  prefix: ["$getServerVar[prefix]"], 
  mobile: true,
  fetchInvites: true
})

bot.onMessage()
bot.onJoined()
bot.onLeave()
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    code: command.code,
    aliases: command.aliases,
    nonPrefixed: command.nonPrefixed
  })} 
//variable
bot.variables({
  prefix:"!",  
  otocevap:"",
  otocevapw:"",      
  snipe:"",
  snipeu:"",
  snipec:"",
  Prefix:"!",  
  otocevap:"",
  otocevapw:"",      
  snipe:"",
  snipeu:"",
  snipec:"",
  hata:"0",
  evet:"",
  hayır:"",
  evt:"",
  hyr:"",  
  şarkı:"",
  linkengel:"no",
  küfür: "kapalı",
  botengel: "kapalı",
  botengellog: "",
  otorollog: "",  
  sayaç: "0",
  sayaçlog: "",
  otoroll: "",
  saas: "no",
  hgkanal:"",
  bbkanal:"",
  premium:"no",
  presayı:"0",
  yes:"",
  no:""
})
//status
bot.status({
  text: "Furkim Development",
  type: "PLAYING",
  status: "idle",
  time: 12
})
//prefix
bot.command ({
    name: "prefix",
    code:`
    $setServerVar[prefix;$message[1]]
    $title[Prefix Değiştirme Başarılı]
    $description[$customEmoji[tik] **Prefixiniz Başarıyla \`$message[1]\` Olarak Değiştirildi.
    Örnek Komut Kullanım:
    \`\`\`
    $message[1]yardım
    $message[1]prefix
    $message[1][Komut Adı]\`\`\`**]
    $onlyPerms[admin;**Komutu Kullanmak için Yetkin Yok!**]
    $suppressErrors[**Bir Hata Oluştu!**]
    $onlyIf[$message[1]!=$getServerVar[prefix];**Prefix'in Zaten Bu Lütfen Farklı Bir Prefix Dene**]
    $onlyIf[$message[1]!=;**Bir Prefix Yazmalısın**]
    $argsCheck[<1;**Bir Prefix Girmelisin**]`
    })
    //otocevap
    bot.command({
        name:"otocevap",
         code:`
     $if[$message[1]==aç]
     $channelsendMessage[$channelid;**Başarıyla \`\`$splitText[1]\`\` Otocevap Komudu Olarak Ayarlandı!** **Artık Herhangi Bir Kullanıcı \`\`$splittext[1]\`\` Yazınca \`\`$splittext[2]\`\` Olarak Karşılık Vereceğim!**;no]
     $textSplit[$messageSlice[1];|]
     $setservervar[otocevap;$getobjectproperty[kurulum] |$splitText[1]|$splitText[2]|]
     $addObjectProperty[kurulum;$getServerVar[otocevap]]
     $createObject[{}]
     $textSplit[$messageSlice[1];|]
     $setservervar[otocevapw;0]
     $onlyIf[$charCount[$messageSlice[1]]<201;❌ **Otocevap komut/cevap Karakter Limiti En Fazla \`200\` Olabilir.**]
     $onlyIf[$checkContains[$toLowercase[$message;|]]==true;❌ **Doğru Kullanım ->** \`\`!otocevap aç/kapat komut|komut kullanıldığında verilecek cevap\`\`]
     $onlyIf[$charCount[$getservervar[otocevap]]<750;❌ Otocevap sınırını doldurmuşsun.]
     $elseIf[$message[1]==kapat]
     $channelsendMessage[$channelid;\`\`$messageSlice[1]\`\` **Otocevabı Başarıyla Kaldırıldı!**;no]
     $setservervar[otocevapw;0]
     $setServerVar[otocevap;$replaceText[$getservervar[otocevap];$getobjectproperty[alım];;-1]]
     $addObjectProperty[alım;|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];0]]|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];1]]|]
     $createObject[{}]
     $onlyIf[$checkContains[$joinSplitText[];$messageSlice[1]]==true;❌ \`\`$messageslice[1]\`\` **Adlı Bir Otocevap Komudu Bulamadım.**]
     $textSplit[$getservervar[otocevap];|]
     $setservervar[otocevapw;1]
     $endelseIf
     $endif
     $setservervar[otocevapw;1]
     $onlyIf[$checkContains[$message[1];aç;kapat]==true;❌ Kullanılabilir ayarlar \`\`aç\`\` ve \`\`kapat\`\`tır.]
     $onlyPerms[manageserver;❌ Bu komudu kullanabilmek için **Sunuyu Yönet** yetkisine sahip olmalısın.]`
     })
     //otocevap sıralama
     bot.command({
         name:"$alwaysExecute",
         code:`
     $splitText[$sum[$findTextSplitIndex[$message];1]]
     $onlyIf[$findTextSplitIndex[$message]!=0;]
     $textSplit[$getservervar[otocevap];|]
     $onlyIf[$getservervar[otocevap]!=;]
     $onlyIf[$getservervar[otocevapw]!=1;]
     `,
         nonPrefixed: true
     })
     bot.command({
     name:"otocevap-listesi",
     code:`$description[
     **Otocevap Listesi**
     **—————————————————————————————**
     $joinSplitText[
     ]
     **—————————————————————————————**]
     $color[303136]
     $footer[$serverName Otocevap Listesi;$serverIcon[$guildID]]
     $thumbnail[$serverIcon[$guildID]]
     $author[$username;$authorAvatar]
     $textSplit[$getservervar[otocevap];|]`
     })
     //emojili kick
     bot.command({
       name:"kick",
       code:`$reactionCollector[$splitText[1];$authorID;1m;✔️,❌;evt,hyr;yes]
       $textSplit[$sendMessage[{description:
       **\`$username[$mentioned[1;yes]]\` Kişisini Kicklemeyi Onaylıyormusunuz?**}
       {footer:Evet İçin ✔️ Emojisine Hayır İçin ❌ Emojisine Tıklayınız.};yes]]
       $onlyIf[$hasPerms[$authorID;kick]!=false;**Kick Yetkisine Sahip Değilsiniz!**]
       $onlyIf[$message!=;**Lütfen Birini Etiketle**]
       `
     })
     bot.awaitedCommand({
       name:"evt",
       code:`
       $clearReactions[$channelID;$message[1];✔️]
       $clearReactions[$channelID;$message[1];❌]
       $editMessage[$message[1];
       {description:**Kişi Sunucudan Kicklenmiştir**} $kick[$mentioned[1]]]
       $onlyIf[$hasPerms[$authorID;kick]!=false;**Kick Yetkisine Sahip Değilsiniz!**]
       `
     })
     bot.awaitedCommand({
       name:"hyr",
       code:`
       $clearReactions[$channelID;$message[1];✔️]
       $clearReactions[$channelID;$message[1];❌]
       $editMessage[$message[1];
       {description:**İşlem İptal Edilmiştir**}]
       $onlyIf[$hasPerms[$authorID;kick]!=false;**Kick Yetkisine Sahip Değilsiniz!**]
       `
     })
//emoji-bilgi
bot.command({
    name:"emoji-bilgi",
    code:`
$if[$isNumber[$message[1]]==true]
$title[Emoji Bilgileri;https://cdn.discordapp.com/emojis/$message[1]]
$description[**Emoji İsmi:** \`$emoji[$message[1];name]\`
**Emoji ID:** \`$message[1]\`
**Emoji:** $replaceText[$replaceText[$emoji[$message[1];isanimated];true;<a:$emoji[$message[1];name]:$message[1]>;-1];false;<:$emoji[$message[1];name]:$message[1]>;-1]
**Emoji Oluşturulma Tarihi:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$message[1];time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];weeks;Hafta;-1];months;Ay;-1];years;Yıl;-1];second;Saniye;-1];minute;Dakika;-1];hour;Saat;-1];day;Gün;-1];week;Hafta;-1];month;Ay;-1];year;Yıl;-1]\`]
$addTimestamp
$image[https://cdn.discordapp.com/emojis/$resolveEmojiID[$message[1]]]
$onlyIf[$serverEmojiExists[$message[1]]==true;Lütfen geçerli bir emoji/ID/isim belirtin.]
$onlyIf[$emojiExists[$message[1]]==true;Lütfen benim olduğum bir sunucudan emoji seçin]
$else
$title[Emoji Bilgileri;https://cdn.discordapp.com/emojis/$resolveEmojiID[$message[1]]]
$description[
**Emoji İsmi:** \`$emoji[$resolveEmojiID[$message[1]];name]\`
**Emoji ID:** \`$resolveEmojiID[$message[1]]\`
**Emoji:** $replaceText[$replaceText[$replaceText[$replaceText[$checkCondition[$emoji[$resolveEmojiID[$message[1]];isanimated]==true]$checkContains[$message[1];<;>;:];truetrue;$message[1];-1];truefalse;<a:$message[1]:$resolveEmojiID[$message[1]]>;-1];falsefalse;<:$message[1]:$resolveEmojiID[$message[1]]>;-1];falsetrue;$message[1];-1]
**Emoji Oluşturulma Tarihi:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$resolveEmojiID[$message[1]];time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];weeks;Hafta;-1];months;Ay;-1];years;Yıl;-1];second;Saniye;-1];minute;Dakika;-1];hour;Saat;-1];day;Gün;-1];week;Hafta;-1];month;Ay;-1];year;Yıl;-1]\`]
$addTimestamp
$image[https://cdn.discordapp.com/emojis/$resolveEmojiID[$message[1]]]
$onlyIf[$serverEmojiExists[$resolveEmojiID[$message[1]]]!=;Belirttiğin emoji bulunamadı!]
$onlyIf[$emojiExists[$resolveEmojiID[$message[1]]]==true;Lütfen benim olduğum bir sunucudan emoji seçin]
$endif
$onlyIf[$message[1]!=;Lütfen bir emoji belirtin.]
`
})
//snipe
bot.deletedCommand({

    channel:"$channelID",
 
    code:`
 
 $setServerVar[snipec;$channelUsed]
 
 $setServerVar[snipe;$message]
 
 $setServerVar[snipeu;$authorID]`
 
 })
 
 bot.onMessageDelete()
 
 bot.command({
 
    name:"snipe",
 
    code:`$color[FF0000]
 
 $description[**———————————————————**
 
 **Atan Kullanıcı┇**[$username[$getServerVar[snipeu]#$discriminator[$getServerVar[snipeu]]]](https://$getServerVar[snipeu])
 
 **Atılan Mesaj┇**$getServerVar[snipe]
 
 **Atıldığı Kanal┇**<#$getServerVar[snipec]>
 
 **———————————————————**]
 
 $footer[Kullanan┇$userTag[$authorID];$authorAvatar]
 $onlyIf[$hasPerms[$authorID;admin]!=false;**Sadece Adminler Kullanabilir!**]`
 })
 //sunucubilgi
 bot.command({
  name:"$alwaysExecute",
  code:`
  $color[$getServerVar[hex]]
  $description[$replaceText[$replaceText[$message;$getServerVar[prefix]roller;Sunucu Rolleri;-1];$getServerVar[prefix]emojiler;Sunucu Emojileri;-1]
  $replaceText[$replaceText[$message;$getServerVar[prefix]roller;$guildRoles[mention];-1];$getServerVar[prefix]emojiler;$serverEmojis;-1]
  
  ]
  
  $onlyIf[$checkContains[$message;$getServerVar[prefix]roller;$getServerVar[prefix]emojiler]!=false;]
  `,
  nonPrefixed: false
})
//çekiliş
bot.timeoutCommand({
  channel:"$timeoutData[kanal]",
  code:`$editMessage[$getServerVar[cekilis];{title:Çekiliş Bitti 🎉}{description:Ödül: \`$timeoutData[ödül]\` 🎉
 Yapan Kişi: **$timeoutData[yapan]**
 Kazanan: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;hiçbiri, yeterli katılımcı yoktu.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer: Çekiliş Sona Erdi.:$authorAvatar}]
 $channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Yeterli katılımcı yoktu.];false;Ödül: \`$timeoutData[ödül]\` Kazanan: <@$randomText[$joinSplitText[;]]>, Tebrikler!]]
$removeSplitTextElement[$findTextSplitIndex[$clientID]]
$textSplit[$replaceText[$getReactions[$timeoutData[kanal];$getServerVar[cekilis];$timeoutData[emoji];id];$clientID,;];,]
$suppressErrors`
})
//saas
bot.command({
  name: "sa",
  code: `
 **Aleyküm Selam, Hoşgeldin <@$authorID> **
$onlyIf[$getServerVar[saas]!=no; ]
$onlyIf[$message==;]
`,
  nonPrefixed: true
})
bot.command({
  name: "sea",
  code: `
 **Aleyküm Selam, Hoşgeldin <@$authorID> **
$onlyIf[$getServerVar[saas]!=no; ]
$onlyIf[$message==;]
`,
  nonPrefixed: true
})
bot.command({
  name: "selam",
  code: `
 **Aleyküm Selam, Hoşgeldin <@$authorID> **
$onlyIf[$getServerVar[saas]!=no; ]
$onlyIf[$message==;]
`,
  nonPrefixed: true
  })
//linkengel
bot.command({
  name:"$alwaysExecute",
  code:`
  
$title[Sunucuda Link Engel Sistemi Aktif]
 $description[**\`Lütfen Bu Sunucuda Birdaha Link Atmaya Çalışma\`**]
 $color[random]
$deletecommand
  $deleteIn[5s]

  $onlyIf[$getServerVar[linkengel]!=no; ]
  $onlyIf[$hasPerms[$authorID;admin]!=true; ]
$onlyIf[$checkContains[$toLowercase[$message];https;http;.com;.net;.me;discord.gg;discord.gift]==true;]
 `,
  nonPrefixed: true
})
//kügt
bot.command({
  name:"$alwaysExecute",
  code:`
  $deletecommand
  $deleteIn[5s]
 $title[Küfür Engel Sistemi Açık]
 $description[$customEmoji[pcross] | **<@$authorID> Küfür Edemezsin!**]
 $color[00FF00]
  $onlyIf[$checkContains[$toLowercase[$message];amk;amq;mk;orospu;orosbu;ırısbı;yarrak;yarra;piç;am;göt;pezeveng;çük;taşşak;sik;siktir;pij;sg;aq;s2ş;seks;daşşak]==true;]
  $onlyIf[$getServerVar[küfür]!=kapalı;]
  $onlyIf[$isBot[$authorID]==false;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
$suppressErrors
  `,
  nonPrefixed: true
})
//otorol
bot.joinCommand({
        channel: "$getServerVar[otorollog]", 
        code: `$giveRoles[$authorID;$getServerVar[otoroll]]
        $description[**Sunucumuza Hoşgeldin <@$authorID>, <@&$getServerVar[otoroll]> Rolü Başarıyla Verildi.**]
        `
})
//sayaç
bot.joinCommand({
        channel: "$getServerVar[sayaçlog]", 
        code: `
        $description[👤 **Aramıza Hoşgeldin \`$username#$discriminator[$authorID]\`,**
        😋 **Seninle Birlikte Toplam \`$membersCount\` Kişi Olduk,**
        📣 **Hedef Kişiye Ulaşmamıza: \`$sub[$getServerVar[sayaç];$membersCount]\` Kişi Kaldı!**]
        `
})

bot.leaveCommand({
        channel: "$getServerVar[sayaçlog]", 
        code: `
         $description[👤 **\`$username#$discriminator[$authorID]\` Aramızdan Ayrıldı,**
        😋 **Toplam \`$membersCount\` Kişi Kaldık,**
        📣 **Hedef Kişiye Ulaşmamıza \`$sub[$getServerVar[sayaç];$membersCount]\` Kişi Kaldı!**
        `
})
//yardım
bot.command({
  name:"$alwaysExecute",
  code:`
  $color[RED
  $description[$replaceText[$replaceText[$message;$getServerVar[prefix]roller;Sunucu Rolleri;-1];$getServerVar[prefix]emojiler;Sunucu Emojileri;-1]
  $replaceText[$replaceText[$message;$getServerVar[prefix]roller;$guildRoles[mention];-1];$getServerVar[prefix]emojiler;$serverEmojis;-1]
  
  ]
  
  $onlyIf[$checkContains[$message;$getServerVar[prefix]roller;$getServerVar[prefix]emojiler]!=false;]
  `,
  nonPrefixed: false
})
//hgbb
bot.joinCommand({
        channel: "$getServerVar[hgkanal]", 
        code: `
        $color[00ff44]
        $title[Sunucumuza Birisi Katıldı !]
        $image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]&middle=Hoşgeldin&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=Seninle+Beraber+$membersCount+Kisiyiz&background=https://cdn.discordapp.com/attachments/782985514273472565/798608925829234788/image0.jpg&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3] 
        `
})

bot.leaveCommand({
        channel: "$getServerVar[bbkanal]", 
        code: `
        $color[ff0101]
        $title[Sunucumuzdan Birisi Ayrıldı !]
        $image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]&middle=Hoşçakal&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=Seninle+Beraber+$membersCount+Kisi+Kaldik&background=https://cdn.discordapp.com/attachments/782985514273472565/798608925829234788/image0.jpg&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
        `
})