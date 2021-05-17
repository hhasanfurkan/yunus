module.exports = {
    name: "rewards-şablon", 
    code: `
$dm[$authorID]
$channelSendMessage[$channelID;**DM Kutunuza Şablon İletilmiştir**]
**__Shooter rewards şablonu__**
╔═══════๑۩۞۩๑═══════╗ 



╚═══════๑۩۞۩๑═══════╝
$onlyIf[$isUserDmEnabled[$authorID]!=false;**Lütfen Size Şablon Atabilmem için DM Kutunuzu Açın**]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;**Bu Komut Kullanmak için \`Premium\` Üye Olmalısın**]`
}