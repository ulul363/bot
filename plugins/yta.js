import ytdl from 'ytdl-core';
import fs from 'fs';

const handler = async (m, { conn, text, command, usedPrefix }) => {
  try {
    if (!text) throw `Use it like this: ${usedPrefix}${command} <YouTube Video Link> <audio/video>`;

    const args = text.split(' ');
    if (args.length < 2) throw 'Please provide both a YouTube video link and specify "audio" or "video" as the second argument.';

    const videoLink = args[0];
    const fileType = args[1].toLowerCase(); // "audio" or "video"

    m.reply(`Downloading ${fileType}...`);
    global.db.data.users[m.sender].limit -= 3000;

    const downloadMp3 = async (link) => {
      try {
        const info = await ytdl.getInfo(link);
        const mp3File = `audio_${Math.floor(Math.random() * 1000000)}.mp3`;

        ytdl(link, { filter: 'audioonly' })
          .pipe(fs.createWriteStream(mp3File))
          .on('finish', async () => {
            await conn.sendMessage(m.chat, { audio: fs.readFileSync(mp3File) }, { quoted: m });
            fs.unlinkSync(mp3File);
          });
      } catch (err) {
        m.reply(`${err}`);
      }
    };

    const downloadMp4 = async (link) => {
      try {
        await ytdl.getInfo(link);
        const mp4File = `video_${Math.floor(Math.random() * 1000000)}.mp4`;
        ytdl(link)
          .pipe(fs.createWriteStream(mp4File))
          .on('finish', async () => {
            await conn.sendMessage(m.chat, { video: fs.readFileSync(mp4File) }, { quoted: m });
            fs.unlinkSync(mp4File);
          });
      } catch (err) {
        m.reply(`${err}`);
      }
    };

    switch (fileType) {
      case 'audio':
        await downloadMp3(videoLink);
        break;
      case 'video':
        await downloadMp4(videoLink);
        break;
      default:
        throw 'Invalid media type. Specify either "audio" or "video".';
    }
  } catch (err) {
    m.reply(`${err}`);
  }
};

handler.help = ['yt'].map((v) => v + ' <YouTube Video Link> <audio/video>');
handler.tags = ['downloader'];
handler.command = /^yt$/i;
handler.exp = 0;
handler.limit = 3000;
handler.level = 11;

export default handler;