module.exports = {
    commands: `prefix`,
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Prefix - ${bot.user.username}`)
            .setColor(kolor_embeda)
            .setDescription(`Mój prefix to **${prefix}**\n\n__*Tajne info: Niedługo będzie można go zmieniać na każdym serwerze!*__`)
            .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}