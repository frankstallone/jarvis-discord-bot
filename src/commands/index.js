require('dotenv').config();
const clear = require('./clear')
const hey = require('./hey')
const version = require('./version')
const whois = require('./whois')

// Similar to TypeScript Enums 😃
const commands = {
    clear,
    hey,
    version,
    whois
};

const prefix = '!';
const guild_id = process.env.GUIDE_ID;

module.exports = async (msg) => {
    // Prefix required, no bots
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    if (msg.channel.guild.id === guild_id) {
        // Split up arguments
        const args = msg.content.split(' ');
        // Check to ensure there are arguments && a ! prefix
        if (args.length == 0 || args[0].charAt(0) !== '!') return;
        // Grab command, remove bang
        const command = args.shift().substr(1);
        // Enum check for valid command, fire command
        if (Object.keys(commands).includes(command)) {
            commands[command](msg, args);
        }
    }
}