global.Discord = require(`discord.js`)
global.client = new Discord.Client({ ws: { properties: { $browser: `Discord iOS` } } })
require(`events`).EventEmitter.defaultMaxListeners = Infinity;
global.config = require(`./config.json`)
global.prefix = `$`
global.kolor_embeda = `#249cf8`
global.kolor_embeda_bledu = `#ff0000`
global.package = require(`./package.json`)
global.emotki = require(`./emotki.json`)
global.axios = require(`axios`)
global.fs = require(`fs`)
global.path = require(`path`)
global.jsonWriter = require(`fs-json-writer`)
global.ytdl = require(`ytdl-core`)

client.on(`ready`, async () => {
    console.log(`🤖 ┇ Bot wystartował!`)
    console.log(`🤖 ┇ Tag: ${client.user.tag}`)
    console.log(`🤖 ┇ Prefix: ${prefix}`)
    console.log(`🤖 ┇ Kolor embeda: ${kolor_embeda}`)
    console.log(`🤖 ┇ Kolor embeda błędu: ${kolor_embeda_bledu}`)
    console.log(`🤖 ┇ Serwery: ${client.guilds.cache.size}`)

    const baseFile = `command-base.js`
    const commandBase = require(`./commands/${baseFile}`)

    const readCommands = (dir) => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
            }
        }
    }

    setInterval(function () {
        client.user.setPresence({ activity: { type: 3, name: `${client.user.username}.xyz` } })
        const serwerdev = client.guilds.cache.get(`767092790903177237`)
        var kanal = serwerdev.channels.cache.get(`814064059439120454`)
        kanal.setName(`👦・Tyle nas jest: ${serwerdev.members.cache.size - 6}`)
        var kanal = serwerdev.channels.cache.get(`814064061624090654`)
        kanal.setName(`💾・Serwery: ${client.guilds.cache.size}`)
        var embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Status bota i strony`)
            .setColor(kolor_embeda)
            .setDescription(`**${emotki.logobota}┇Bot**\n• Bot:\n└ Status: Online ${emotki.online}\n• Baza danych:\n└ Status: Online ${emotki.online}\n\n**:globe_with_meridians:┇Strona**\n• Główna:\n└ Status: Online ${emotki.online}\n• Panel:\n└ Status: Offline ${emotki.offline}`)
            .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
            .setFooter(`${client.user.tag} (${client.user.id})`, client.user.displayAvatarURL({ dynamic: true }))
        var kanal = serwerdev.channels.cache.get(`825737024521633792`)
        kanal.messages.fetch(`827249520952737793`).then((wiadomosc1) => wiadomosc1.edit(embed))
    }, 12000)

    readCommands(`commands`)
})

client.on(`guildMemberAdd`, async member => {
    if (!member.guild.id === `767092790903177237`) return
    else {
        var kanal = member.guild.channels.cache.find(ch => ch.id === `814064060558737408`)
        if (!kanal) return
        var embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Witamy!`)
            .setColor(kolor_embeda)
            .setDescription(`Witaj ${member.user} na **${member.guild.name}**! Nie zapomnij zaakceptować regulaminu! Baw się dobrze!`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setImage(`https://niesamowitybot.xyz/img/Late%20night.png`)
            .setFooter(`${member.user.tag} (${member.user.id})`, member.user.displayAvatarURL({ dynamic: true }))
        kanal.send(embed)
    }
})

client.on(`guildMemberRemove`, async member => {
    if (!member.guild.id === `767092790903177237`) return
    else {
        var kanal = member.guild.channels.cache.find(ch => ch.id === `814064060558737408`)
        if (!kanal) return
        var embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Żegnamy!`)
            .setColor(kolor_embeda_bledu)
            .setDescription(`Żegnamy ${member.user}! Mamy nadzieję, że kiedyś do nas wrócisz...`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setImage(`https://niesamowitybot.xyz/img/Late%20night.png`)
            .setFooter(`${member.user.tag} (${member.user.id})`, member.user.displayAvatarURL({ dynamic: true }))
        kanal.send(embed)
    }
})

client.on(`guildCreate`, async guild => {
    if ((guild.id === `769473098205364224`) || (guild.id === `703156079890268180`) || (guild.id === `828978556318122025`)) return guild.leave()
    var kanal = guild.channels.cache.find(channel => channel.type === 'text')
    var embed = new Discord.MessageEmbed()
    embed
        .setTitle(`Hejka!`)
        .setColor(kolor_embeda)
        .setDescription(`**Hejka! Jestem ${client.user.username}, wielofunkcyjnym botem do discorda! Zaufało mi aż ${client.guilds.cache.size} serwerów! Dzięki, że dodałeś mnie na serwer! Komendy znajdziesz po wpisaniu __${prefix}pomoc__! To tyle miłego użytkowania!**`)
        .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
        .setFooter(`${client.user.tag} (${client.user.id})`, client.user.displayAvatarURL({ dynamic: true }))
    kanal.send(embed).catch(() => { return })
    const serwerdev = client.guilds.cache.get(`767092790903177237`)
    var kanal = serwerdev.channels.cache.get(`831944952208556074`)
    var embed = new Discord.MessageEmbed()
    embed
        .setTitle(`${emotki.wykrzyknik} Dodano mnie na serwer!`)
        .setColor(kolor_embeda)
        .setDescription(`Dodano mnie na serwer **${guild.name}** o id **${guild.id}**, którego właścicielem jest **${guild.owner.user} (${guild.owner.user.tag})** o id **${guild.owner.user.id}**`)
        .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .setFooter(`${client.user.tag} (${client.user.id})`, client.user.displayAvatarURL({ dynamic: true }))
    kanal.send(embed)
})

client.on(`guildDelete`, async guild => {
    const serwerdev = client.guilds.cache.get(`767092790903177237`)
    const kanal = serwerdev.channels.cache.get(`831944952208556074`)
    const embed = new Discord.MessageEmbed()
    embed
        .setTitle(`${emotki.wykrzyknik} Usunięto mnie z serwera!`)
        .setColor(kolor_embeda)
        .setDescription(`Usunięto mnie z serwera **${guild.name}** o id **${guild.id}**, którego właścicielem jest **${guild.owner.user} (${guild.owner.user.tag})** o id **${guild.owner.user.id}**`)
        .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .setFooter(`${client.user.tag} (${client.user.id})`, client.user.displayAvatarURL({ dynamic: true }))
    kanal.send(embed)
})

client.on(`message`, message => {
    if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
        if (message.author.bot) return
        const dbmembersfiles = fs.readdirSync(`db/members`).join(`, `).replace(/\.json/gi, ``)
        if (dbmembersfiles.includes(message.author.id)) {
            const dbmembers = require(`./db/members/${message.author.id}.json`)
            const gbancheck = dbmembers.gbancheck || `Nie!`
            const gbanreason = dbmembers.gbanreason || `Nie dotyczy!`
            const gbanexpire = dbmembers.gbanexpire || `Nie dotyczy!`
            if (gbancheck === `Tak!`) {
                var embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`${emotki.nie} Jesteś globalnie zbanowany/a!\n\n:id: Twoje id: **${message.author.id}**\n${emotki.support} Powód: **${gbanreason}**\n${emotki.zegarek} Wygasa: **${gbanexpire}**`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                let totalSeconds = (client.uptime / 1000);
                let days = Math.floor(totalSeconds / 86400);
                totalSeconds %= 86400;
                let hours = Math.floor(totalSeconds / 3600);
                totalSeconds %= 3600;
                let minutes = Math.floor(totalSeconds / 60);
                let seconds = Math.floor(totalSeconds % 60);
                let botuptime = (days > 0 ? days + `d, ` : ``) + (hours > 0 ? hours + `h, ` : ``) + (minutes > 0 ? minutes + `m, ` : ``) + (seconds > 0 ? seconds + `s` : ``)
                const embed = new Discord.MessageEmbed()
                embed
                    .setColor(kolor_embeda)
                    .setDescription(`**Hejka! Jestem ${client.user.username}, wielofunkcyjnym botem do discorda! Zaufało mi aż ${client.guilds.cache.size} serwerów! Komendy znajdziesz po wpisaniu __${prefix}pomoc__! Będziemy się świetnie bawić!**\n\n> ${emotki.korona}  Moim właścicielem jest **<@535375983411462154> (Patryczekk TV#4266)**\n\n> :mega: Odpisałem na swoje [@wspomnienie](https://${client.user.username}.xyz) w ciągu ${client.ws.ping}ms\n\n> ${emotki.support} Mój uptime to **${botuptime}**\n\n> :diamond_shape_with_a_dot_inside: Shard: **[\`0\`/\`0\`]**\n\n> :link: Linki: **[Zaproszenie bota](https://${client.user.username}.xyz/zapros)┇[${client.user.username}.xyz](https://${client.user.username}.xyz)┇[Serwer bota](https://${client.user.username}.xyz/dc)┇[Donate na opłatę maszyny](https://${client.user.username}.xyz/wesprzyj)**\n\nZostań jednym z użytkowników **NiesamowitegoBOTA**, **dodaj go** już **dziś**!`)
                    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
        else {
            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            let botuptime = (days > 0 ? days + `d, ` : ``) + (hours > 0 ? hours + `h, ` : ``) + (minutes > 0 ? minutes + `m, ` : ``) + (seconds > 0 ? seconds + `s` : ``)
            const embed = new Discord.MessageEmbed()
            embed
                .setColor(kolor_embeda)
                .setDescription(`**Hejka! Jestem ${client.user.username}, wielofunkcyjnym botem do discorda! Zaufało mi aż ${client.guilds.cache.size} serwerów! Komendy znajdziesz po wpisaniu __${prefix}pomoc__! Będziemy się świetnie bawić!**\n\n> ${emotki.korona}  Moim właścicielem jest **<@535375983411462154> (Patryczekk TV#4266)**\n\n> :mega: Odpisałem na swoje [@wspomnienie](https://${client.user.username}.xyz) w ciągu ${client.ws.ping}ms\n\n> ${emotki.support} Mój uptime to **${botuptime}**\n\n> :diamond_shape_with_a_dot_inside: Shard: **[\`0\`/\`0\`]**\n\n> :link: Linki: **[Zaproszenie bota](https://${client.user.username}.xyz/zapros)┇[${client.user.username}.xyz](https://${client.user.username}.xyz)┇[Serwer bota](https://${client.user.username}.xyz/dc)┇[Donate na opłatę maszyny](https://${client.user.username}.xyz/wesprzyj)**\n\nZostań jednym z użytkowników **NiesamowitegoBOTA**, **dodaj go** już **dziś**!`)
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
})

client.login(config.token)