module.exports = {
  name: "otorol-aç",
  code: `
$setServerVar[otoroll;$mentionedRoles[1]]
  $setServerVar[otorollog;$mentionedChannels[1]]
  $description[**Otorol Kanalı:** $channelName[$mentionedChannels[1]]
  **Otorol Rolü:** $roleName[$mentionedRoles[1]] **Olarak Ayarlanmıştır!**]
  $onlyPerms[admin;**Otorol Komutunu Kullanmak için Yetkin Bulunmamakta!**]
  $onlyIf[$message[2]!=;**Doğru Kullanım: \`!otorol @rol @log\`**]
   `
}