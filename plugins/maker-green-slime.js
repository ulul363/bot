import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, 'Teks mana, bang?', m);
  try {
    const response = await fetch(`https://api.alandikasaputra.repl.co/scraper-textpro?text=${encodeURIComponent(text)}&link=https://textpro.me/create-green-slime-text-effect-online-1097.html`);
    if (response.ok) {
      const buffer = await response.arrayBuffer();
      if (buffer) {
        conn.sendFile(m.chat, Buffer.from(buffer), 'slime.png', 'Ini hasilnya:', m);
      } else {
        throw new Error('Gambar tidak ditemukan dalam respons API');
      }
    } else {
      throw new Error('Gagal mengambil gambar');
    }
  } catch (e) {
    console.error(e);
  }
};

handler.command = ['slime'];
handler.tags = ['maker'];
handler.help = ['slime'];

export default handler;
