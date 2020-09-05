
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send("<@536938919703347229> has mad abs!")
}

module.exports.config = {
    name: "kaos",
    description: "",
    usage: "-kaos",
    accessableby: "Members",
    aliases: ['Kaos']
}