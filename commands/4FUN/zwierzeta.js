exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    const superagent = require("superagent")
  let {body} = await superagent
  .get(`link do api`)
  
    const embed = new Discord.MessageEmbed()
          .setImage(body.url)
          .setColor(`RANDOM`)
          .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
          .setTimestamp()
        message.channel.send(embed);
  };
  
  exports.info = {
    name: "nazwa",
    description: "Obrazki zwierząt korzystając z api"
    };

// Nie będę umieszczał każdej komendy z kategorii: Zwierzęta
// Ponieważ każda komenda wygląda identycznie tylko jest inny link do api.