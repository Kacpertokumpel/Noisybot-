module.exports = {
    commands: `gunban`,
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
                        .setDescription(`${emotki.nie} Musisz podać id osoby!`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    const id = args[0]
                    const myHumanJson = {
                    };

                    jsonWriter({
                        path: path.join(__dirname, `../../db/members/${id}.json`),
                        state: myHumanJson
                    });

                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Sukces!`)
                        .setColor(kolor_embeda)
                        .setDescription(`${emotki.tak} Pomyślnie globalnie odbanowano użytkownika o id **${id}**!\n\nAdministrator: **${message.author} (${message.author.tag})**\n\nID użytkownika: **${id}**`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
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