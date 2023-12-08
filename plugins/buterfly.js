import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
	if (!text) return m.reply(`Teksnya Mana Kak?\nContoh: .butterfly akaza`)
    let meme = `https://api.erdwpe.com/api/photooxy/butterfly?text=${text}`
     await conn.sendFile(m.chat, meme, 'gambar.jpeg', 'ni kak');
}
handler.help = ['butterfly <teks>']
handler.tags = ['maker']
handler.command = /^butterfly$/i
handler.limit = true

export default handler