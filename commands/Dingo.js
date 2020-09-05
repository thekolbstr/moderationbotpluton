const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send(" My name is <@431222092256641025> and i forget to do everything  ")
}

module.exports.config = {
    name: "dingo",
    description: "",
    usage: "-dingo",
    accessableby: "Members",
    aliases: []
}