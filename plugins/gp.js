import fs from 'fs'
let handler = async (m, { usedPrefix, command, text }) => {
    if (!text) throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} creator.js`
   let bum = fs.readFileSync(`./plugins/${text}`)
 conn.sendFile(m.chat, bum, `${text}`, "ni tuan", m)
}
handler.help = ['getplugin'].map(v => v + ' <teks>')
handler.command = /^(getplugin|gp)$/i

handler.owner = true

export default handler