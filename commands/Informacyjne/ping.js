exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    
    const pingEmbed = new Discord.MessageEmbed()
      .setTitle(":ping_pong: Pong!")
      .addField(`Ping Bota:`, "```" + client.ws.ping + " ms```")
      .setColor(`#ffd83b`)
      .setFooter(`${message.author.tag} (${message.author.id})`)
      .setTimestamp();
    message.channel.send(pingEmbed);
  };
  
  exports.help = {
    name: "ping",
    description: "nigdy tu nic nie pisze lol"
  };

exports.conf = {
    aliases: []
}
  