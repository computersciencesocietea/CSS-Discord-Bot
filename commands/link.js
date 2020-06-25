const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Useful Links')
       .addFields({ name: '**Discord**', value: '<:discord:724631160680087604> https://discord.gg/BjqKq4X', inline: false})
        .addFields({ name: '**Github**', value: '<:github:724631379295600670>https://github.com/orgs/computersciencesocietea', inline: true})
        .setColor('ORANGE')
        message.channel.send(embed);
}

module.exports.config = {
    name: "link",
    description: "media-links",
    usage: ".link",
    accessableby: "plebs",
    aliases: []
}
