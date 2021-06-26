/**
 * NOTE:
 *  Some parts of this code have been improved since the original command base video.
 *  This file should still work as expected, however if you are learning the inner workings of
 *  this file then expect the file to be slightly different than in the video.
 */

const validatePermissions = (permissions) => {
  const validPermissions = [
    'CREATE_INSTANT_INVITE',
    'KICK_MEMBERS',
    'BAN_MEMBERS',
    'ADMINISTRATOR',
    'MANAGE_CHANNELS',
    'MANAGE_GUILD',
    'ADD_REACTIONS',
    'VIEW_AUDIT_LOG',
    'PRIORITY_SPEAKER',
    'STREAM',
    'VIEW_CHANNEL',
    'SEND_MESSAGES',
    'SEND_TTS_MESSAGES',
    'MANAGE_MESSAGES',
    'EMBED_LINKS',
    'ATTACH_FILES',
    'READ_MESSAGE_HISTORY',
    'MENTION_EVERYONE',
    'USE_EXTERNAL_EMOJIS',
    'VIEW_GUILD_INSIGHTS',
    'CONNECT',
    'SPEAK',
    'MUTE_MEMBERS',
    'DEAFEN_MEMBERS',
    'MOVE_MEMBERS',
    'USE_VAD',
    'CHANGE_NICKNAME',
    'MANAGE_NICKNAMES',
    'MANAGE_ROLES',
    'MANAGE_WEBHOOKS',
    'MANAGE_EMOJIS',
  ]

  for (const permission of permissions) {
    if (!validPermissions.includes(permission)) {
      throw new Error(`Unknown permission node ${permission}`)
    }
  }
}
let recentlyRan = []
module.exports = (client, commandOptions) => {

  let {
    commands,
    expectedArgs = '',
    permissionError = 'Nie posiadasz uprawnień!',
    minArgs = 0,
    maxArgs = null,
    cooldown = 3,
    permissions = [],
    requiredRoles = [],
    callback,
  } = commandOptions

  // Ensure the command and aliases are in an array
  if (typeof commands === 'string') {
    commands = [commands]
  }

  for (const alias of commands) {
    const command = `${prefix}${alias.toLowerCase()}`
    console.log(`✅ ┇ Komenda ${command} działa!`)
  }

  // Ensure the permissions are in an array and are all valid
  if (permissions.length) {
    if (typeof permissions === 'string') {
      permissions = [permissions]
    }

    validatePermissions(permissions)
  }

  // Listen for messages
  client.on('message', async (message) => {

    if (message.channel.type === 'dm' || message.author.bot) return;
    const { member, content, guild } = message
    const embed = new Discord.MessageEmbed();
    for (const alias of commands) {
      const command = `${prefix}${alias.toLowerCase()}`
      if (
        content.toLowerCase().startsWith(`${command} `) ||
        content.toLowerCase() === command
      ) {

        const serwerdev = client.guilds.cache.get(`767092790903177237`)
        const kanal = serwerdev.channels.cache.get(`831944958827167834`)
        const embed = new Discord.MessageEmbed()
        embed
          .setTitle(`${emotki.wykrzyknik} Wpisano komendę!`)
          .setColor(kolor_embeda)
          .setDescription(`**${message.author} (${message.author.tag})** o id **${message.author.id}** wpisał komendę __${message.content}__ na serwerze **${guild.name}** o id **${guild.id}**, którego właścicielem jest **${guild.owner.user} (${guild.owner.user.tag})** o id **${guild.owner.user.id}**`)
          .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
          .setFooter(`${client.user.tag} (${client.user.id})`, client.user.displayAvatarURL({ dynamic: true }))
        kanal.send(embed)

        for (const permission of permissions) {
          if (!member.hasPermission(permission)) {
            message.reply(permissionError)
            return
          }
        }

        // Ensure the user has the required roles
        for (const requiredRole of requiredRoles) {
          const role = guild.roles.cache.find(
            (role) => role.name === requiredRole
          )

          if (!role || !member.roles.cache.has(role.id)) {
            message.reply(
              `Musisz posiadać rolę ${requiredRole} aby używać tej komendy!`
            )
            return
          }
        }
        // Ensure the user has not ran this command too frequently
        //guildId-userId-command
        let cooldownString = `${guild.id}-${member.id}-${commands[0]}`
        if (cooldown > 0 && recentlyRan.includes(cooldownString)) {
          embed
            .setTitle(`Błąd!`)
            .setColor(`${kolor_embeda_bledu}`)
            .setDescription(`${emotki.nie} Musisz poczekać przed ponownym użyciem tej komendy!`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
          return message.channel.send(embed)
        }



        // Split on any number of spaces
        const args = content.split(/[ ]+/)

        // Remove the command which is the first index
        args.shift()

        // Ensure we have the correct number of args
        if (
          args.length < minArgs ||
          (maxArgs !== null && args.length > maxArgs)
        ) {
          message.reply(
            `Incorrect syntax! Use ${prefix}${alias} ${expectedArgs}`
          )
          return
        }
        if (cooldown > 0) {
          recentlyRan.push(cooldownString)

          setTimeout(() => {

            recentlyRan = recentlyRan.filter((string) => {
              return string !== cooldownString
            })

          }, 1000 * cooldown)
        }

        const dbmembersfiles = fs.readdirSync(`db/members`).join(`, `).replace(/\.json/gi, ``)
        if (dbmembersfiles.includes(message.author.id)) {
          const dbmembers = require(`../db/members/${message.author.id}.json`)
          const gbancheck = dbmembers.gbancheck || `Nie!`
          const gbanreason = dbmembers.gbanreason || `Nie dotyczy!`
          const gbanexpire = dbmembers.gbanexpire || `Nie dotyczy!`
          if (gbancheck === `Tak!`) {
            const embed = new Discord.MessageEmbed()
            embed
              .setTitle(`Błąd!`)
              .setColor(kolor_embeda_bledu)
              .setDescription(`${emotki.nie} Jesteś globalnie zbanowany/a!\n\n:id: Twoje id: **${message.author.id}**\n${emotki.support} Powód: **${gbanreason}**\n${emotki.zegarek} Wygasa: **${gbanexpire}**`)
              .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
            return
          }
        }

        // Handle the custom command code
        callback(message, args, args.join(' '), client)
        return

      }
    }
  })
}