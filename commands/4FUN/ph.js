exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
  
    if (!args[0]) {
              const embed = new Discord.MessageEmbed()
              .setColor('#e74c3c')
              .setTitle(`Error!`)
              .setDescription(`Poprawne uzycie: ph <text1> <text2>`)
              .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
              .setTimestamp()
              return message.channel.send(embed).then(m => m.delete(5000) && message.delete(5000));
          }
  
   if (!args[1]) {
              const embed = new Discord.MessageEmbed()
              .setColor('#e74c3c')
              .setTitle(`Error!`)
              .setDescription(`Nie podałeś drugiego argumentu!`)
              .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
              .setTimestamp()
              return message.channel.send(embed).then(m => m.delete(5000) && message.delete(5000));
          }
    
    const embed = new Discord.MessageEmbed()
          .setImage(`https://api.alexflipnote.dev/pornhub?text=${args[0]}&text2=${args[1]}`)
          .setColor(`#ffd83b`)
          .setFooter(`${message.author.username} (${message.author.id})`, message.author.avatarURL())
          .setTimestamp()
        message.channel.send(embed);
  };
  
  exports.help = {
    name: "ph",
    description: "nigdy tu nic nie pisze lol"
  };

exports.conf = {
    aliases: ["phtext"]
}