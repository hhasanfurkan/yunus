module.exports = {
    name: "öneri", 
    code: `
$dm[809564232282406932]
$channelSendMessage[$channelID;**Öneri Sahibime İletilmiştir!**]
$description[$thumbnail[$authorAvatar]
**Öneriyi Gönderen Kişi:** \`$username#$discriminator[$authorID] - $authorID\`
**Öneriyi Gönderdiği Sunucu:** \`$serverName[$guildID]\`
**Gönderdiği Öneri:** \`$noMentionMessage\`
__Öneririnizi Gönderip Bize Destek Olduğun için Teşekkürler__]
$onlyIf[$messsage!=;**Lütfen Bir Öneri Belirt**]`
}