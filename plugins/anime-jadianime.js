import axios from 'axios';
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let name = await conn.getName(who);
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw 'Kirim/Reply Gambar dengan caption .toanime';
  m.reply('Tunggu Sebentar...');
  let media = await q.download();
  let url = await uploadImage(media);
  const response = await axios.get(`https://skizo.tech/api/toanime?url=${url}&apikey=${global.xzn}`);

  await conn.sendFile(m.chat, response, 'jadianimw.jpg', global.wm, m);
}

handler.help = ['toanime'];
handler.tags = ['anime', 'ai'];
handler.command = /^(toanime)$/i;
handler.register = true;
handler.limit = true;

export default handler;
