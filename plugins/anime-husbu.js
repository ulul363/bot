import axios from 'axios';

let handler = async (m, { conn, command }) => {
  let url = `https://api.lolhuman.xyz/api/random/husbu?apikey=${global.lolkey}`;
  try {
    const response = await axios.get(url);
    const imageData = Buffer.from(response.data, 'base64'); // Konversi data menjadi buffer

    conn.sendFile(m.chat, imageData, 'huu gepenk', '', m);
  } catch (error) {
    m.reply('Terjadi kesalahan saat mengambil gambar husbu');
  }
}

handler.command = /^(husbu)$/i;
handler.tags = ['anime'];
handler.help = ['husbu'];
handler.limit = true;
handler.premium = false;
handler.register = true;

export default handler;
