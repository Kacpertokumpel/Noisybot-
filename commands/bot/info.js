module.exports = {
    commands: [`info`, `botinfo`, `bot`],
    callback: async (message, args, text, bot,) => {
        const wersjadiscordjs = package.dependencies[`discord.js`].replace(/\^/gi, `v`)
        const doweryfikacji = 75 - bot.guilds.cache.size
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let botuptime = (days > 0 ? days + `d, ` : ``) + (hours > 0 ? hours + `h, ` : ``) + (minutes > 0 ? minutes + `m, ` : ``) + (seconds > 0 ? seconds + `s` : ``)
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Info - ${bot.user.username}`)
            .setColor(kolor_embeda)
            .setDescription(`Ten serwer działa na shardzie o id **0**, korzysta z niego **${bot.guilds.cache.size}** serwerów!\nAby uzyskać więcej informacji o shardach wpisz **${prefix}shardy**`)
            .addField(`${emotki.pamiecram} Użycie ramu:`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB/1.5GB`, true)
            .addField(`${emotki.uptime} Uptime:`, `${botuptime}`, true)
            .addField(`:file_cabinet: Serwery:`, `${bot.guilds.cache.size}/75 (brakuje ${doweryfikacji})`, true)
            .addField(`${emotki.ludzie} Użytkownicy:`, `${bot.users.cache.size}`, true)
            .addField(`:file_folder: Kanały:`, `${bot.channels.cache.size}`, true)
            .addField(`${emotki.nodejs} Wersja node.js:`, `v${process.versions.node}`, true)
            .addField(`${emotki.discordjs} Wersja discord.js:`, `${wersjadiscordjs}`, true)
            .addField(`:diamond_shape_with_a_dot_inside: Shardy:`, `1`, true)
            .addField(`:ping_pong: Ping bota:`, `${bot.ws.ping}ms`, true)
            .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}