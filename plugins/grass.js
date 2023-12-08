import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
	if (!text) return m.reply(`Teksnya Mana Kak?\nContoh: .grass akaza`)
    let meme = `https://api.erdwpe.com/api/photooxy/under-grass?text=${text}`
     await conn.sendFile(m.chat, meme, 'gambar.jpeg', 'ni kak');
}
handler.help = ['grass <teks>']
handler.tags = ['maker']
handler.command = /^grass$/i
handler.limit = -100

export default handler