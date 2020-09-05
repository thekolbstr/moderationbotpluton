const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
     message.reply("Fuck you")
}

module.exports.config = {
    name: "fuck",
    description: "Answers fuck you",
    usage: "-fuck",
    accessableby: "Members",
    aliases: []
}