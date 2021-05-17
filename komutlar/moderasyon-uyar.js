module.exports = {
  name:"uyar",
  code:`
  $title[Uyarı!]
  $description[
  
  **Uyarılan :** <@$mentioned[1]>
  **Uyaran :** <@$authorID>
  **Sebep :** $replaceText[*$noMentionMessage*;**;Sebep Belirtilmedi;-1]
  $onlyPerms[admin;**Yetkin Yok!**]
  $onlyIf[$message!=;**Uyarmam İcin Birini Etiketle!**]
  `
}