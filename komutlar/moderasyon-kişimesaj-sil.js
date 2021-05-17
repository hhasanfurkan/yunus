module.exports = {
name:"kişi-mesaj-sil",
aliases:['kişimesaj-sil'],
code:`
$deletecommand
$deleteIn[5s]
$onlyPerms[managemessages;**Komut'u Kullanmak için \`Mesajları\` Yönet Yetkisine Sahip Olmalısın!**]
$argsCheck[>2;**Doğru Kullanım: \`kf-kişi-mesaj-sil @kişi miktar\`**]
$clear[$message[2];$mentioned[1]]
$description[**<@$mentioned[1]> Kişisinin \`$message[2]\` Miktar Mesajı Uzaya Fırlatıldı**]`
}