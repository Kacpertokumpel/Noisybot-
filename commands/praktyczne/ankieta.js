module.exports = {
    commands: `ankieta`,
    callback: async (message, args, text, bot,) => {
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
                    .setDescription(`${emotki.nie} Musisz podać treść!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                message.delete()
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Ankieta!`)
                    .setColor(kolor_embeda)
                    .setDescription(args.splice(0).join(` `))
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
                    .then(function (message) {
                        message.react(`:tak:814785186151137340`).then(function () {
                            message.react(`:nie:814784950049177620`)
                        });
                    });
            }
        }
    }
}