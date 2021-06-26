module.exports = {
    commands: `smietnik`,
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
            const nazwauzytkownika1 = wzmianka.username
            const nazwauzytkownika2 = nazwauzytkownika1.replace(/\ /gi, `%20`)
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Śmietnik!`)
                .setColor(kolor_embeda)
                .setDescription(`${wzmianka} w śmietniku`)
                .setImage(`https://braslerl-api.herokuapp.com/trash?name=${nazwauzytkownika2}`)
            embed.setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}