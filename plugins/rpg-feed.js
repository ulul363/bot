let handler = async (m, { conn, args, usedPrefix }) => {
  let info = `*➞ ᴇxᴀᴍᴘʟᴇ:* ${usedPrefix}feed cat
- - - - - - - - - - - - - - - - - - - - - - - - - 
🐈 • cat
🐕 • dog
🦊 • fox
🐎 • horse`

  let pesan = pickRandom(['ɴʏᴜᴍᴍᴍ~', 'ᴛʜᴀɴᴋs', 'ᴛʜᴀɴᴋʏᴏᴜ ^-^', '...', 'ᴛʜᴀɴᴋ ʏᴏᴜ~', 'ᴀʀɪɢᴀᴛᴏᴜ ^-^'])

  let type = (args[0] || '').toLowerCase()
  let emo = (type === 'fox' ? '🦊' : type === 'cat' ? '🐈' : type === 'dog' ? '🐕' : type === 'horse' ? '🐴' : '')
  
  let user = global.db.data.users[m.sender]
  let rubah = global.db.data.users[m.sender].fox
  let kuda = global.db.data.users[m.sender].horse
  let kucing = global.db.data.users[m.sender].cat
  let anjing = global.db.data.users[m.sender].dog

  switch (type) {
    case 'fox':
      if (rubah === 0) {
        conn.reply(m.chat, 'NOT FOUND', 'You don\'t have this pet yet!', [ ['.inv', 'Inventory'], ['.petshop', 'Buy Pet'] ])
      } else if (rubah === 10) {
        conn.reply(m.chat, 'LEVEL MAX', 'Your pet is max level!', [ ['.inv', 'Inventory'], ['.petshop', 'Buy New Pet'] ])
      } else {
        let waktur = clockString(new Date() - user.foxlastfeed)
        if (new Date() - user.foxlastfeed > 600000) {
          if (user.petFood > 0) {
            user.petFood -= 1
            user.foxexp += 20
            user.foxlastfeed = new Date() * 1
            conn.reply(m.chat, `Feeding *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            if (rubah > 0) {
              let naiklvl = ((rubah * 100) - 1)
              if (user.foxexp > naiklvl) {
                user.fox += 1
                user.foxexp -= (rubah * 100)
                conn.reply(m.chat, 'LEVELUP', 'Congratulations! Your pet leveled up', [ ['.inv', 'Inventory'], ['.petshop', 'See Pet Ability'] ])
              }
            }
          } else {
            conn.reply(m.chat, `Your pet food is not enough`)
          }
        } else {
          conn.reply(m.chat, 'COOLDOWN', `Your pet is full, try feeding it again in\n➞ *${waktur}*`, [ ['.inv', 'Inventory'] ])
        }
      }
      break
    case 'cat':
      if (kucing === 0) {
        conn.reply(m.chat, 'NOT FOUND', 'You don\'t have this pet yet!', [ ['.inv', 'Inventory'], ['.petshop', 'Buy Pet'] ])
      } else if (kucing === 10) {
        conn.reply(m.chat, 'LEVEL MAX', 'Your pet is max level!', [ ['.inv', 'Inventory'], ['.petshop', 'Buy New Pet'] ])
      } else {
        let waktuc = clockString(new Date() - user.catlastfeed)
        if (new Date() - user.catlastfeed > 600000) {
          if (user.petFood > 0) {
            user.petFood -= 1
            user.catngexp += 20
            user.catlastfeed = new Date() * 1
            conn.reply(m.chat, `Feeding *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            if (kucing > 0) {
              let naiklvl = ((kucing * 100) - 1)
              if (user.catexp > naiklvl) {
                user.cat += 1
                user.catngexp -= (kucing * 100)
                conn.reply(m.chat, 'LEVELUP', 'Congratulations! Your pet leveled up', [ ['.inv', 'Inventory'], ['.petshop', 'See Pet Ability'] ])
              }
            }
          } else {
            conn.reply(m.chat, `Your pet food is not enough`)
          }
        } else {
          conn.reply(m.chat, 'COOLDOWN', `Your pet is full, try feeding it again in\n➞ *${waktuc}*`, [ ['.inv', 'Inventory'] ])
        }
      }
      break
    case 'dog':
      if (anjing === 0) {
        conn.reply(m.chat, 'NOT FOUND', 'You don\'t have this pet yet!', [ ['.inv', 'Inventory'], ['.petshop', 'Buy Pet'] ])
      } else if (anjing === 10) {
        conn.reply(m.chat, 'LEVEL MAX', 'Your pet is max level!', [ ['.inv', 'Inventory'], ['.petshop', 'Buy New Pet'] ])
      } else {
        let waktua = clockString(new Date() - user.doglastfeed)
        if (new Date() - user.doglastfeed > 600000) {
          if (user.petFood > 0) {
            user.petFood -= 1
            user.dogexp += 20
            user.doglastfeed = new Date() * 1
            conn.reply(m.chat, `Feeding *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            if (anjing > 0) {
              let naiklvl = ((anjing * 100) - 1)
              if (user.dogexp > naiklvl) {
                user.dog += 1
                user.dogexp -= (anjing * 100)
                conn.reply(m.chat, 'LEVELUP', 'Congratulations! Your pet leveled up', [ ['.inv', 'Inventory'], ['.petshop', 'See Pet Ability'] ])
              }
            }
          } else {
            conn.reply(m.chat, `Your pet food is not enough`)
          }
        } else {
          conn.reply(m.chat, 'COOLDOWN', `Your pet is full, try feeding it again in\n➞ *${waktua}*`, [ ['.inv', 'Inventory'] ])
        }
      }
      break
    case 'horse':
      if (kuda === 0) {
        conn.reply(m.chat, 'NOT FOUND', 'You don\'t have this pet yet!', [ ['.inv', 'Inventory'], ['.petshop', 'Buy Pet'] ])
      } else if (kuda === 10) {
        conn.reply(m.chat, 'LEVEL MAX', 'Your pet is max level!', [ ['.inv', 'Inventory'], ['.petshop', 'Buy New Pet'] ])
      } else {
        let waktuk = clockString(new Date() - user.horselastfeed)
        if (new Date() - user.horselastfeed > 600000) {
          if (user.petFood > 0) {
            user.petFood -= 1
            user.horseexp += 20
            user.horselastfeed = new Date() * 1
            conn.reply(m.chat, `Feeding *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            if (kuda > 0) {
              let naiklvl = ((kuda * 100) - 1)
              if (user.horseexp > naiklvl) {
                user.horse += 1
                user.horseexp -= (kuda * 100)
                conn.reply(m.chat, 'LEVELUP', 'Congratulations! Your pet leveled up', [ ['.inv', 'Inventory'], ['.petshop', 'See Pet Ability'] ])
              }
            }
          } else {
            conn.reply(m.chat, `Your pet food is not enough`)
          }
        } else {
          conn.reply(m.chat, 'COOLDOWN', `Your pet is full, try feeding it again in\n➞ *${waktuk}*`, [ ['.inv', 'Inventory'] ])
        }
      }
      break
    default:
      conn.reply(m.chat, 'NOT FOUND', info, [ ['.inv', 'Inventory'], ['.petshop', 'Buy Pet'] ])
      break
  }
}

handler.help = ['feed [pet type]']
handler.tags = ['rpg']
handler.command = /^(feed(ing)?)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
