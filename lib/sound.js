import fetch from 'node-fetch';
let handler = async (m, { conn, text }) => {
    if (!text) return m.reply('pilih sound 1-161 contoh .sound 1')
    const soundURL = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound${text}.mp3`;
        await conn.sendMessage(m.chat, { audio: { url: soundURL }}, { quoted: m })
}

handler.help = ['sound1 - sound161'];
handler.tags = ['sound'];

handler.command = /^(sound)$/i;

export default handler
