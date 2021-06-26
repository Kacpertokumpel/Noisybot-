module.exports = {
    commands: [`zapros`, `invite`, `linki`],
    callback: async (message, args, text, bot,) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Zaproszenie i inne linki bota`)
            .setColor(kolor_embeda)
            .setDescription(`${emotki.logobota} ${bot.user.username}: **[Kliknij by dodać bota!](https://${bot.user.username}.xyz/zapros)**\n\n${emotki.kursor} Strona bota: **[Kliknij by przejść na stronę bota!](https://${bot.user.username}.xyz)**\n\n${emotki.discord} Serwer bota: **[Kliknij by przejść na serwer bota!](https://${bot.user.username}.xyz/dc)**`)
            .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}