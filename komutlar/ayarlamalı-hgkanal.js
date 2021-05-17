module.exports = {
  name:"hgkanal",
  code:`
  Resimli Hoşgeldin Kanali \`\`\`$channelName[$mentionedChannels[1]]\`\`\` Olarak Ayarlandı
  $setServerVar[hgkanal;$mentionedChannels[1]]
  $onlyPerms[admin;Yetkiniz Yetmiyor]
  $onlyIf[$mentionedChannels[1]!=;Kanal Etiketlemeyi Unuttun]
`}
 