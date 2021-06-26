module.exports = {
    commands: `czysc`,
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
                    .setDescription(`${emotki.nie} Musisz podać ilość!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                if (Number.isNaN(+args[0])) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`${emotki.nie} Podana ilość jest nieprawidłowa!`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    if ((args[0]) > 100) {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`Błąd!`)
                            .setColor(kolor_embeda_bledu)
                            .setDescription(`${emotki.nie} Ilość nie może przekraczać 100!`)
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                    else {
                        message.channel.bulkDelete(args[0], `Czyszczenie wiadomości - Administrator: ${message.author.tag}`).then(() => {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`Sukces!`)
                                .setColor(kolor_embeda)
                                .setDescription(`${emotki.tak} Pomyślnie usunięto **${args[0]}** wiadomości!`)
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                            return
                        }).catch(() => {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`Błąd!`)
                                .setColor(kolor_embeda_bledu)
                                .setDescription(`${emotki.nie} Bot nie może usuwać wiadomości starszych niż 14 dni!`)
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        });
                    }
                }
            }
        }
    }
}