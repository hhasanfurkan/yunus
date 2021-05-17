module.exports = {
  name: "otorol-kapat",
  aliases: "otorol-kapat",
  code: `
  $onlyPerms[admin;**Otorol Kapatma Komutu için Yetkin Bulunmamakta**]
  $resetServerVar[otoroll]
  $resetServerVar[otorollog]
  $description[**Otorol için Ayarlanan Rol ve Log Kanalı Temizlendi!**]
   `
}