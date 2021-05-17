module.exports = {
name: "sesten-çık",
code:`
Sesli kanaldan çıktım!
$djsEval[message.member.voice.channel.leave();]
$onlyIf[$voiceID!=;Sesli kanalda değilsin]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;**Bu Komut Kullanmak için \`Premium\` Üye Olmalısın**]
`
}