module.exports = {
  name: "sayaç-aç",
  code: `
  $onlyPerms[admin;**Sayaç Komutunu Ayarlamak için Yetkin Bulunmamakta!**]
  $onlyIf[$isNumber[$message[2]]!=false;**Ayarlanan Hedef Bir Sayı Değil!**]
  $onlyIf[$message!=;**Doğru Kullanım: \`!sayaç #kanal hedef\`**]
  $setServerVar[sayaçlog;$mentionedChannels[1]]
  $setServerVar[sayaç;$noMentionMessage]
  $description[**Sayaç  Kanalı:** <#$mentionedChannels[1]>
  **Hedef Kişi Sayısı: \`$noMentionMessage\` Olarak Ayarlanmıştır!**]
  $suppressErrors[**Girdiğin Bir Sayı Değil!**]
  
  `
}