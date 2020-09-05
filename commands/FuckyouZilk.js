
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send("Fuck you <@394819617773715457>")
}

module.exports.config = {
    name: "zilk",
    description: "",
    usage: "-zilk",
    accessableby: "Members",
    aliases: []
}