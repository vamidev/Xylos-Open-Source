/*
TA KOMENDA BĘDZIE DOPRACOWANA W WERSJI v2
*/

const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send({embed: {color: "#ff0000", title: "Error!", description: `${message.author.username}, nie masz permisji do użycia tej komendy!`}})

  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
     message.channel.send({embed: {color: "GREEN", title: "Sukces!", description: `${message.author.username}, właśnie zablokowałeś dostęp do pisania na kanale!`}})
  };

  exports.help = {
    name: "zablokuj",
    description: "nigdy tu nic nie pisze lol"
  };

exports.conf = {
    aliases: []
}