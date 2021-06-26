module.exports = {
    commands: `trybpowolny`,
    callback: async (message, args, text, bot) => {
        if (!message.member.permissions.has(`MANAGE_CHANNELS`)) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Nie posiadasz uprawnień!\n${emotki.klodka} Wymagane uprawnienia: **Zarządzanie kanałami**`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (!args[0]) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`${emotki.nie} Musisz podać czas!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                if (Number.isNaN(+args[0])) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`${emotki.nie} Podany czas jest nieprawidłowy!`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    message.channel.setRateLimitPerUser(args[0], `Zmiana trybu powolnego - Administrator: ${message.author.tag}`).then(() => {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`Sukces!`)
                            .setColor(kolor_embeda)
                            .setDescription(`${emotki.tak} Pomyślnie ustawiono tryb powolny na tym kanale na **${args[0]} sekund/y**!`)
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                        return
                    }).catch((e) => {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`Błąd!`)
                            .setColor(kolor_embeda_bledu)
                            .setDescription(`${emotki.nie} Wystąpił błąd! **${e}**`)
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    });
                }
            }
        }
    }
}