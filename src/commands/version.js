require('dotenv').config();
module.exports = async (msg, args) => {
  await msg.channel.send(`(J.A.R.V.I.S.) Version ${process.env.JARVIS_VERSION}`);
};
