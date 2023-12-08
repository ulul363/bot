import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let target = global.db.data.users[who]
  
  let str = `
]──────────❏ *INFO PENGGUNA* ❏──────────[
📧 • *Tag:* @${who.replace(/@.+/, '')}
⬛ • *Nama:* ${target.name}
✍️ • *Limit:* ${target.limit}
💌 • *Uang:* ${target.money}
🧊 • *Diamond:* ${target.diamond}
📞 • *Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 • *Link:* https://wa.me/${who.split`@`[0]}
🎨 • *Age:* ${target.registered ? target.age : ''}
${readMore}
🌟 • *Premium:* ${target.premium ? "✅" :"❌"}
⏰ • *PremiumTime:* 
${clockString(target.premiumTime)}
📑 • *Registered:* ${target.registered ? '✅': '❌'}
`.trim()
  m.reply(str)
}

handler.help = ['profile [@user]']
handler.tags = ['exp']
handler.command = /^(infouser|infusr|infousr|usrinfo)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}