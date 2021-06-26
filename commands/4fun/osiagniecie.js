module.exports = {
    commands: `osiagniecie`,
    callback: async (message, args, text, bot) => {
        const nazwa = args.splice(0).join(`%20`)
        if (!nazwa) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Musisz podać nazwę osiągnięcia!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const numer = Math.floor(Math.random() * 37) + 1
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Osiągnięcie!`)
                .setColor(kolor_embeda)
                .setImage(`https://www.minecraftskinstealer.com/achievement/a.php?i=${numer}&h=Zdobyto+osiagniecie!&t=${nazwa}`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}