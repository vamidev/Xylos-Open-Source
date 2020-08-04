const Discord = require("discord.js")

module.exports = async (client, message) => {
  if (message.author.bot || message.author === client.user) return;
  
  let prefix = client.config.prefix;
  
  let zaproszeniedeleter = ["discord.gg/", "discord.com/invite", "discordapp.com/invite"];
  
  if (zaproszeniedeleter.some(word => message.content.toLowerCase().includes(word))) {
    await message.delete();
    return message.channel.send("Nie reklamuj się!")
    .then(m => m.delete({timeout: 10000}))
  }
  
  if (!message.content.startsWith(prefix)) return;
  
  let args = message.content.slice(prefix.length).trim().split(" ");
  let msg = message.content.toLowerCase();
  let cmd = args.shift().toLowerCase();
  let sender = message.author;
  
  message.flags = []
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }
  
  let commandFile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (!commandFile) return message.react(":x:")
  
  try {
    if (!commandFile) return;
    commandFile.run(client, message, args);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(`${sender.tag} (${sender.id}) użył komendy: ${cmd}`);
  }
}
