module.exports = {
    commands: `komentarz`,
    callback: async (message, args, text, bot) => {
        const tresc = args.splice(0).join(`%20`)
        if (!tresc) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Musisz podać treść komentarza!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const nazwauzytkownika1 = message.author.username
            const nazwauzytkownika2 = nazwauzytkownika1.replace(/\ /gi, `%20`)
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Komentarz!`)
                .setColor(kolor_embeda)
                .setImage(`https://some-random-api.ml/canvas/youtube-comment?avatar=${message.author.displayAvatarURL({ dynamic: true })}&comment=${tresc}&username=${nazwauzytkownika2}`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}