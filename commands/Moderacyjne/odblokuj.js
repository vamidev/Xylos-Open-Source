/*
TA KOMENDA BĘDZIE DOPRACOWANA W WERSJI v2
*/

/*
TA KOMENDA BĘDZIE DOPRACOWANA W WERSJI v2
*/

const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!client.unlockit) client.unlockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send({embed: {color: "#ff0000", title: "Error!", description: `${message.author.username}, nie masz permisji do użycia tej komendy!`}})

  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: true
    })
     message.channel.send({embed: {color: "GREEN", title: "Sukces!", description: `${message.author.username}, właśnie odblokowałeś dostęp do pisania na kanale!`}})
  };

  exports.help = {
    name: "odblokuj",
    description: "nigdy tu nic nie pisze lol"
  };

exports.conf = {
    aliases: []
}