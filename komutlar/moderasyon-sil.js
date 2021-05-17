module.exports = {
name:"sil",
code:`
$deletecommand
$deleteIn[5s]
$clear[$message[1]]
$argsCheck[>1;**Lütfe Bir Miktar Giriniz**]
$onlyIf[$message[1]>=0;**Lütfen Bir Rakam Giriniz**]
$description[**\`$message[1]\` Miktarda Mesajı Uzaya Fırlattım**]
$onlyPerms[managemessages;**Mesajları Silmek için Mesajları Yönet Yetkin Olmalı**]`
}