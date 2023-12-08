import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import fs from 'fs';
import { youtubedl } from '@bochilteam/scraper';
const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) {
    throw `Gunakan contoh ${usedPrefix}${command} naruto blue bird`;
  }

  m.reply('Mencari...');

  let ini = await ytdown(text)
  let caption = `Hasil
_*Judul:* ${ini.title}
_*DESKRIPSI:*_
${ini.desk}

*_© AKAZAMD_*
`;

  await conn.sendMessage(m.chat, {
    video: { url: `${ini.result}` },
    mimetype: 'video/mp4',
    caption: caption.trim(),
    contextInfo: {
      externalAdReply: {
        title: 'akaza',
        body: 'Powered by akaza',
        thumbnailUrl: `${ini.thumb}`,
        sourceUrl: `${v}`,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      },
    },
  }, { quoted: m });
};

handler.command = /^(playv|playvid|playvideo)$/i;
handler.help = ["playv <judul>"];
handler.tags = ['downloader'];
handler.register = true;
handler.premium = true;

export default handler;
async function ytdown(text) {
  const data = await yts(text)
  const linknya = data.videos[0].url
  const datanya = await youtubedl(linknya)
  const sd = await datanya.video['360p'].download()
  const hd = await datanya.video['720p'].download()
  const audio = await datanya.audio['128kbps'].download()
  const datai = {
    result: {
      id: datanya.id,
      thumb: datanya.thumbnail,
      title: datanya.title,
      sd: sd,
      hd: hd,
      audio: audio
    }
  }
  console.log(datai)
  return datai
}
