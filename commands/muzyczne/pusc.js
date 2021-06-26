module.exports = {
    commands: `pusc`,
    callback: async (message, args, text, bot) => {
        if (!message.author.id.includes(`535375983411462154`)) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Nie posiadasz bota w wersji premium!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const fraza = args[0]
            const url = `https://www.googleapis.com/youtube/v3/search?maxResults=1&part=snippet&q=${fraza}&key=AIzaSyBoYlZ9ixPGiD3L-4y_tFVQPWqjfydEAcA`
            let data, response;
            try {
                response = await axios.get(url);
                data = response.data;
            } catch (e) { }
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Sukces!`)
                .setColor(kolor_embeda)
                .setDescription(`${emotki.tak} Puszczam __\`${data.items[0].snippet.title}\`__`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
            const connection = await message.member.voice.channel.join();
            connection.play(ytdl(`https://www.youtube.com/watch?v=${data.items[0].id.videoId}`, { filter: 'audioonly' }));
        }
    }
}