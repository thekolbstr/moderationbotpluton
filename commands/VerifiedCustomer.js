
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
  const guildMember = message.member;
  guildMember.addRole('721599216199270400');
};

module.exports.config = {
    name: "verifiedcustomer",
    description: "",
    usage: "-verifiedcustomer",
    accessableby: "Members",
    aliases: ['Kaos']
}