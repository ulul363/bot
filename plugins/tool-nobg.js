import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ""
  if (!mime)
    throw `Fotonya Mana Kak?`
  if (!/image\/(jpe?g|png)/.test(mime))
    throw `Mime ${mime} tidak support`
		let img = await q.download()
    let urll = await uploadImage(img)
		let url = `https://xzn.wtf/api/removebg?url=${urll}?v=4&apikey=${global.xzn}`
		conn.sendMessage(m.chat, { image: { url }}, { quoted: m })
}
handler.help = ['removebg']
handler.tags = ['tools']
handler.command = /^(no|remove)bg$/i

export default handler
