import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isPrems }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return m.reply(`Balas Gambar Dengan Caption ${usedPrefix + command}`)
    if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`_*Mime ${mime} tidak didukung!*_`)
    m.reply(wait)
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = API('https://api.itsrose.site', '/image/differentMe', { url: url }, 'apikey')
    await conn.sendFile(m.chat, meme, 'anime.png', 'Nih Kak', m)
}
handler.help = ['differentme']
handler.tags = ['fun']
handler.command = /^(differentme)$/i
handler.limit = true
handler.onlyprem = true
export default handler