
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send("My creator is <@317462173871767552>! He is the best :P")
}

module.exports.config = {
    name: "creator",
    description: "",
    usage: "-creator",
    accessableby: "Members",
    aliases: []
}