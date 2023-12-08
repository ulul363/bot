import fetch from 'node-fetch';
import axios from 'axios';
import { gempa } from '@bochilteam/scraper';
import { generateWAMessageFromContent } from '@adiwajshing/baileys';
import fs from 'fs';

let handler = async (m, { conn, text }) => {
  let src = await gempa();
  let json = src[Math.floor(Math.random() * src.length)];
  
  let warning = json.warning.join('\n');
  
  let caption = `*_Info Gempa_*\n`;
  caption += `*Lokasi:* ${json.location}\n`;
  caption += `*Warning:* ${warning}\n`;
  caption += `*Tanggal:* ${json.date}\n`;
  caption += `*Waktu:* ${json.time}\n`;
  caption += `*Lintang:* ${json.latitude}\n`;
  caption += `*Bujur:* ${json.longitude}\n`;
  caption += `*Magnitude:* ${json.magnitude}\n`;
  caption += `*Kedalaman:* ${json.depth}\n`;
  
  await conn.sendMessage(m.chat, {
    image: { url: "https://telegra.ph/file/8911d7c14f947ad0b8f49.jpg" },
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

handler.help = ['infogempa'];
handler.tags = ['info'];
handler.command = /^(infogempa|gempa)$/i;

export default handler;
