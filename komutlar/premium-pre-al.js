module.exports = {
name:"pre-al",
code:`$setGlobalUserVar[premium;no;$mentioned[1]]
$setVar[presayı;$sub[$getVar[presayı];1]]
<@$mentioned[1]>
$title[Premium Alma İşlemi Başarılı]
$channelSendMessage[$channelID;$description[**Premium Alınan Üye:** <@$mentioned[1]>

**Premium Aldığı Sunucu:** [$serverName[$guildID]]($getServerInvite)
 
**__Hesap Detayları__:**
**Kurulum Tarihi:** \`$creationDate[$mentioned[1]]\`
**Hesap ID si:** $mentioned[1]
**Premium Alınma Sebebi: \`$noMentionMessage\`**]]

$onlyForIDs[$botOwnerID;**Sadece Sahibim Premium Verebilir**]

$onlyIf[$mentioned[1]!=;**Premium Üye Vermek İstediğin Kişiyi Etiketle**]
`
}  