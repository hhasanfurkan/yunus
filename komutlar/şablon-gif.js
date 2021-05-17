module.exports = {
    name: "gif-şablon", 
    code: `
$dm[$authorID]
$channelSendMessage[$channelID;**DM Kutunuza Şablon İletilmiştir**]
**__Shooter gif şablonu__**
╔═══════๑۩۞۩๑═══════╗ 

https://discord.new/V8GhB2yDZZjH

╚═══════๑۩۞۩๑═══════╝
$onlyIf[$isUserDmEnabled[$authorID]!=false;**Lütfen Size Şablon Atabilmem için DM Kutunuzu Açın**]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;**Bu Komut Kullanmak için \`Premium\` Üye Olmalısın**]`
}