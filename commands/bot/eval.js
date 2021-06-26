module.exports = {
    commands: `eval`,
    callback: async (message, args, text, bot) => {
        const dbmembersfiles = fs.readdirSync(`db/members`).join(`, `).replace(/\.json/gi, ``)
        if (dbmembersfiles.includes(message.author.id)) {
            const dbmembers = require(`../../db/members/${message.author.id}.json`)
            const permisje_globalne = dbmembers.permisje_globalne || `Brak`
            if (!permisje_globalne.includes(`Administracja bota`)) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`${emotki.nie} Nie posiadasz uprawnień globalnych!\n${emotki.klodka} Wymagane uprawnienia globalne: **Administracja bota**`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                if (!args[0]) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`${emotki.nie} Musisz podać kod!`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    const code = args.join(` `);
                    if (!(code.includes(`token`) || code.includes(`TOKEN`))) {
                        try {
                            const evaled = await eval(code)
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`Sukces!`)
                                .setColor(kolor_embeda)
                                .setDescription(`${emotki.tak} Pomyślnie wykonano kod!\n:inbox_tray: Kod wejściowy: **${code}**\n:outbox_tray: Kod wyjściowy: **${evaled}**`)
                                .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        } catch (e) {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`Błąd!`)
                                .setColor(kolor_embeda_bledu)
                                .setDescription(`${emotki.nie} Wystąpił błąd podczas wykonywania kodu!\n:inbox_tray: Kod wejściowy: **${code}**\n:outbox_tray: Kod wyjściowy: **${e}**`)
                                .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                    }
                    else {
                        var embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`Błąd!`)
                            .setColor(kolor_embeda_bledu)
                            .setDescription(`:shield: Wykryto próbę naruszenia bezpieczeństwa bota!\nOperacja: **Próba wyświetlenia tokenu bota**\nWynik: **Zablokowanie operacji oraz wysłanie zgłoszenia na [serwer developerski](https://${bot.user.username}.xyz/dc)!**`)
                            .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                        const serwerdev = bot.guilds.cache.get(`767092790903177237`)
                        const kanal = serwerdev.channels.cache.get(`814064081778638869`)
                        var embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.swiatelko} Nowe zgłoszenie! ${emotki.swiatelko}`)
                            .setColor(kolor_embeda)
                            .setDescription(`Osoba zgłaszająca: **${bot.user} (${bot.user.tag})**\nOsoba zgłoszona: **${message.author} (${message.author.tag})**\nPowód zgłoszenia: **Próba wyświetlenia tokenu bota**`)
                            .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        kanal.send(embed)
                    }
                }
            }
        }
        else {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Nie posiadasz uprawnień globalnych!\n${emotki.klodka} Wymagane uprawnienia globalne: **Administracja bota**`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}