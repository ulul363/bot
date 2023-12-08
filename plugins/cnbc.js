import fetch from 'node-fetch';
import axios from 'axios';
import { cnbcindonesia } from '@bochilteam/scraper';
import { generateWAMessageFromContent } from '@adiwajshing/baileys';
import fs from 'fs';

let handler = async (m, { conn, text }) => {
  let src = await cnbcindonesia();
  let json = src[Math.floor(Math.random() * src.length)];
  let caption = `*_Info cnbc_*\n`;
  caption += `*judul:* ${json.title}\n`;
  caption += `*url:* ${json.link}\n`;
  caption += `*Tanggal:* ${json.date}\n`;
  caption += `*label:* ${json.label}\n`;
  caption += `*subtitle:* ${json.subtitle}`;
  await conn.sendMessage(m.chat, {
    image: { url: json.image },
    mimetype: 'image/png',
    caption: caption.trim(),
    contextInfo: {
        externalAdReply: {
            title: 'akaza',
            body: 'Powered by akaza',
            thumbnailUrl: "https://telegra.ph/file/c8307b624a194c2a056b8.jpg",
            sourceUrl: global.sgc,
            mediaType: 1,
            showAdAttribution: false,
            renderLargerThumbnail: true
        }
    }
}, { quoted: m })
}

handler.help = ['cnbc'];
handler.tags = ['info'];
handler.command = /^(cnbc)$/i;

export default handler;