module.exports = {
  name:"rolver",
  code:`
  $description[<@$mentioned[1]> Kişisine <@&$mentionedRoles[1]> Verilmiştir.]
  $giveRoles[$mentioned[1];$mentionedRoles[1]]
  
  $onlyIf[$rolePosition[$mentionedRoles[1]]>$rolePosition[$highestRole[$authorID]];**Kendinden Büyük Rolü Veremezsin!**]
  $onlyIf[$hasPerms[$authorID;manageroles]!=false;**Bunun İçin Rolleri Yönet Yetkin Olmalıdır!**]
  $onlyIf[$message[2]!=;**Kullanım !rolver @kişi @rol**]
  `
}