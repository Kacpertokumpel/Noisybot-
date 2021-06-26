module.exports = {
    commands: `ascii`,
    callback: async (message, args, text, bot) => {
        const tekst = args.splice(0).join(` `)
        if (!tekst) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Musisz podać tekst!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (tekst.length > `50`) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`${emotki.nie} Długość tekstu nie może przekraczać 50 znaków!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                if (!(tekst.includes(`ł`) || tekst.includes(`ó`) || tekst.includes(`ż`) || tekst.includes(`ź`) || tekst.includes(`ć`) || tekst.includes(`ń`) || tekst.includes(`ą`) || tekst.includes(`ś`) || tekst.includes(`ę`))) {
                    const url = `https://artii.herokuapp.com/make?text=${tekst}`
                    let data, response;
                    try {
                        response = await axios.get(url);
                        data = response.data;
                    } catch (e) { }
                    message.channel.send(`\`\`\`js\n\n${data}\`\`\``)
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
}