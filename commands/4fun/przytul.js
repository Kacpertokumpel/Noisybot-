module.exports = {
    commands: `przytul`,
    callback: async (message, args, text, bot) => {
        const wzmianka = message.mentions.users.first()
        if (!wzmianka) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Musisz oznaczyć osobę!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (!(wzmianka.id === message.author.id)) {
                const url = `https://some-random-api.ml/animu/hug`
                let data, response;
                try {
                    response = await axios.get(url);
                    data = response.data;
                } catch (e) { }

                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Przytulas!`)
                    .setColor(kolor_embeda)
                    .setDescription(`${message.author} przytulił ${wzmianka} :)`)
                    .setImage(data.link)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Serio?!`)
                    .setColor(kolor_embeda)
                    .setDescription(`Serio chcesz przytulić sam siebie?!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
    }
}