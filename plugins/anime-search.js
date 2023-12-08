import axios from 'axios';

const handler = async (m, { text, conn }) => {
  if (!text) throw 'Apa yang ingin Anda cari?';
  try {
    m.reply('tunggu bentar lagi');
    let response = await axios.get(`https://skizo.tech/api/oploverz?search=${text}&apikey=${global.xzn}`);
    let result = response.data;

    if (result.length === 0) {
      m.reply("Maaf, tidak ditemukan hasil yang sesuai.");
      return;
    }

    for (let i = 0; i < result.length; i++) {
      let str = `Oploverz Search\n\n`;
      str += "```";
      str += `Title: ${result[i].title}\n`;
      str += `Link: ${result[i].link}\n`;
      str += "```";

      conn.sendFile(m.chat, result[i].img, "anime.jpg", str, m);
      global.db.data.users[m.sender].limit -= 2000;
      global.db.data.users[m.sender].money -= 3000;
    }
  } catch (e) {
    console.error(e);
    m.reply("Maaf, terjadi kesalahan dalam proses pencarian.");
  }
};

handler.help = ['animesearch <text>'];
handler.command = ['animesearch'];
handler.tags = ['anime'];
handler.money = 3000;
handler.limit = 2000;
export default handler;
