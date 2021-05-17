module.exports = {
    name: "oyun-şablon", 
    code: `
$dm[$authorID]
$channelSendMessage[$channelID;**DM Kutunuza Şablon İletilmiştir**]
**__Shooter oyun şablonu__**
╔═══════๑۩۞۩๑═══════╗ 

https://discord.new/cS9PkRr8SYSa

╚═══════๑۩۞۩๑═══════╝
$onlyIf[$isUserDmEnabled[$authorID]!=false;**Lütfen Size Şablon Atabilmem için DM Kutunuzu Açın**]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;**Bu Komut Kullanmak için \`Premium\` Üye Olmalısın**]`
}