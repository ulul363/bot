import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js';
import uploadFile from '../lib/uploadFile.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar/video dengan perintah\n\n${usedPrefix + command}`;
    let img = await q.download()
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(img)
    let stiker = await sticker(false, link, global.stickpack, global.wm)
    if (stiker) await conn.sendFile(m.chat, stiker, 's2.webp', m, '', { asSticker: 1 })
}

handler.help = ['sticker2', 's2']
handler.tags = ['sticker']
handler.command = /^(s2|sticker2)$/i

export default handler