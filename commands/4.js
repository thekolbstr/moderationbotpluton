const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
     message.channel.send("Please send $66 to $ Flameflorez")
}

module.exports.config = {
    name: "cashappimpulsevip",
    description: "gives paypal",
    usage: "-cashappimpulsevip",
    accessableby: "Support Team",
    aliases: []
}