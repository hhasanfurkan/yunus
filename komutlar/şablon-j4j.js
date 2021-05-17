module.exports = {
    name: "j4j-şablon", 
    code: `
$dm[$authorID]
$channelSendMessage[$channelID;**DM Kutunuza Şablon İletilmiştir**]
**__Shooter j4j şablonu__**
╔═══════๑۩۞۩๑═══════╗ 

https://discord.new/pCuNrMDcYxMD


╚═══════๑۩۞۩๑═══════╝
$onlyIf[$isUserDmEnabled[$authorID]!=false;**Lütfen Size Şablon Atabilmem için DM Kutunuzu Açın**]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;**Bu Komut Kullanmak için \`Premium\` Üye Olmalısın**]`
}