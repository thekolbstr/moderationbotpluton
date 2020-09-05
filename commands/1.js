const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
     message.channel.send("Please send $28 to @Setherson19")
}

module.exports.config = {
    name: "venmoluna",
    description: "gives paypal",
    usage: "-venmoluna",
    accessableby: "Support Team",
    aliases: []
}