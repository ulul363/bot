let handler = async (m, { conn }) => {
let dadu = API('https://api.lolhuman.xyz', '/api/sticker/dadu', null, 'apikey')
conn.sendFile(m.chat, dadu, 'dadu.webp', '', m)
}
handler.help = ['dadu', 'daduu', 'dadudududu', 'dudu']
handler.tags = ['game']
handler.command = ['dadu'] 
export default handler
