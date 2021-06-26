module.exports = {
    commands: `wasted`,
    callback: async (message, args, text, bot) => {
        const wzmianka = message.mentions.users.first()
        if (!wzmianka) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Musisz oznaczyć osobę!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Wasted!`)
            .setColor(kolor_embeda)
            .setImage(`https://some-random-api.ml/canvas/wasted/?avatar=${wzmianka.displayAvatarURL({ dynamic: true })}`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
        }
    }
}