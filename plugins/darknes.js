import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
	if (!text) return m.reply(`Linknya Mana Kak?\nContoh: .darknes https://example.png`)
	if (!text.startsWith('http://') && !text.startsWith('https://')) return m.reply('Link yang kamu masukkan tidak valid.')
	await m.reply('membuat gambar tunggu ')
    let encodedText = encodeURIComponent(text);
    let meme = `https://api.erdwpe.com/api/maker/darkness?url=${encodedText}`
     await conn.sendFile(m.chat, meme, 'gambar.jpeg', 'ni kak');
}
handler.help = ['darknes <link>']
handler.tags = ['maker']
handler.command = /^darknes$/i
handler.limit = -200
handler.money = -5000
export default handler