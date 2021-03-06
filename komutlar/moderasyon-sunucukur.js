module.exports = ({
    name:"sunucukur",
    aliases:"sunucu-kur",
    code:`
    $channelSendMessage[$channelID;**Başarıyla Sunucu Kurma İşlemi Tamamlandı!**]
$wait[1s]
$createRole[Üye;ffdb4d;no]
$createRole[Özel;e49a5e;no]
$createRole[Rehber;ca0032;no]
$createRole[Partner;ba5583;no]
$createRole[muted;ababab;no]
$createRole[Moderatör;00d6ff;no]
$createRole[Sunucu botları;ff5558;no]
$createRole[Yönetim;48ff00;no]
$createRole[Co-Owner;ff7fe2;no]
$createRole[Founder;00000;no]
$wait[1s]
$modifyChannelPerms[$get[yetk3];-viewchannel;$guildID]
$modifyChannelPerms[$get[yetk2];-viewchannel;$guildID]
$modifyChannelPerms[$get[yetk1];-viewchannel;$guildID]
$wait[1s]
$let[yetk3;$createChannel[・özel-oda;text;yes;$get[yetkili]]]
$let[yetk2;$createChannel[・yönetim;text;yes;$get[yetkili]]]
$let[yetk1;$createChannel[・yetkili;text;yes;$get[yetkili]]]
$wait[1s]
$let[yetkili;$createChannel[Yetkili;category;yes]]
$wait[1s]
$createChannel[・reklam-log;text;no;$get[loglar]]
$createChannel[・mesaj-log;text;no;$get[loglar]]
$createChannel[・modlog;text;no;$get[loglar]]
$wait[1s]
$let[loglar;$createChannel[Loglar;category;yes]]
$wait[1s]
$createChannel[・partner-şart;text;no;$get[partner]]
$createChannel[・partnerler;text;no;$get[partner]]
$createChannel[・partner-text;text;no;$get[partner]]
$wait[1s]
$let[partner;$createChannel[Partner;category;yes]]
$wait[1s]
$createChannel[・kelime-oyunu;text;no;$get[kategori2]]
$createChannel[・random-atma;text;no;$get[kategori2]]
$createChannel[・bot-ile-sohbet;text;no;$get[kategori2]]
$createChannel[・tuttu-tutmadı;text;no;$get[kategori2]]
$createChannel[・sayı-saymaca;text;no;$get[kategori2]]
$wait[1s]
$let[kategori2;$createChannel[Eğlence;category;yes]]
$wait[1s]
$createChannel[・Müzik 2;voice;no;$get[kategori]]
$createChannel[・Müzik 1;voice;no;$get[kategori]]
$createChannel[・müzik-odası;text;no;$get[kategori]]
$createChannel[・bot-komut;text;no;$get[kategori]]
$createChannel[・görsel-paylaşım;text;no;$get[kategori]]
$createChannel[・genel-sohbet;text;no;$get[kategori]]
$wait[1s]
$let[kategori;$createChannel[Main;category;yes]]
    $wait[1s]
    $createChannel[・boostlar;text;no;$joinSplitText[]] 
    $createChannel[・rol-al;text;no;$joinSplitText[]] 
    $createChannel[・davetler;text;no;$joinSplitText[]] 
    $createChannel[・sayaç;text;no;$joinSplitText[]] 
    $createChannel[・gelen-giden;text;no;$joinSplitText[]] 
    $let[kurallar;$createChannel[・kurallar;text;yes;$joinSplitText[]] 
    $wait[1s] 
    $textSplit[$createChannel[LOBI;category;yes];]
$onlyPerms[admin;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısınız]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;**Bu Komut Kullanmak için \`Premium\` Üye Olmalısın**]`
})