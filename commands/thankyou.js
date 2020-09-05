const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
    message.channel.send("Thank you for purchasing at 𝙋𝙡𝙪𝙩𝙤𝙣 𝙍𝙚𝙘𝙤𝙫𝙚𝙧𝙞𝙚𝙨 𝘼𝙣𝙙 𝙈𝙚𝙣𝙪𝙨! If you have a minute please leave a short review under <#721599914471063643> , we’d really appreciate it. Hope you shop with us again soon! Also recommend us to a friend! If you ever have any other questions or issues, please don't hesitate to create another ticket! You are now a <@&721599216199270400>")
}

module.exports.config = {
    name: "thankyou",
    description: "Thank you command",
    usage: "-thankyou",
    accessableby: "Support Team",
    aliases: []
}