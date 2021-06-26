module.exports = {
    commands: [`newsy`, `news`],
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Newsy - ${bot.user.username}`)
            .setColor(kolor_embeda)
            .addField(`:date: Data aktualizacji:`, `19.04.2021`, true)
            .addField(`${emotki.pobieranie} Numer aktualizacji:`, `34`, true)
            .addField(`${emotki.developer} Dodano przez:`, `<@535375983411462154> (Patryczekk TV#4266)`)
            .addField(`${emotki.support} Aktualności:`, `${emotki.tak} Dodano komendę **${prefix}ogloszenie**`, true)
            .addField(`${emotki.swiatelko} Globalne ogłoszenia:`, `\`Brak\``, true)
            .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}