module.exports = {
    commands: `pkn`,
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`PKN - Papier Kamień Nożyce!`)
            .setColor(kolor_embeda)
            .setDescription(`Zareaguj, aby zagrać!`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        const msg = await message.channel.send(embed)
        await msg.react(`🗻`)
        await msg.react(`✂`)
        await msg.react(`📰`)

        const filter = (reaction, user) => {
            return [`🗻`, `✂`, `📰`].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = [`🗻`, `✂`, `📰`]
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, { max: 1, time: 10000, error: [`time`] }).then(
            async (collected) => {
                const reaction = collected.first()

                if ((me === `🗻` && reaction.emoji.name === `✂`) ||
                    (me === `✂` && reaction.emoji.name === `📰`) ||
                    (me === `📰` && reaction.emoji.name === `🗻`)) {
                    const result = new Discord.MessageEmbed()
                        .setTitle(`PKN - Papier Kamień Nożyce!`)
                        .setColor(kolor_embeda)
                        .setDescription(`${emotki.nie} Przegrałeś!`)
                        .addField(`Twój wybór:`, `${reaction.emoji.name}`)
                        .addField(`Wybór bota:`, `${me}`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        msg.reactions.removeAll()
                    await msg.edit(result)
                } else if (me === reaction.emoji.name) {
                    const result = new Discord.MessageEmbed()
                        .setTitle(`PKN - Papier Kamień Nożyce!`)
                        .setColor(kolor_embeda)
                        .setDescription(`${emotki.nie} Remis!`)
                        .addField(`Twój wybór:`, `${reaction.emoji.name}`)
                        .addField(`Wybór bota:`, `${me}`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        msg.reactions.removeAll()
                    await msg.edit(result)
                } else {
                    const result = new Discord.MessageEmbed()
                        .setTitle(`PKN - Papier Kamień Nożyce!`)
                        .setColor(kolor_embeda)
                        .setDescription(`${emotki.tak} Wygrałeś!`)
                        .addField(`Twój wybór:`, `${reaction.emoji.name}`)
                        .addField(`Wybór bota:`, `${me}`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        msg.reactions.removeAll()
                    await msg.edit(result)
                }
            })
            .catch(collected => {
                const blad = new Discord.MessageEmbed()
                blad
                    .setTitle(`Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`${emotki.nie} Czas na dodanie reakcji minął!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    msg.reactions.removeAll()
                msg.edit(blad)
            })

    }
}