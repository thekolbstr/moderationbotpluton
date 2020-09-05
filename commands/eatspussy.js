
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
     message.reply("Eats Mad Pussy!")
}

module.exports.config = {
    name: "pussy",
    description: "",
    usage: "-pussy",
    accessableby: "Members",
    aliases: []
}