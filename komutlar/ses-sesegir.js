module.exports = {
name: "sesegir",
code:`
Sesli kanala girdim!
$djsEval[message.member.voice.channel.join();]
$onlyBotPerms[connect;Sesli kanala girebilmem için \`\`Bağlan\`\` yetkisine sahip olmam gerekmekte.]
$onlyIf[$voiceID!=;Sesli kanalda değilsin]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;**Bu Komut Kullanmak için \`Premium\` Üye Olmalısın**]
`
}