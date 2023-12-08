import { toDataURL } from 'qrcode'

let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Use example: \n.qrcode AKAZAMD', m)
await m.reply('Generating qrcode...')
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', 'ni', m)
}

handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i


export default handler