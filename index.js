// Import the discord.js module
const Discord = require("discord.js");
// Create an instance of a Discord client
const client = new Discord.Client();
// Node's file system module
const fs = require('fs');
// Dotenv
require('dotenv').config();
// Bot Prefix
const PREFIX = `!`;
// Version of JARVIS
const VERSION = `1.05`;

client.commands = new Discord.Collection();

// Get all the commands from command folder, set them on client
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on("ready", () => {
  console.log(`🦾 ${client.user.tag} is online!`);
});

// Create an event listener for messages
client.on("message", message => {
  //  Append PREFIX to commands
  let args = message.content.substring(PREFIX.length).split(" ");

  // Switch case for all text commands
  switch (args[0]) {
    case "hey":
      client.commands.get('hey').execute(message, args);
      break;
    case "website":
      message.channel.send(`https://stallone.dev`);
      break;
    case "whois":
      if (args[1] === "version") {
        message.channel.send(`(J.A.R.V.I.S.) Version ${VERSION}`);
      } else {
        message.reply(`Invalid arguments`);
      }
      break;
    case "clear":
      !args[1]
        ? message.reply(`🚨 Error: Second argument required`)
        : message.channel
            .bulkDelete(args[1])
            .then(messages =>
              console.log(`⚡️${message.author.username} bulk deleted ${messages.size} messages`)
            )
            .catch(console.error);
      break;
    case 'whoami':
        const embed = new Discord.MessageEmbed()
        .setColor(0x9F89AF)
        .setTitle(`User Information`)
        .addField(`Current Server:`, `${message.guild.name}`, true)
        .addField(`Username:`, `${message.author.username}`, true)
        message.channel.send(embed);
    break;
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.TOKEN);
