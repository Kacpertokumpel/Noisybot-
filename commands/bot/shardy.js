module.exports = {
    commands: `shardy`,
    callback: async (message, args, text, bot,) => {
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
            .setTitle(`Shardy - ${bot.user.username}`)
            .setColor(kolor_embeda)
            .setDescription(`Ten serwer działa na shardzie o id **0**, korzysta z niego **${bot.guilds.cache.size}** serwerów!`)
            .addField(`:diamond_shape_with_a_dot_inside: Shard id **0**:`, `• :ping_pong: Ping: **${bot.ws.ping}ms**\n • ${emotki.pamiecram} Użycie ramu: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB**\n • :file_cabinet: Serwery: **${bot.guilds.cache.size}**\n • ${emotki.uptime} Uptime: **${botuptime}**`, true)
            .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }))
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}