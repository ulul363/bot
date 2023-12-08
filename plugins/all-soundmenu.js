import fetch from 'node-fetch';
let handler = async (m, { conn, text }) => {
const caption = `Sound List Command .sound 1 - 161`;
conn.sendMessage(m.chat, { text: caption.trim()}, { quoted: m })
       
}

handler.help = ['soundmenu'];
handler.tags = ['fun'];

handler.command = /^(sound|soundmenu)$/i;

export default handler
