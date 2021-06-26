module.exports = {
    commands: `mazjapoleca`,
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Mazja poleca!`)
            .setColor(kolor_embeda)
            .setImage(`https://${bot.user.username}.xyz/img/Liptonek.png`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}