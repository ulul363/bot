import { youtubedl, youtubedlv2, youtubeSearch } from '@bochilteam/scraper';

const handler = async (m, { conn, command, text, usedPrefix }) => {
  try {
    if (!text) {
      return conn.reply(m.chat, `Gunakan contoh ${usedPrefix}${command} Dj dalinda`, m);
    }

    // Kurangi limit dan money pengguna
    global.db.data.users[m.sender].limit -= 1000;
    global.db.data.users[m.sender].money -= 2000;

    // Cari video di YouTube
    const search = await youtubeSearch(text);

    if (!search || !search.video || !search.video[0]) {
      throw 'Video Tidak Ditemukan, Coba Judul Lain';
    }

    const vid = search.video[0];
    const { authorName, title, thumbnail, duration, viewH, publishedTime, url, description, size } = vid;

    const caption = `
╭─────〔 A K A Z A  P L A Y 〕─────╮
⭐ Judul: ${title}
🕒 Durasi: ${duration}
👁️ Views: ${viewH}
📅 Upload: ${publishedTime}
🔗 Link: ${url}
📝 Deskripsi: ${description}
📏 Ukuran: ${size}
🔗 URL Video: ${url}
🎤 Nama Author: ${authorName}
Harga 1000 limit dan 2000 money
╰─────────────────────╯
`;

    // Kirim pesan dengan loading bar
    const hawemod = [
      "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
      "《 ████▒▒▒▒▒▒▒▒》30%",
      "《 ███████▒▒▒▒▒》50%",
      "《 ██████████▒▒》80%",
      "《 ████████████》100%",
      "~_*©辛AKAZAMD*_~\n𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
    ];

    let loadingKey = await conn.sendMessage(m.chat, { text: 'ʟᴏᴀᴅɪɴɢ...' });

    for (let i = 0; i < hawemod.length; i++) {
      await conn.sendMessage(m.chat, { text: hawemod[i], edit: loadingKey });
    }

    // Kirim informasi video
    conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 2,
          mediaUrl: thumbnail,
          body: "Akazamd", // Gantilah dengan teks watermark yang sesuai
          thumbnail: (await conn.getFile(thumbnail)).data,
          sourceUrl: url,
        },
      },
    });

    // Unduh audio video
    const yt = await youtubedl(url).catch(async (_) => await youtubedlv2(url));
    const audioLink = await yt.audio['128kbps'].download();
    const doc = {
      audio: {
        url: audioLink,
      },
      mimetype: 'audio/mp4',
      fileName: `${title}.mp4`,
    };

    // Kirim audio ke pengguna
    return conn.sendMessage(m.chat, doc, { quoted: m });
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'Terjadi kesalahan. Silakan coba lagi nanti...', m);
  }
};

handler.help = ['play'].map((v) => v + ' <pencarian>');
handler.tags = ['downloader'];
handler.command = /^play$/i;
handler.exp = 0;
handler.register = false;
handler.money = 2000;
handler.limit = 1000;

export default handler;