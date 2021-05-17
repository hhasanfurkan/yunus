module.exports = {
    name: "çekiliş-başlat",
    code: `
$editMessage[$getServerVar[cekilis];{title:Çekiliş Bitti 🎉}{description:Ödül: \`$messageSlice[1]\` 🎉
   Yapan Kişi: **$userTag[$authorID]**
   Kazanan: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;hiçbiri, yeterli katılımcı yoktu.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer: Çekiliş Sona Erdi.:$authorAvatar}]
   $channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Yeterli katılımcı yoktu.];false;Ödül: \`$messageSlice[1]\` Kazanan: <@$randomText[$joinSplitText[;]]>, Tebrikler!]]
$removeSplitTextElement[$findTextSplitIndex[$clientID]]
$textSplit[$replaceText[$getReactions[$channelID;$getServerVar[cekilis];🎉;id];$clientID,;];,]
   $wait[$message[1]]
   $setTimeout[$message[1];Kazanan: <@$randomText[$joinSplitText[;]]>
kanal: $channelID
emoji: 🎉
ödül: $messageSlice[1]
yapan: $userTag[$authorID]]
   $setServerVar[cekilis;$sendMessage[{title: 🎉🎉ÇEKİLİŞ🎉🎉}{description:  **$messageSlice[1]**
   
   **Katılmak için 🎉 tepkisine tıklayın**
   **Süre: $message[1]**}{timestamp}{color:RED}{reactions:🎉};yes]]
   $onlyIf[$messageSlice[1]!=;{title:Argümanlar Aranıyor}{description:Çekiliş için herhangi bir ödül koymadınız Bu Formatı Takip Edin: 
   \`\`\`
   - $getServerVar[prefix]çekiliş <süre> <ödül>.\`\`\`
   \`<> Yazmayın \`
   }{color:ORANGE}]
   $onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;]]!=false;{title: Yanlış Kullanım}{description:Yeni girdiğiniz saat biçimi geçersiz.}{color:RED}]
   $onlyIf[$message[2]!=;{title: Yanlış Kullanım}{description:Bir çekiliş sebebi belirtmediniz Bu örneği izleyin:
    \`\`\`
    $getServerVar[prefix]çekiliş <süre> <sebep>
    \`\`\`}{color:RED}]
   $onlyPerms[admin;{title:Yetkin Yok}{description:Senin \`YÖNETİCİ\` Yetkin Yok.}{color:RED}]
$suppressErrors`
   }