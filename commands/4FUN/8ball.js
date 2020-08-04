exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
  
    var odpowiedz = [ 
      "Tak",
      "Nie",
    ];
  odpowiedz = odpowiedz[Math.floor(Math.random() * odpowiedz.length)];
    
    let avatar = message.author.avatarURL({size: 2048, dynamic: true});
    
    if (!args[0]) {
              const embed = new Discord.MessageEmbed()
              .setColor('#e74c3c ')
              .setTitle(`Error!`)
              .setDescription("Poprawne uzycie: 8ball <text>")
              .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
              .setTimestamp()
              return message.channel.send(embed).then(m => m.delete(5000) && message.delete(5000));
          }
    
    const embed = new Discord.MessageEmbed()
          .setThumbnail(`${avatar}`)
          .setColor(`RANDOM`)
          .addField(`Pytanie`, `${message.content.slice(6)}`, true)
          .addField(`Odpowiedź`, `${odpowiedz}`, true)
          .setFooter(`${message.author.username} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
          .setTimestamp()
        message.channel.send(embed);
  };
  
  exports.help = {
    name: "8ball",
    description: "nigdy tu nic nie pisze lol"
  };

exports.conf = {
    aliases: []
}

// Komenda IQ, IP jest bazowana na tej.