module.exports = {
    commands: `plaskacz`,
    callback: async (message, args, text, bot) => {
        if (!message.mentions.users.first()) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Musisz oznaczyć osobę!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const liczba = Math.floor(Math.random() * 21) + 1
            switch (liczba) {
                case 1: var plaskacz = `https://media0.giphy.com/media/iIPI1tpT9HcUE/giphy.gif`; break;
                case 2: var plaskacz = `https://media4.giphy.com/media/uG3lKkAuh53wc/giphy.gif`; break;
                case 3: var plaskacz = `https://media1.giphy.com/media/l1IYa5UYE8iBLWp6E/giphy.gif`; break;
                case 4: var plaskacz = `https://media3.giphy.com/media/tV0HkQju9zHR6/giphy.gif`; break;
                case 5: var plaskacz = `https://media0.giphy.com/media/RrLbvyvatbi36/giphy.gif`; break;
                case 6: var plaskacz = `https://media0.giphy.com/media/xUA7b9Wc1uaT52QfO8/giphy.gif`; break;
                case 7: var plaskacz = `https://media3.giphy.com/media/3XlEk2RxPS1m8/giphy.gif`; break;
                case 8: var plaskacz = `https://media0.giphy.com/media/s5zXKfeXaa6ZO/giphy.gif`; break;
                case 9: var plaskacz = `https://media2.giphy.com/media/xT9KVrorib59XtIX9m/giphy.gif`; break;
                case 10: var plaskacz = `https://media2.giphy.com/media/3o84skA6NkEvJg4LlK/giphy.gif`; break;
                case 11: var plaskacz = `https://media4.giphy.com/media/jt38YxwGTevEkFWWoY/giphy.gif`; break;
                case 12: var plaskacz = `https://media1.tenor.com/images/b8be3c0f42092d828da3a6d53f56bff3/tenor.gif?itemid=16783719`; break;
                case 13: var plaskacz = `https://media1.tenor.com/images/0720ffb69ab479d3a00f2d4ac7e0510c/tenor.gif?itemid=10422113`; break;
                case 14: var plaskacz = `hhttps://media1.tenor.com/images/b3afc2339d254fea655bce6ccba73b2a/tenor.gif?itemid=15667197`; break;
                case 15: var plaskacz = `https://media1.tenor.com/images/29c7edfb6df189e313354fb3423ce333/tenor.gif?itemid=15308590`; break;
                case 16: var plaskacz = `https://media1.tenor.com/images/3c161bd7d6c6fba17bb3e5c5ecc8493e/tenor.gif?itemid=5196956`; break;
                case 17: var plaskacz = `https://media1.tenor.com/images/6a288821409733bb848f14b9443f8b73/tenor.gif?itemid=4079563`; break;
                case 18: var plaskacz = `https://media1.tenor.com/images/d2257d7a3803a4aabcdddf3878149d01/tenor.gif?itemid=14279719`; break;
                case 19: var plaskacz = `https://media1.tenor.com/images/49de17c6f21172b3abfaf5972fddf6d6/tenor.gif?itemid=10206784`; break;
                case 20: var plaskacz = `https://media1.tenor.com/images/bc858e69d5022807b84554b2d4583c10/tenor.gif?itemid=5122019`; break;
                case 21: var plaskacz = `https://media1.tenor.com/images/3380661a98f11e2bdc0a0082f551fe91/tenor.gif?itemid=15151334`; break;
            }
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Plaskacz!`)
                .setColor(kolor_embeda)
                .setDescription(`${message.author} uderzył ${message.mentions.users.first()}`)
                .setImage(plaskacz)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}