module.exports = {
    commands: `iq`,
    callback: async (message, args, text, bot) => {
        const liczba = Math.floor(Math.random() * 349) + 1
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`IQ!`)
            .setColor(kolor_embeda)
            .setDescription(`${message.author} ma **${liczba}** IQ`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}