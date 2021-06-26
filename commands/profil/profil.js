module.exports = {
    commands: `profil`,
    callback: async (message, args, text, bot) => {
        const wzmianka = message.mentions.users.first()
        const dbmembersfiles = fs.readdirSync(`db/members`).join(`, `).replace(/\.json/gi, ``)
        if (!wzmianka) {
            if (dbmembersfiles.includes(message.author.id)) {
                const dbmembers = require(`../../db/members/${message.author.id}.json`)
                const imie = dbmembers.imie || `Brak`
                const wiek = dbmembers.wiek || `Brak`
                const plec = dbmembers.plec || `Brak`
                const wojewodztwo = dbmembers.wojewodztwo || `Brak`
                const email = dbmembers.email || `Brak`
                const permisje_globalne = dbmembers.permisje_globalne || `Brak`
                const odznaki = dbmembers.odznaki || `Brak`
                const odznakii = odznaki.replace(/@developer/gi, `${emotki.developer}`).replace(/@pepemilosc/gi, `${emotki.pepemilosc}`).replace(/@pepepodniecenie/gi, `${emotki.pepepodniecenie}`).replace(/@logobota/gi, `${emotki.logobota}`).replace(/@lapka/gi, `${emotki.lapka}`).replace(/@discordpartner/gi, `${emotki.discordpartner}`).replace(/@globus/gi, `${emotki.globus}`).replace(/@zegarek/gi, `${emotki.zegarek}`).replace(/@unlajk/gi, `${emotki.unlajk}`).replace(/@trzymajsie/gi, `${emotki.trzymajsie}`).replace(/@serduszko1/gi, `${emotki.serduszko1}`).replace(/@riczbicz/gi, `${emotki.riczbicz}`).replace(/@pyrek/gi, `${emotki.pyrek}`).replace(/@plytka/gi, `${emotki.plytka}`).replace(/@plus1/gi, `${emotki.plus1}`).replace(/@okej/gi, `${emotki.okej}`).replace(/@lajk/gi, `${emotki.lajk}`).replace(/@kociolajk/gi, `${emotki.kociolajk}`).replace(/@klodka/gi, `${emotki.klodka}`).replace(/@jeb/gi, `${emotki.jeb}`).replace(/@haker/gi, `${emotki.haker}`).replace(/@haha/gi, `${emotki.haha}`).replace(/@ban/gi, `${emotki.ban}`).replace(/@obsydianek/gi, `${emotki.obsydianek}`).replace(/@discordjs/gi, `${emotki.discordjs}`).replace(/@nodejs/gi, `${emotki.nodejs}`).replace(/@ludzie/gi, `${emotki.ludzie}`).replace(/@uptime/gi, `${emotki.uptime}`).replace(/@pamiecram/gi, `${emotki.pamiecram}`).replace(/@pobieranie/gi, `${emotki.pobieranie}`).replace(/@squishyrat/gi, `${emotki.squishyrat}`).replace(/@kursor/gi, `${emotki.kursor}`).replace(/@strzalka/gi, `${emotki.strzalka}`).replace(/@korona/gi, `${emotki.korona}`).replace(/@wumpus/gi, `${emotki.wumpus}`).replace(/@tak/gi, `${emotki.tak}`).replace(/@swiatelko/gi, `${emotki.swiatelko}`).replace(/@support/gi, `${emotki.support}`).replace(/@smuteczek/gi, `${emotki.smuteczek}`).replace(/@sloneczko/gi, `${emotki.sloneczko}`).replace(/@serduszko2/gi, `${emotki.serduszko2}`).replace(/@saltko/gi, `${emotki.saltko}`).replace(/@papuzka/gi, `${emotki.papuzka}`).replace(/@online/gi, `${emotki.online}`).replace(/@offline/gi, `${emotki.offline}`).replace(/@nitro/gi, `${emotki.nitro}`).replace(/@nie/gi, `${emotki.nie}`).replace(/@mniam/gi, `${emotki.mniam}`).replace(/@misiaczek/gi, `${emotki.misiaczek}`).replace(/@ludek/gi, `${emotki.ludek}`).replace(/@krysztalki/gi, `${emotki.krysztalki}`).replace(/@kociokekw/gi, `${emotki.kociokekw}`).replace(/@hmm/gi, `${emotki.hmm}`).replace(/@discord/gi, `${emotki.discord}`).replace(/@wykrzyknik/gi, `${emotki.wykrzyknik}`).replace(/@usmieszek/gi, `${emotki.usmieszek}`).replace(/@kotek/gi, `${emotki.kotek}`).replace(/@portalik/gi, `${emotki.portalik}`)
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Profil`)
                    .setColor(kolor_embeda)
                    .setDescription(`:credit_card: Imię: **${imie}**\n\n:shield: Wiek: **${wiek}**\n\n:busts_in_silhouette: Płeć: **${plec}**\n\n${emotki.globus} Województwo: **${wojewodztwo}**\n\n:email: Email: **${email}**\n\n${emotki.globus} Permisje globalne: **${permisje_globalne}**\n\n:medal: Odznaki: **${odznakii}**\n\n:taxi: Discord Tag: **${message.author.tag}**\n\n:id: Discord ID: **${message.author.id}**\n\n:date: Data utworzenia konta: **${message.author.createdAt.toLocaleString('pl-PL', { dateStyle: 'short' })}**`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const myHumanJson = {
                };

                jsonWriter({

                    path: path.join(__dirname, `../../db/members/${message.author.id}.json`),

                    state: myHumanJson
                });
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Sukces!`)
                    .setColor(`${kolor_embeda}`)
                    .setDescription(`Bot pomyślnie dodał twój profil do bazy danych! Wpisz komendę jeszcze raz!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
        else {
            if (dbmembersfiles.includes(wzmianka.id)) {
                const dbmembers = require(`../../db/members/${wzmianka.id}.json`)
                const imie = dbmembers.imie || `Brak`
                const wiek = dbmembers.wiek || `Brak`
                const plec = dbmembers.plec || `Brak`
                const wojewodztwo = dbmembers.wojewodztwo || `Brak`
                const email = dbmembers.email || `Brak`
                const permisje_globalne = dbmembers.permisje_globalne || `Brak`
                const odznaki = dbmembers.odznaki || `Brak`
                const odznakii = odznaki.replace(/@developer/gi, `${emotki.developer}`).replace(/@pepemilosc/gi, `${emotki.pepemilosc}`).replace(/@pepepodniecenie/gi, `${emotki.pepepodniecenie}`).replace(/@logobota/gi, `${emotki.logobota}`).replace(/@lapka/gi, `${emotki.lapka}`).replace(/@discordpartner/gi, `${emotki.discordpartner}`).replace(/@globus/gi, `${emotki.globus}`).replace(/@zegarek/gi, `${emotki.zegarek}`).replace(/@unlajk/gi, `${emotki.unlajk}`).replace(/@trzymajsie/gi, `${emotki.trzymajsie}`).replace(/@serduszko1/gi, `${emotki.serduszko1}`).replace(/@riczbicz/gi, `${emotki.riczbicz}`).replace(/@pyrek/gi, `${emotki.pyrek}`).replace(/@plytka/gi, `${emotki.plytka}`).replace(/@plus1/gi, `${emotki.plus1}`).replace(/@okej/gi, `${emotki.okej}`).replace(/@lajk/gi, `${emotki.lajk}`).replace(/@kociolajk/gi, `${emotki.kociolajk}`).replace(/@klodka/gi, `${emotki.klodka}`).replace(/@jeb/gi, `${emotki.jeb}`).replace(/@haker/gi, `${emotki.haker}`).replace(/@haha/gi, `${emotki.haha}`).replace(/@ban/gi, `${emotki.ban}`).replace(/@obsydianek/gi, `${emotki.obsydianek}`).replace(/@discordjs/gi, `${emotki.discordjs}`).replace(/@nodejs/gi, `${emotki.nodejs}`).replace(/@ludzie/gi, `${emotki.ludzie}`).replace(/@uptime/gi, `${emotki.uptime}`).replace(/@pamiecram/gi, `${emotki.pamiecram}`).replace(/@pobieranie/gi, `${emotki.pobieranie}`).replace(/@squishyrat/gi, `${emotki.squishyrat}`).replace(/@kursor/gi, `${emotki.kursor}`).replace(/@strzalka/gi, `${emotki.strzalka}`).replace(/@korona/gi, `${emotki.korona}`).replace(/@wumpus/gi, `${emotki.wumpus}`).replace(/@tak/gi, `${emotki.tak}`).replace(/@swiatelko/gi, `${emotki.swiatelko}`).replace(/@support/gi, `${emotki.support}`).replace(/@smuteczek/gi, `${emotki.smuteczek}`).replace(/@sloneczko/gi, `${emotki.sloneczko}`).replace(/@serduszko2/gi, `${emotki.serduszko2}`).replace(/@saltko/gi, `${emotki.saltko}`).replace(/@papuzka/gi, `${emotki.papuzka}`).replace(/@online/gi, `${emotki.online}`).replace(/@offline/gi, `${emotki.offline}`).replace(/@nitro/gi, `${emotki.nitro}`).replace(/@nie/gi, `${emotki.nie}`).replace(/@mniam/gi, `${emotki.mniam}`).replace(/@misiaczek/gi, `${emotki.misiaczek}`).replace(/@ludek/gi, `${emotki.ludek}`).replace(/@krysztalki/gi, `${emotki.krysztalki}`).replace(/@kociokekw/gi, `${emotki.kociokekw}`).replace(/@hmm/gi, `${emotki.hmm}`).replace(/@discord/gi, `${emotki.discord}`).replace(/@wykrzyknik/gi, `${emotki.wykrzyknik}`).replace(/@usmieszek/gi, `${emotki.usmieszek}`).replace(/@kotek/gi, `${emotki.kotek}`).replace(/@portalik/gi, `${emotki.portalik}`)
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Profil`)
                    .setColor(kolor_embeda)
                    .setDescription(`:credit_card: Imię: **${imie}**\n\n:shield: Wiek: **${wiek}**\n\n:busts_in_silhouette: Płeć: **${plec}**\n\n${emotki.globus} Województwo: **${wojewodztwo}**\n\n:email: Email: **${email}**\n\n${emotki.globus} Permisje globalne: **${permisje_globalne}**\n\n:medal: Odznaki: **${odznakii}**\n\n:taxi: Discord Tag: **${wzmianka.tag}**\n\n:id: Discord ID: **${wzmianka.id}**\n\n:date: Data utworzenia konta: **${wzmianka.createdAt.toLocaleString('pl-PL', { dateStyle: 'short' })}**`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(`${kolor_embeda_bledu}`)
                    .setDescription(`Tego użytkownika nie ma w bazie danych!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
    }
}