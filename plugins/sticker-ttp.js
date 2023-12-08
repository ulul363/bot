/*import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
	if (!text[0]) return m.reply(`Teksnya Mana Kak?\nContoh: .ttp akaza`)
	m.reply('tunggu lagi proses')//https://api.erdwpe.com/api/maker/ttp?text=erdwpe
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await sticker(null, global.API('https://api.erdwpe.com/api/maker/', 'ttp?text', { file: '', text: teks }), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', 'ni', m)
    throw stiker.toString()
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^ttp$/i
handler.limit = true
export default handler*/


import { sticker } from '../lib/sticker.js'
const rewards = {
    limit: 6000,
    money: 5000,
  } 
let handler = async (m, { conn, text }) => {
                    let user = global.db.data.users[m.sender]
	if (!text[0]) return m.reply(`Teksnya Mana Kak?\nContoh: .ttp akaza`)
	for (let reward of Object.keys(rewards)) {
      if (!(reward in user)) continue
      user[reward] -= rewards[reward]}
	m.reply('tunggu lagi proses\nNOTE FITUR INI DIHARGAI 6000limit dan 5000money')
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await sticker(null, global.API('https://api.erdwpe.com/api/maker/', 'ttp?text', { file: '', text: teks }), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^ttp$/i
handler.limit = 6000
handler.money = 5000
export default handler