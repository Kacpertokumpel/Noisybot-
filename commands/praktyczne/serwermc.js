module.exports = {
    commands: `serwermc`,
    callback: async (message, args, text, bot) => {
        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Musisz podać hostname serwera!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const url = `https://api.minetools.eu/ping/${args[0]}`
            let data, response;
            try {
                response = await axios.get(url);
                data = response.data;
            } catch (e) { }
            if (!(data.description)) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`${emotki.nie} Podany hostname jest nieprawidłowy!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Informacje o serwerze ${args[0]}`)
                    .setColor(kolor_embeda)
                    .setDescription(`Motd: **${data.description}**\n\nWersja: **${data.version.name}**\n\nOnline: **${data.players.online}/${data.players.max}**\n\nHostname: **${args[0]}**`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
    }
}