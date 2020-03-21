const Discord = require("discord.js");
module.exports = async (msg, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor(0x9F89AF)
    .setTitle(`User Information`)
    .addField(`Current Server:`, `${message.guild.name}`, true)
    .addField(`Username:`, `${message.author.username}`, true)
    await message.channel.send(embed);
};
