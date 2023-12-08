import axios from 'axios';

let handler = async (m, { conn, args, text }) => {
  m.reply('tunggu kak');
  try {
    const response = await axios.get('https://api.erdwpe.com/api/randomgambar/couplepp');
    const akaza = response.data.result
    
    await conn.sendMessage(m.chat, {
      image: {
        url: akaza.male,
        text: 'male'
      }
    });

    await conn.sendMessage(m.chat, {
      image: {
        url: akaza.female,
        text: 'female'
      }
    });
  } catch (error) {
    m.reply('Terjadi kesalahan saat mengambil gambar couplepp');
  }
}

handler.help = ['ppcopel'];
handler.tags = ['maker'];
handler.command = /^ppcopel$/i;
handler.limit = true;

export default handler;
