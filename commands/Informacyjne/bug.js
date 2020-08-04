const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let avatar = message.author.avatarURL({size: 2048, dynamic: true});
  
  if (!args[0]) return message.channel.send({embed: {color: "0xdb1402", title: "Error!", description: `Nie podałeś treści buga!`, footer: `${message.author.username} (${message.author.id})`}});
    if (args[0] === "bug") return message.channel.send({embed: {color: "0xdb1402", title: "Error!", description: `Nie podałeś treści buga!`, footer: `${message.author.username} (${message.author.id})`}});
    args = args.join(" ");
    message.channel.send({embed: {color: "0x363636", title: "Zgłosiłeś/aś buga!", description: `Pamiętaj, to polecenie nie służy do zabawy i możesz zostać ukarany!`, footer: `${message.author.username} (${message.author.id})`}});
    const content = new Discord.MessageEmbed()
    .setTitle("Nowe zgłoszenie:")
    .setURL(`https://discord.com/users/${message.author.id}`)
    .setColor("RANDOM")
    .addField(`Zgłosił`, `**${message.author.username}#${message.author.discriminator}**`)
    .addField(`BUG:`, `${args}`)
    .addField(`Nazwa Serwera:`, `**${message.guild.name}**`)
    .addField(`ID Serwera:`, `**${message.guild.id}**`)
    .setTimestamp()
    .setFooter(`${message.author.tag} (${message.author.id})`);
    client.channels.cache.get("").send(content)
  }

  exports.help = {
    name: "bug",
    description: "nigdy tu nic nie pisze lol"
  };

exports.conf = {
    aliases: []
}