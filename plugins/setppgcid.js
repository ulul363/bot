let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!text) throw `id nya mana bang`
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Gambar tidak ditemukan'
        await conn.updateProfilePicture(text, img)
    } else m.reply(`kirim/balas gambar dengan caption *${usedPrefix + command}*`)
}
handler.help = ['setgcppid']
handler.tags = ['group']

handler.command = /^setgcppid$/i

handler.group = false
handler.admin = false
handler.botAdmin = false
handler.premium = true
export default handler