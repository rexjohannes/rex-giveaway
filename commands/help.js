const ms = require('ms');

exports.run = async (client, message, args) => {
  message.channel.send(`**Help**

g!start <channel> <time> <prize>
g!end <messageid>
g!reroll <messageid>
g!support
g!invite`)

};