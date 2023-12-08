import { ytdl } from '../lib/scraper-ytdl2.js';

let handler = async (m, { text, conn }) => {
  if (!text) {
    return m.reply("Silakan masukkan URL video YouTube dan pilih resolusi. Contoh: .ytdl link resolusi\nResolusi yang tersedia: sd, hd, hdr");
  }

  const [link, resolusi] = text.trim().split(' ');

  if (!link || !resolusi) {
    return m.reply("Format yang Anda masukkan salah. Gunakan format .ytdl link resolusi\nContoh: .ytdl https://youtu.be/wWVW_0x3qSk?si=rLkEXTBuiHrBqd9- hdr");
  }

  if (resolusi !== "sd" && resolusi !== "hd" && resolusi !== "hdr") {
    return m.reply("Resolusi yang tersedia: sd, hd, hdr");
  }

  try {
    const hasil = await ytdl(link);
    let caption = `Berikut hasil dari permintaan Anda:
      Judul: ${hasil.judul}
      Durasi: ${hasil.durasi}
      Total Ditonton: ${hasil['total-ditonton']}`;
    let url = `${hasil[resolusi]}`;
    
    conn.sendFile(m.chat, url, 'vid.mp4', caption, m);
  } catch (error) {
    m.reply("Terjadi kesalahan dalam mengambil data.");
  }
}

handler.command = ['ytdl'];
handler.help = ['ytdl link resolusi'];
export default handler;