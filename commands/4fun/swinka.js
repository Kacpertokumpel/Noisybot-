module.exports = {
    commands: `swinka`,
    callback: async (message, args, text, bot) => {
        const liczba = Math.floor(Math.random() * 22) + 1
        switch (liczba) {
            case 1: var swinka = `https://hypixel.net/attachments/97d2167339b361b973c71281f71c0e71-jpg.1967090/`; break;
            case 2: var swinka = `https://hypixel.net/attachments/b1178afe6c24d9a36cb5dfcfed630e14-jpg.1967088/`; break;
            case 3: var swinka = `https://hypixel.net/attachments/29f03baf35f0cdf28727025ecf00b362-jpg.1967106/`; break;
            case 4: var swinka = `https://hypixel.net/attachments/5ede00a41e4aa5eb2e958a769cc13629-jpg.1967266/`; break;
            case 5: var swinka = `https://hypixel.net/attachments/2f34ced2df6a19e2b9e79179c9abc2e6-jpg.1967275/`; break;
            case 6: var swinka = `https://hypixel.net/attachments/1599168518633-png.1967292/`; break;
            case 7: var swinka = `https://hypixel.net/attachments/uajtcvzf_400x400-jpg.1967306/`; break;
            case 8: var swinka = `https://hypixel.net/attachments/777d2c12a4f3b9c28b1d22a7afda8cb6-jpg.1968168/`; break;
            case 9: var swinka = `https://hypixel.net/attachments/46eb046e82defe667b1384dcad70ae58-jpg.1968677/`; break;
            case 10: var swinka = `https://hypixel.net/attachments/6f5a2919a8b34fca351deb9cb9417f77-jpg.1968667/`; break;
            case 11: var swinka = `https://hypixel.net/attachments/unnamed-2-jpg.1968214/`; break;
            case 12: var swinka = `https://hypixel.net/attachments/86e5600792f5f00d217a12d19b9273d3-jpg.1968374/`; break;
            case 13: var swinka = `https://hypixel.net/attachments/929298dbf18161eb76fded30cf3a53b1-jpg.1968375/`; break;
            case 14: var swinka = `https://static.wikia.nocookie.net/swinkapeppa/images/e/e9/%C5%9Awinka_Peppa.png/revision/latest/top-crop/width/360/height/450?cb=20200911185205&path-prefix=pl`; break;
            case 15: var swinka = `https://static.wikia.nocookie.net/swinkapeppa/images/3/33/%C5%9Awinka_George.png/revision/latest/scale-to-width-down/309?cb=20200911201956&path-prefix=pl`; break;
            case 16: var swinka = `https://hypixel.net/attachments/cf598b27bb2e89f7650ec619fe6a29c1-jpg.1968420/`; break;
            case 17: var swinka = `https://hypixel.net/attachments/a5b00a33040dd958042d601d86119332-jpg.1968714/`; break;
            case 18: var swinka = `https://hypixel.net/attachments/cvewak5uwaauyoc-jpg.1968891/`; break;
            case 19: var swinka = `https://hypixel.net/attachments/ctswa-cvuaeso6g-jpg.1968894/`; break;
            case 20: var swinka = `https://hypixel.net/attachments/7794e6a8c63421305bb38a42b955574f-jpg.1969059/`; break;
            case 21: var swinka = `https://hypixel.net/attachments/gettyimages_131967915-0-jpg.1969107/`; break;
            case 22: var swinka = `https://hypixel.net/attachments/1599251854563-png.1969203/`; break;
        }
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Świnka!`)
            .setColor(kolor_embeda)
            .setDescription(`Oto świnka dla Ciebie!`)
            .setImage(swinka)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}