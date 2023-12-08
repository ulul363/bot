import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
	if (!text) return m.reply(`Teksnya Mana Kak?\nContoh: .metalic akaza`)
    let meme = `https://api.erdwpe.com/api/photooxy/metallic?text=${text}`
     await conn.sendFile(m.chat, meme, 'gambar.jpeg', 'ni kak');
}
handler.help = ['metalic <teks>']
handler.tags = ['maker']
handler.command = /^metalic$/i
handler.limit = 100

export default handler