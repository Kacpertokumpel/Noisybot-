module.exports = {
    commands: `restart`,
    callback: async (message, args, text, bot,) => {
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
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Sukces!`)
                    .setColor(kolor_embeda)
                    .setDescription(`Restartuję!`)
                    .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed).then(() => bot.destroy()).then(() => bot.login(config.token))
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