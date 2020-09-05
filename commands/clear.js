  
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message) => {
            
    const messageArray = message.content.split(' ');
	const args = messageArray.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
    
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }

    if (parseInt(args[0]) > 100) {
        return message.reply('You can only delete 1000 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    await message.channel.send(`**Successfully** Deleted ***${deleteAmount}*** Messages.`).then(m => m.delete({timeout: 5000}))

}

module.exports.config = {
    name: "clear",
    description: "clears message",
    usage: "?clear",
    accessableby: "Members",
    aliases: ['c', 'purge']
}