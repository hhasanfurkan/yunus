module.exports = {
  name: "sayaç-kapat",
  aliases: "sayaç-kapat",  
  code: `
  $onlyPerms[admin;**Sayaç Komutunu Kapatmak için Yetkin Bulunmamakta!**]
  $resetServerVar[sayaçlog]
  $resetServerVar[sayaç]
 $description[**Sayaç için Ayarlanan Rol ve Log Kanalı Temizlendi!**]
  `
}