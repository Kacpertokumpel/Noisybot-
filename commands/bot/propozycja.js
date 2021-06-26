module.exports = {
    commands: `propozycja`,
    callback: async (message, args, text, bot) => {
        const tresc = args.splice(0).join(` `)
        if (!tresc) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Musisz podać treść!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            var embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Sukces!`)
                .setColor(kolor_embeda)
                .setDescription(`${emotki.tak} Pomyślnie wysłano propozycję na [serwer bota](https://${bot.user.username}.xyz/dc)!`)
                .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
            const serwerdev = bot.guilds.cache.get(`767092790903177237`)
            const kanal = serwerdev.channels.cache.get(`814064083266568272`)
            var embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.wykrzyknik} Nowa propozycja!`)
                .setColor(kolor_embeda)
                .setDescription(`Osoba proponująca: **${message.author} (${message.author.tag})**\nTreść propozycji: **${tresc}**`)
                .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            kanal.send(embed)
        }
    }
}