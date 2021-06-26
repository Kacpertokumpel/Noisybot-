module.exports = {
    commands: `embed`,
    callback: async (message, args, text, bot) => {
        const tekst = args.join(` `).split(`|`)
        if (!tekst[0]) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Musisz podać tytuł!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const tytul = tekst[0].replace(/@developer/gi, `${emotki.developer}`).replace(/@pepemilosc/gi, `${emotki.pepemilosc}`).replace(/@pepepodniecenie/gi, `${emotki.pepepodniecenie}`).replace(/@logobota/gi, `${emotki.logobota}`).replace(/@lapka/gi, `${emotki.lapka}`).replace(/@discordpartner/gi, `${emotki.discordpartner}`).replace(/@globus/gi, `${emotki.globus}`).replace(/@zegarek/gi, `${emotki.zegarek}`).replace(/@unlajk/gi, `${emotki.unlajk}`).replace(/@trzymajsie/gi, `${emotki.trzymajsie}`).replace(/@serduszko1/gi, `${emotki.serduszko1}`).replace(/@riczbicz/gi, `${emotki.riczbicz}`).replace(/@pyrek/gi, `${emotki.pyrek}`).replace(/@plytka/gi, `${emotki.plytka}`).replace(/@plus1/gi, `${emotki.plus1}`).replace(/@okej/gi, `${emotki.okej}`).replace(/@lajk/gi, `${emotki.lajk}`).replace(/@kociolajk/gi, `${emotki.kociolajk}`).replace(/@klodka/gi, `${emotki.klodka}`).replace(/@jeb/gi, `${emotki.jeb}`).replace(/@haker/gi, `${emotki.haker}`).replace(/@haha/gi, `${emotki.haha}`).replace(/@ban/gi, `${emotki.ban}`).replace(/@obsydianek/gi, `${emotki.obsydianek}`).replace(/@discordjs/gi, `${emotki.discordjs}`).replace(/@nodejs/gi, `${emotki.nodejs}`).replace(/@ludzie/gi, `${emotki.ludzie}`).replace(/@uptime/gi, `${emotki.uptime}`).replace(/@pamiecram/gi, `${emotki.pamiecram}`).replace(/@pobieranie/gi, `${emotki.pobieranie}`).replace(/@squishyrat/gi, `${emotki.squishyrat}`).replace(/@kursor/gi, `${emotki.kursor}`).replace(/@strzalka/gi, `${emotki.strzalka}`).replace(/@korona/gi, `${emotki.korona}`).replace(/@wumpus/gi, `${emotki.wumpus}`).replace(/@tak/gi, `${emotki.tak}`).replace(/@swiatelko/gi, `${emotki.swiatelko}`).replace(/@support/gi, `${emotki.support}`).replace(/@smuteczek/gi, `${emotki.smuteczek}`).replace(/@sloneczko/gi, `${emotki.sloneczko}`).replace(/@serduszko2/gi, `${emotki.serduszko2}`).replace(/@saltko/gi, `${emotki.saltko}`).replace(/@papuzka/gi, `${emotki.papuzka}`).replace(/@online/gi, `${emotki.online}`).replace(/@offline/gi, `${emotki.offline}`).replace(/@nitro/gi, `${emotki.nitro}`).replace(/@nie/gi, `${emotki.nie}`).replace(/@mniam/gi, `${emotki.mniam}`).replace(/@misiaczek/gi, `${emotki.misiaczek}`).replace(/@ludek/gi, `${emotki.ludek}`).replace(/@krysztalki/gi, `${emotki.krysztalki}`).replace(/@kociokekw/gi, `${emotki.kociokekw}`).replace(/@hmm/gi, `${emotki.hmm}`).replace(/@discord/gi, `${emotki.discord}`).replace(/@wykrzyknik/gi, `${emotki.wykrzyknik}`).replace(/@usmieszek/gi, `${emotki.usmieszek}`).replace(/@kotek/gi, `${emotki.kotek}`).replace(/@portalik/gi, `${emotki.portalik}`)
            if (!tekst[1]) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`${emotki.nie} Musisz podać kolor!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const kolor = tekst[1]
                if (!tekst[2]) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`${emotki.nie} Musisz podać treść!`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    const tresc = tekst[2].replace(/@developer/gi, `${emotki.developer}`).replace(/@pepemilosc/gi, `${emotki.pepemilosc}`).replace(/@pepepodniecenie/gi, `${emotki.pepepodniecenie}`).replace(/@logobota/gi, `${emotki.logobota}`).replace(/@lapka/gi, `${emotki.lapka}`).replace(/@discordpartner/gi, `${emotki.discordpartner}`).replace(/@globus/gi, `${emotki.globus}`).replace(/@zegarek/gi, `${emotki.zegarek}`).replace(/@unlajk/gi, `${emotki.unlajk}`).replace(/@trzymajsie/gi, `${emotki.trzymajsie}`).replace(/@serduszko1/gi, `${emotki.serduszko1}`).replace(/@riczbicz/gi, `${emotki.riczbicz}`).replace(/@pyrek/gi, `${emotki.pyrek}`).replace(/@plytka/gi, `${emotki.plytka}`).replace(/@plus1/gi, `${emotki.plus1}`).replace(/@okej/gi, `${emotki.okej}`).replace(/@lajk/gi, `${emotki.lajk}`).replace(/@kociolajk/gi, `${emotki.kociolajk}`).replace(/@klodka/gi, `${emotki.klodka}`).replace(/@jeb/gi, `${emotki.jeb}`).replace(/@haker/gi, `${emotki.haker}`).replace(/@haha/gi, `${emotki.haha}`).replace(/@ban/gi, `${emotki.ban}`).replace(/@obsydianek/gi, `${emotki.obsydianek}`).replace(/@discordjs/gi, `${emotki.discordjs}`).replace(/@nodejs/gi, `${emotki.nodejs}`).replace(/@ludzie/gi, `${emotki.ludzie}`).replace(/@uptime/gi, `${emotki.uptime}`).replace(/@pamiecram/gi, `${emotki.pamiecram}`).replace(/@pobieranie/gi, `${emotki.pobieranie}`).replace(/@squishyrat/gi, `${emotki.squishyrat}`).replace(/@kursor/gi, `${emotki.kursor}`).replace(/@strzalka/gi, `${emotki.strzalka}`).replace(/@korona/gi, `${emotki.korona}`).replace(/@wumpus/gi, `${emotki.wumpus}`).replace(/@tak/gi, `${emotki.tak}`).replace(/@swiatelko/gi, `${emotki.swiatelko}`).replace(/@support/gi, `${emotki.support}`).replace(/@smuteczek/gi, `${emotki.smuteczek}`).replace(/@sloneczko/gi, `${emotki.sloneczko}`).replace(/@serduszko2/gi, `${emotki.serduszko2}`).replace(/@saltko/gi, `${emotki.saltko}`).replace(/@papuzka/gi, `${emotki.papuzka}`).replace(/@online/gi, `${emotki.online}`).replace(/@offline/gi, `${emotki.offline}`).replace(/@nitro/gi, `${emotki.nitro}`).replace(/@nie/gi, `${emotki.nie}`).replace(/@mniam/gi, `${emotki.mniam}`).replace(/@misiaczek/gi, `${emotki.misiaczek}`).replace(/@ludek/gi, `${emotki.ludek}`).replace(/@krysztalki/gi, `${emotki.krysztalki}`).replace(/@kociokekw/gi, `${emotki.kociokekw}`).replace(/@hmm/gi, `${emotki.hmm}`).replace(/@discord/gi, `${emotki.discord}`).replace(/@wykrzyknik/gi, `${emotki.wykrzyknik}`).replace(/@usmieszek/gi, `${emotki.usmieszek}`).replace(/@kotek/gi, `${emotki.kotek}`).replace(/@portalik/gi, `${emotki.portalik}`)
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(tytul)
                        .setColor(kolor)
                        .setDescription(tresc)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
            }
        }
    }
}