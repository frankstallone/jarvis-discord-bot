require('dotenv').config();
const clear = require('./clear')
const hey = require('./hey')
const version = require('./version')
const whois = require('./whois')

const commands = {
    clear,
    hey,
    version,
    whois
};

const guild_id = process.env.GUIDE_ID;

module.exports = async (msg) => {
    if (msg.channel.guild.id === guild_id) {
        const args = msg.content.split(' ');        
        // Check to ensure ther are arguments && a ! prefix
        if (args.length == 0 || args[0].charAt(0) !== '!') return;

        const command = args.shift().substr(1);
        if (Object.keys(commands).includes(command)) {
            commands[command](msg, args);
        }
    }
}