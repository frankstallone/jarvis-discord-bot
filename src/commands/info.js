const Discord = require('discord.js');
require('dotenv').config();

module.exports = async (msg, args) => {
  const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`Server Info: Stallone's Speakeasy`)
	.setAuthor('Frank Stallone', 'https://stallone.dev')
  .setDescription(`Where everybody knows your name`)
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: `Created`, value: `March 2020` },
		{ name: `J.A.R.V.I.S. Version`, value: `${process.env.JARVIS_VERSION}` },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

await msg.channel.send(exampleEmbed);
};
