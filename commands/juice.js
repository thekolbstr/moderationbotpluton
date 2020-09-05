
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send("<@297735447545643008> is very juicy!")
}

module.exports.config = {
    name: "juice",
    description: "",
    usage: "-juice",
    accessableby: "Members",
    aliases: []
}