const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send(" <@421351972264738817> I need to go on a date with the women first and then it’s hot ")
}

module.exports.config = {
    name: "barnical",
    description: "",
    usage: "-barnical",
    accessableby: "Members",
    aliases: []
}