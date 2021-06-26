module.exports = {
    commands: `generujzaproszeniedlabota`,
    callback: async (message, args, text, bot) => {
        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Musisz podać id bota!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Sukces!`)
                .setColor(kolor_embeda)
                .setDescription(`${emotki.tak} Pomyślnie wygenerowano link zaproszenia dla bota!\n:link: Link: [[kliknij]](https://discord.com/oauth2/authorize?client_id=${args[0]}&scope=bot&permissions=8)`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}