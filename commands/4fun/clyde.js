module.exports = {
    commands: `clyde`,
    callback: async (message, args, text, bot) => {
        const wiadomosc = args.splice(0).join(`%20`)
        if (!wiadomosc) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Musisz podać wiadomość!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (!(wiadomosc.includes(`ł`) || wiadomosc.includes(`ó`) || wiadomosc.includes(`ż`) || wiadomosc.includes(`ź`) || wiadomosc.includes(`ć`) || wiadomosc.includes(`ń`) || wiadomosc.includes(`ą`) || wiadomosc.includes(`ś`) || wiadomosc.includes(`ę`))) {
                const url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${wiadomosc}`
                let data, response;
                try {
                    response = await axios.get(url);
                    data = response.data;
                } catch (e) { }
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Clyde!`)
                    .setColor(kolor_embeda)
                    .setImage(data.message)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`${emotki.nie} Wiadomość nie może zawierać polskich znaków!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
    }
}