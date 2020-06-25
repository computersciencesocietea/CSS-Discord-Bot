const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('WELCOME!')
        .setDescription('You have reached the lair of UST-L Discord in here you can chat, share ideas, school projects, answers, code, read latest announcements, **ENJOY :)**')
        .setColor('BLACK')
        .setThumbnail('https://i.imgur.com/4Z1QAQH.png')
        .setImage('https://i.imgur.com/kTPstfi.png')
        .setTimestamp()
    message.channel.send(embed);
}

module.exports.config = {
    name: "embed",
    description: "Welcome Embed.",
    usage: ".embed",
    accessableby: "plebs",
    aliases: []
}
