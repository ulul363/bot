import axios from 'axios';
import fetch from 'node-fetch'; // Pastikan Anda telah menginstal node-fetch

let handler = async (m, { conn }) => {
  try {
    const waifudd = await axios.get('https://waifu.pics/api/nsfw/neko');
    const ur = waifudd.data.url;

    await conn.sendMessage(m.chat, {
      image: { url: ur },
      caption: 'Ah Sayang '
    });
  } catch (axiosError) {
    console.error('Gagal melakukan fetch dengan Axios\nmencoba dengan fetch...:', axiosError);
    try {
      const response = await fetch('https://waifu.pics/api/nsfw/neko');
      if (response.ok) {
        const lu = await response.json();
        const u = lu.url;
        await conn.sendMessage(m.chat, {
          image: { url: u },
          caption: 'Ah Sayang '
        });
      } else {
        m.reply('Gagal melakukan fetch dengan Node-fetch');
      }
    } catch (fetchError) {
      console.error('Gagal melakukan fetch dengan Node-fetch:', fetchError);
      m.reply('Terjadi kesalahan saat mengambil gambar.');
    }
  }
}

handler.command = /^(neko)$/i;
handler.tags = ['anime'];
handler.help = ['neko'];

export default handler;
