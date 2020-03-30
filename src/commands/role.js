const Discord = require('discord.js');
module.exports = async (msg, args) => {
    // Not everyone can change roles
    const canChange = !msg.member.roles.cache.has('690672494847459479') || !msg.member.hasPermission("ADMINISTRATOR");
    if (!canChange) { 
        const giphy = new Discord.MessageEmbed()
        .setTitle(`⛔️ Error: You do not have the right permissions to change a users role`)
        .setImage('https://media.giphy.com/media/9jb1IK331xkGs/giphy.gif')
        return await msg.channel.send(giphy)
    };
    if (!args[1]) {
        const giphy = new Discord.MessageEmbed()
        .setTitle(`⛔️ Error: You did not specify a user role argument`)
        .setImage('https://media0.giphy.com/media/U3yyshYY8hYMNqgllg/giphy.gif?cid=ecf05e47131f2fcbf403e0163a72d308edd9247fd28423af&rid=giphy.gif')
        return await msg.channel.send(giphy)
    }

    // Get mentioned members ID
    const guildMember = msg.mentions.members.first();
    const nickname = msg.mentions.members.first().nickname;
    // Get mentioned role's ID
    const role = msg.member.guild.roles.cache.find(role => role.name === `${args[1]}`);

    if (guildMember.roles.cache.some(role => role.name === `${args[1]}`)) {
        const giphy = new Discord.MessageEmbed()
        .setTitle(`⛔️ ${nickname} has been demoted from ${args[1]} role`)
        .setImage('https://media1.giphy.com/media/jVCZVJFmJNaMCPdN3e/giphy.gif?cid=ecf05e47d3a7a49a7a2751c90ac72aaed4b07174fb7e84be&rid=giphy.gif')
        await msg.channel.send(giphy)
        return await guildMember.roles.remove(role)
    }
    const giphy = new Discord.MessageEmbed()
    .setTitle(`✅ ${nickname} has been promted to ${args[1]} role`)
    .setImage('https://i.giphy.com/media/4wycNsucv3ofC/giphy.gif')
    await msg.channel.send(giphy)
    return await guildMember.roles.add(role)
  };
  