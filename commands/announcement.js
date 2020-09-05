const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES","ADMINISTRATOR")) return message.channel.send('Lack of Perms! You Cannot Use this command!');
    let argsresult
    let mChannel=message.mentions.channels.first()
    if(mChannel){
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
}

module.exports.config = {
    name: "announcement",
    description: "gives paypal for paragon plat",
    usage: "-announce",
    accessableby: "Support Team",
    aliases: ['announcement']
}