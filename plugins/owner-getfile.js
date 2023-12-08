import fs from 'fs'
let handler = async (m, { conn, text }) => {
if (!text) return m.reply('nama pile nya apa\n example .gf ./handler.js');
    m.reply(`Tunggu Sebentar, Sedang mengambil file ${text}`)
    let sesi = await fs.readFileSync(`${text}`)
    return await conn.sendMessage(m.chat, { document: sesi, fileName: `${text}` }, { quoted: m })
}
handler.help = ['getfile', 'gf']
handler.tags = ['owner']
handler.command = /^(getf|getfile)$/i

handler.owner = true

export default handler
