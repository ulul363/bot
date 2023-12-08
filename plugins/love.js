import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
	if (!text) return m.reply(`Teksnya Mana Kak?\nContoh: .love akaza`)
	await m.reply('membuat gambar tunggu ')
    let meme = `https://api.erdwpe.com/api/photooxy/picture-of-love?text=${text}`
     await conn.sendFile(m.chat, meme, 'gambar.jpeg', 'ni kak');
}
handler.help = ['love <teks>']
handler.tags = ['maker']
handler.command = /^love$/i
handler.limit = -200

export default handler