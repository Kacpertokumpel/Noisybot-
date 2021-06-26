const forfun_ilosc = fs.readdirSync(`commands/4fun`).length
const forfun_lista = fs.readdirSync(`commands/4fun`).join(` \``).replace(/\.js/gi, `\``)
const administracyjne_ilosc = fs.readdirSync(`commands/administracyjne`).length
const administracyjne_lista = fs.readdirSync(`commands/administracyjne`).join(` \``).replace(/\.js/gi, `\``)
const bot_ilosc = fs.readdirSync(`commands/bot`).length
const bot_lista = fs.readdirSync(`commands/bot`).join(` \``).replace(/\.js/gi, `\``)
const muzyczne_ilosc = fs.readdirSync(`commands/muzyczne`).length
const muzyczne_lista = fs.readdirSync(`commands/muzyczne`).join(` \``).replace(/\.js/gi, `\``)
const praktyczne_ilosc = fs.readdirSync(`commands/praktyczne`).length
const praktyczne_lista = fs.readdirSync(`commands/praktyczne`).join(` \``).replace(/\.js/gi, `\``)
const profil_ilosc = fs.readdirSync(`commands/profil`).length
const profil_lista = fs.readdirSync(`commands/profil`).join(` \``).replace(/\.js/gi, `\``)
const wszystko_ilosc = forfun_ilosc + administracyjne_ilosc + bot_ilosc + muzyczne_ilosc + praktyczne_ilosc + profil_ilosc

module.exports = {
    commands: [`pomoc`, `help`, `komendy`],
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Pomoc - ${bot.user.username}`)
            .setColor(kolor_embeda)
            .setDescription(`**Hejka! To ja ${bot.user.username}! Chciałbym pomóc Ci w rozwijaniu twojego serwera! Aktualnie posiadam ${wszystko_ilosc} komend, które można dostrzec poniżej! To jak zaczynamy przygodę?**\n\n**${emotki.wykrzyknik}┇Administracyjne (${administracyjne_ilosc})**\n\`${administracyjne_lista}\n\n**${emotki.logobota}┇Bot (${bot_ilosc})**\n\`${bot_lista}\n\n**:notes:┇Muzyczne (${muzyczne_ilosc}) (Premium)**\n\`${muzyczne_lista}\n\n**:joy:┇4Fun (${forfun_ilosc})**\n\`${forfun_lista}\n\n**${emotki.discord}┇Praktyczne (${praktyczne_ilosc})**\n\`${praktyczne_lista}\n\n**${emotki.ludzie}┇Profil (${profil_ilosc})**\n\`${profil_lista}`)
            .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}