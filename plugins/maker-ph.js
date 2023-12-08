import axios from 'axios';

let handler = async (m, { conn, command, text }) => {
  if (!text) return m.reply('Teksnya mana, bang? Contoh: .ph akaza akaza');
  let teks1 = text.split(" ")[0];
  let teks2 = text.split(" ")[1];
  let link = `https://api.alandikasaputra.repl.co/scraper-textpro2?text=${teks1}&text2=${teks2}&link=https://textpro.me/pornhub-style-logo-online-generator-free-977.html`;
  conn.sendMessage(m.chat, { image: { url: link } }, { quoted: m });
};

handler.command = ['ph', 'pornhub', 'phmaker'];
handler.tags = ['maker'];
handler.help = ['ph'];

export default handler;