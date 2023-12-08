/*import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
	if (!text) return m.reply(`Linknya Mana Kak?\nContoh: .wanted https://example.png`)
	if (!text.startsWith('http://') && !text.startsWith('https://')) return m.reply('Link yang kamu masukkan tidak valid.')
	await m.reply('membuat gambar tunggu ')
    let encodedText = encodeURIComponent(text);
    let meme = `https://api.erdwpe.com/api/maker/wanted?url=${encodedText}`
     await conn.sendFile(m.chat, meme, 'gambar.jpeg', 'ni kak');
}
handler.help = ['wanted <link>']
handler.tags = ['maker']
handler.command = /^wanted$/i
handler.limit = -200
handler.money = -5000
export default handler
//////////////////////*/
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    m.reply('generating....')
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.erdwpe.com/api/maker/wanted?url=${url}`
     await conn.sendFile(m.chat, meme, 'gambar.jpeg', 'ni kak');
}
handler.help = ['wanted']
handler.tags = ['tools']
handler.command = /^(wanted)$/i

handler.register = true
handler.level = 5
export default handler