module.exports = {
    commands: `zglos`,
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
            const powod = args.splice(1).join(` `)
            if (!powod) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`${emotki.nie} Musisz podać powód!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                var embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Sukces!`)
                    .setColor(kolor_embeda)
                    .setDescription(`${emotki.tak} Pomyślnie wysłano zgłoszenie na [serwer bota](https://${bot.user.username}.xyz/dc)!`)
                    .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
                const serwerdev = bot.guilds.cache.get(`767092790903177237`)
                const kanal = serwerdev.channels.cache.get(`814064081778638869`)
                var embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.wykrzyknik} Nowe zgłoszenie!`)
                    .setColor(kolor_embeda)
                    .setDescription(`Osoba zgłaszająca: **${message.author} (${message.author.tag})**\nOsoba zgłoszona: **${wzmianka} (${wzmianka.tag})**\nPowód zgłoszenia: **${powod}**`)
                    .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                kanal.send(embed)
            }
        }
    }
}