const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
require('dotenv').config();

// JARVIS Prefix
const PREFIX = `!`;

const commandHandler = require('./commands');

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on("ready", () => {
  console.log(`🦾 ${client.user.tag} is online!`);
});

// Create an event listener for messages
client.on('message', commandHandler);

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.TOKEN);
