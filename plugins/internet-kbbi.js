import axios from 'axios';

let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw 'example .kbbi ikan';
let za = encodeURIComponent(text);
let api = await axios.get(`https://api.akuari.my.id/edukasi/kbbi?query=${text}`)
let hasilnya = await api.data;
let caption = `Result
Jawaban: ${hasilnya.arti}
Judul: ${hasilnya.title}
`
conn.sendMessage(m.chat, caption, m)
}
handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i

export default handler