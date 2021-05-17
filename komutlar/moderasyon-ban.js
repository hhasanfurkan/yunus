module.exports = ({
name: "ban", 
code: `$ban[$mentioned[1];$noMentionMessage]
$title[Bir Üye Ban Yedi]
$color[GREEN]
$image[https://media.discordapp.net/attachments/825386210674868224/843139921095163944/tenor_5.gif?width=438&height=181]
$description[**⇨ Ban yiyen:**<@$mentioned[1]>

**⇨ Komutu Kullanan Moderatör:** <@$authorID>

**⇨ Açıklama:** \`$replaceText[$replaceText[$checkCondition[$replaceText[$message;$message[1];;-1]==];true;Sebep Girilmedi!;-1];false;$replaceText[$message;$message[1];;-1];-1]\`]
$footer[Ban Yiyen Kişinin ID'si: $mentioned[1]]
$onlyPerms[ban;{title:Hata}{description:**Bu Komutu Kullanabilmek için \`"Üyeleri Engelle"\` Yetkisine Sahip Olman Gerekiyor!**}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
$onlyBotPerms[ban;{title:Hata}{description:**Bu Komutu Kullanabilmek için \`"Üyeleri Engelle"\` Yetkisine Sahip Olmam Gerekiyor!**}{color:RED}
{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$mentioned[1]]]];Kendinden Üst Yetkiye Sahip Kişiyi Banlayamazsın oç.]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$mentioned[1]]]];ulan andavallı benim rolümden yüksek roldeki adamı nasıl banlayiym özürlü piç]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross] **Lütfen Banlamam için Birini Etiketle!**]` 
})