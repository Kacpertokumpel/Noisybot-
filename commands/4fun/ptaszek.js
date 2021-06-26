module.exports = {
    commands: `ptaszek`,
    callback: async (message, args, text, bot) => {
        const url = `https://some-random-api.ml/img/birb`
        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) { }

        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Ptaszek!`)
            .setColor(kolor_embeda)
            .setDescription(`Oto ptaszek dla Ciebie!`)
            .setImage(data.link)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}