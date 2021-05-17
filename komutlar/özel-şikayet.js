module.exports = {
    name: "şikayet", 
    code: `
$dm[809564232282406932]
$channelSendMessage[$channelID;**Şikayet Sahibime İletilmiştir!**]
$description[$thumbnail[$authorAvatar]
**Şikayeti Gönderen Kişi:** \`$username#$discriminator[$authorID] - $authorID\`
**Şikayeti Gönderdiği Sunucu:** \`$serverName[$guildID]\`
**Gönderdiği Şikayet:** \`$noMentionMessage\`
Şikayetinizi Gönderip Bize Destek Olduğun için Teşekkürler__]
$onlyIf[$messsage!=;**Lütfen Bir Şikayet Belirt**]`
}