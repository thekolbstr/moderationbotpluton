const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
     message.channel.send("Please Send $51 to https://www.paypal.me/flameflorez. Make sure its through family and friends and not goods and service and send the receipt in this ticket!")
}

module.exports.config = {
    name: "paypalparagonplat",
    description: "gives paypal for paragon plat",
    usage: "-paypalparagonplat",
    accessableby: "Support Team",
    aliases: []
}