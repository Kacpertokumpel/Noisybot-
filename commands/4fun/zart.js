module.exports = {
    commands: `zart`,
    callback: async (message, args, text, bot) => {
        const liczba = Math.floor(Math.random() * 13) + 1
        if (liczba === 1) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Żart!`)
                .setColor(kolor_embeda)
                .setDescription(`Blondynka pyta brunetkę:\n- Masz chipsy prosto z pieca?\n- Nie, z paczki`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        if (liczba === 2) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Żart!`)
                .setColor(kolor_embeda)
                .setDescription(`Dlaczego tost nie strzelił gola?\n- Bo był spalony :joy:`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        if (liczba === 3) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Żart!`)
                .setColor(kolor_embeda)
                .setDescription(`Ojciec rozmawia z Jasiem po wywiadówce:\n- Czemu znowu dostałeś pałę z historii?! - pyta wkurzony ojciec\n- Bo nie chciałem wyjść na konfidenta\n- Jak to?\n- Bo Pani pytała mnie, kto zabił Juliusza Cezara`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        if (liczba === 4) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Żart!`)
                .setColor(kolor_embeda)
                .setDescription(`Blondynka idzie do mechanika i mówi:\n- Coś mi cieknie z samochodu\n- To olej - mówi mechanik\n- No dobra, to oleje`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        if (liczba === 5) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Żart!`)
                .setColor(kolor_embeda)
                .setDescription(`Jasiu w święta podchodzi do mamy i mówi:\n– Mamusiu, choinka się pali\n– Syneczku, nie mówi się, że się pali, tylko że się świeci\nPo chwili Jasiu wraca i mówi:\n– Mamusiu, a teraz firanka się świeci`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        if (liczba === 6) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Żart!`)
                .setColor(kolor_embeda)
                .setDescription(`Co robi król na tronie?\n- Załatwia sprawy :joy:`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        if (liczba === 7) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Żart!`)
                .setColor(kolor_embeda)
                .setDescription(`Mówi przedszkolak do przedszkolaka:\n- My modlimy się przed każdym posiłkiem\n- My nie musimy, bo moja mama dobrze gotuje`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        if (liczba === 8) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Żart!`)
                .setColor(kolor_embeda)
                .setDescription(`Jak się uśmiecha saper?\n- Rozbrajająco :joy:`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        if (liczba === 9) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Żart!`)
                .setColor(kolor_embeda)
                .setDescription(`Co ma łyżka wspólnego z jesienią?\n- Je sie nią`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        if (liczba === 10) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Żart!`)
                .setColor(kolor_embeda)
                .setDescription(`Czym różni się ksiądz od policjanta?\n- Ksiądz mówi Pan z wami, a policjant Pan z nami :joy:`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        if (liczba === 11) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Żart!`)
                .setColor(kolor_embeda)
                .setDescription(`Dlaczego matematyk potrzebował odpocząć?\n- Bo się przeliczył :joy:`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        if (liczba === 12) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Żart!`)
                .setColor(kolor_embeda)
                .setDescription(`Jasiu pyta się mamy:\n- Mamo dlaczego się malujesz?\n- Aby ładnie wyglądać synku\n- A kiedy to zadziała?`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        if (liczba === 13) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Żart!`)
                .setColor(kolor_embeda)
                .setDescription(`Przychodzi budowlaniec do majstra i mówi:\n- Panie majstrze łopata mi się złamała!\n- To się oprzyj o betoniarkę`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}