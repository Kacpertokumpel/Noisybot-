module.exports = {
    commands: `ban`,
    callback: async (message, args, text, bot) => {
        if (!message.member.permissions.has(`BAN_MEMBERS`)) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Nie posiadasz uprawnień!\n${emotki.klodka} Wymagane uprawnienia: **Banowanie członków**`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const wzmianka1 = message.mentions.members.first()
            const wzmianka2 = message.mentions.users.first()
            const powod = args.splice(1).join(` `)
            if (!wzmianka1) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`${emotki.nie} Musisz oznaczyć osobę!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
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
                    wzmianka1.ban(`${powod} - Administrator: ${message.author.tag}`).then(() => {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`Sukces!`)
                            .setColor(kolor_embeda)
                            .setDescription(`${emotki.tak} Pomyślnie zbanowano użytkownika **${wzmianka2} (${wzmianka2.tag})**!\n\n${emotki.wykrzyknik} Administrator: **${message.author} (${message.author.tag})**\n\n${emotki.ludzie} Użytkownik: **${wzmianka2} (${wzmianka2.tag})**\n\n${emotki.support} Powód: **${powod}**\n\n${emotki.klodka} Serwer: **${message.guild.name}**`)
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                        wzmianka1.send(embed)
                    }).catch(() => {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`Błąd!`)
                            .setColor(kolor_embeda_bledu)
                            .setDescription(`${emotki.nie} Bot nie posiada uprawnień!`)
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    });
                }
            }
        }
    }
}