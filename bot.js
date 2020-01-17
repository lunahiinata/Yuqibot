const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NjY0NDA2OTk4OTAwNTM5NDMy.XiHVrg.bJhqnsWO5LBA8-hz9pXhyBaZD_o');
