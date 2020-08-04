const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.js")

require("./handler/module.js")(client);
require("./handler/Event.js")(client);

client.on("error", console.error);
client.login(config.token)
