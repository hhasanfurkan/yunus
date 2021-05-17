module.exports = {
name:"pre-ver",
code:`$setGlobalUserVar[premium;yes;$mentioned[1]]
$setVar[presayı;$sum[$getVar[presayı];1]]
$title[Premium Verme İşlemi Başarılı]
$channelSendMessage[$channelID;$description[**<@$mentioned[1]> Kişisine Premium Üyelik Verildi**]]
$thumbnail[https://cdn.discordapp.com/emojis/837998513064509451.gif?v=1]

$onlyForIDs[$botOwnerID;**Sadece Sahibim Premium Verebilir**]

$onlyIf[$mentioned[1]!=;**Premium Üye Vermek İstediğin Kişiyi Etiketle**]
`
} 