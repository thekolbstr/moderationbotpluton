
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send("Stop hacking in Minecraft <@607946830491418644>")
}

module.exports.config = {
    name: "seth",
    description: "",
    usage: "-seth",
    accessableby: "Members",
    aliases: ['setherson']
}