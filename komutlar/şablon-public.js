module.exports = {
    name: "public-şablon", 
    code: `
$dm[$authorID]
$channelSendMessage[$channelID;**DM Kutunuza Şablon İletilmiştir**]
**__Shooter public şablonu__**
╔═══════๑۩۞۩๑═══════╗ 

https://discord.new/HTAFgRutdCJX

https://discord.new/wm9uqsxKBGWR

╚═══════๑۩۞۩๑═══════╝
$onlyIf[$isUserDmEnabled[$authorID]!=false;**Lütfen Size Şablon Atabilmem için DM Kutunuzu Açın**]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;**Bu Komut Kullanmak için \`Premium\` Üye Olmalısın**]`
}