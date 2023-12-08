let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let target = global.db.data.users[who]
  
  let caption = `
▧「 *B A N K  U S E R* 」
│ 📛 *Name:* ${target.registered}
| name : ${target.name}
│ 💳 *Atm:* ${target.atm > 0 ? 'Level ' + user.atm : '✖️'}
│ 🏛️ *Bank:* ${target.bank} 💲 / ${user.fullatm} 💲
│ 💹 *Money:* ${target.money} 💲
│ 🤖 *Robo:* ${target.robo > 0 ? 'Level ' + user.robo : '✖️'}
│ 🌟 *Status:* ${target.premiumTime > 0 ? 'Premium' : 'Free'}
│ 📑 *Registered:* ${target.registered ? 'Yes':'No'}
└──···
`.trim()
  m.reply(caption)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false
export default handler