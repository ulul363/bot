import fetch from 'node-fetch'
const rewards = {
    limit: 2000,
    money: 1000,
  } 
let handler = async (m, { conn, args, text }) => {
        let user = global.db.data.users[m.sender]
	if (!text) return m.reply(`Teksnya Mana Kak?\nContoh: .sky akaza\nNOTE HANYA MENDUKUNG SATU KALIMAT`)
		for (let reward of Object.keys(rewards)) {
      if (!(reward in user)) continue
      user[reward] -= rewards[reward]}
	m.reply('tunggu lagi proses\nNOTE FITUR INI DIHARGAI 2000limit dan 1000money')
    let meme = `https://api.erdwpe.com/api/photooxy/night-sky?text=${text}`
     await conn.sendFile(m.chat, meme, 'gambar.jpeg', 'ni kak', m);
}
handler.help = ['sky <teks>']
handler.tags = ['maker']
handler.command = /^sky$/i
handler.limit = 2000
handler.money = 1000

export default handler