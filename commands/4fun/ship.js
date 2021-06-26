module.exports = {
    commands: `ship`,
    callback: async (message, args, text, bot) => {
        const [pierwszy, drugi] = message.mentions.users.keyArray();
        if (!pierwszy || !drugi) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Musisz oznaczyć dwie różne osoby!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const liczba = Math.floor(Math.random() * 99) + 1
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Ship!`)
                .setColor(kolor_embeda)
                .setDescription(`<@${pierwszy}> + <@${drugi}> = **${liczba}%**`)
                .setThumbnail(`https://i.gifer.com/72gp.gif`)
                .setImage(`https://braslerl-api.herokuapp.com/progressbar?number=${liczba}&back_color=000000&front_color=137fd1`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}