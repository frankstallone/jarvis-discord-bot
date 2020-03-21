module.exports = async (msg, args) => {
  // Not everyone can clear
  if (!msg.member.hasPermission("MANAGE_MESSAGES")) return;
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
