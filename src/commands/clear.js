const Discord = require('discord.js');
module.exports = async (msg, args) => {
  // Not everyone can clear
  if (!msg.member.hasPermission("MANAGE_MESSAGES")) { 
    const giphy = new Discord.MessageEmbed()
      .setTitle(`🚨 Error: You do not have the right permissions to clear messages`)
      .setImage('https://media.giphy.com/media/9jb1IK331xkGs/giphy.gif')
    return msg.channel.send(giphy)
  };
  !args[0]
    ? await msg.reply(`🚨 Error: Second argument required`)
    : await msg.channel
        .bulkDelete(args[0])
        .then(messages =>
          console.log(
            `⚡️${msg.author.username} bulk deleted ${messages.size} messages`
          )
        )
        .catch(console.error);
};
