import { sticker } from '../lib/sticker.js'
const rewards = {
    limit: 60000,
    money: 5000,
  } 
let handler = async (m, { conn, text }) => {
                    let user = global.db.data.users[m.sender]
	if (!text[0]) return m.reply(`Teksnya Mana Kak?\nContoh: .attp akaza`)
	for (let reward of Object.keys(rewards)) {
      if (!(reward in user)) continue
      user[reward] -= rewards[reward]}
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await sticker(null, global.API('https://api.erdwpe.com/api/maker/', 'attp?text', { file: '', text: teks }), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^attp$/i
handler.limit = 60000
handler.money = 5000
export default handler