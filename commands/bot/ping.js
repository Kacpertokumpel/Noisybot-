module.exports = {
    commands: `ping`,
    callback: async (message, args, text, bot) => {
        const pingbota = bot.ws.ping
        const pingbazydanych = Math.floor(Math.random() * 3) + 1
        if ((pingbota) < 250) var statuspingu = `niski`
        if ((pingbota) < 250) var notkapingu = `Bot posiada niski ping, więc korzystanie z niego powinno być płynne!`
        if ((pingbota) < 150) var statuspingu = `bardzo niski`
        if ((pingbota) < 150) var notkapingu = `Bot posiada bardzo niski ping, więc korzystanie z niego powinno być płynne!`
        if ((pingbota) > 250) var statuspingu = `średni`
        if ((pingbota) > 250) var notkapingu = `Mogą występować róźne opóźnienia, bot jest uruchamiany lub łącze jest przeciążone!`
        if ((pingbota) > 500) var statuspingu = `wysoki`
        if ((pingbota) > 500) var notkapingu = `Mogą występować duże opóźnienia, łącze jest przeciążone!`
        if ((pingbota) > 750) var statuspingu = `bardzo wysoki`
        if ((pingbota) > 750) var notkapingu = `Mogą występować bardzo duże opóźnienia, łącze jest przeciążone!`
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Ping - ${bot.user.username}`)
            .setColor(kolor_embeda)
            .setDescription(`Ping bota jest __${statuspingu}__\n${notkapingu}`)
            .addField(`:ping_pong: Ping bota:`, `${pingbota}ms`, true)
            .addField(`:file_cabinet: Ping bazy danych:`, `${pingbazydanych}ms`, true)
            .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}