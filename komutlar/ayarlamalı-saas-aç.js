module.exports = {
    name: "saas-aç",
    aliases:['sa-as-aç'],
    code: `
    $setServerVar[saas;yes]
    $title[Sa-As Sistemi Başarıyla Açıldı]
    $description[**Artık Selam Verene Herkese Cevap Vereceğim**]
    $color[00FF00]
    $footer[| $username Tarafından Kullanıldı.;$userAvatar[$authorID]]
    $onlyPerms[managechannels;**<@$authorID> Kanalları Yönet Yetkin Bulunmamakta!**]
    $onlyIf[$getServerVar[saas]!=yes;**<@$authorID> Sa-As Sistemin Zaten Açık Durumda!**]   
    `
}