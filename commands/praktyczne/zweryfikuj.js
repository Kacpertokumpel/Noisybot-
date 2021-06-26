module.exports = {
    commands: `zweryfikuj`,
    callback: async (message, args, text, bot) => {
        if (!message.guild.id === `767092790903177237`) return message.delete()
        else {
            if (!message.channel.id === `814066829949009940`) return message.delete()
            else {
                if (message.member.roles.cache.some(r => r.id === `814063974580092969`)) return message.delete()
                else {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Sukces!`)
                        .setColor(kolor_embeda)
                        .setDescription(`${emotki.tak} Pomyślnie zostałeś/aś zweryfikowany/a!`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                    message.member.roles.add([`814063974580092969`], `Weryfikacja`)
                    message.member.send(embed).catch(() => { return })
                }
            }
        }
    }
}