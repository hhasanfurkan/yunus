module.exports = {
name: "oylama",
code:`
$deletecommand
$color[RED]
$title[Oylama]
$description[$message]
$addReactions[👍;👎]
$footer[$username#$discriminator[$authorID] - Oylamayı Yapan Kişi]
$onlyIf[$message[1]!=;**Doğru Kullanım: $getServerVar[prefix]oylama <mesaj>**]
$onlyPerms[managemessages;**Oylama Yapabilmek için \`Yönetici\` Yetkisine Sahip Olmalısın**]

`
}