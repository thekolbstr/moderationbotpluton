
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send("<@704151193882198028> Feels unheard")
}

module.exports.config = {
    name: "butter",
    description: "",
    usage: "-butter",
    accessableby: "Members",
    aliases: []
}