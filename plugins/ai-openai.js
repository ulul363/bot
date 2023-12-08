import OpenAI from 'openai';
import fetch from 'node-fetch';
import { generateWAMessageFromContent } from '@adiwajshing/baileys';
import fs from 'fs';

let handler = async (m, { conn, text, participants }) => {
  try {
    if (!text) return m.reply('Mau nanya apaan?');

    let user = global.db.data.users[m.sender];
    if (user.limit < 5000) return m.reply('Limit Anda kurang untuk memakai fitur ini. Fitur ini memiliki harga lebih mahal yaitu 5000 limit.\n\nGunakan .bard untuk akses OpenAI gratis.');
    user.limit -= 5000;

    if (!global.openai) throw 'API key not found. Please provide a valid OpenAI API key.';

    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateInfo = now.toLocaleDateString('id-ID', options);

    const name = conn.getName(m.sender);
    const developer = '6283843362676';

    const openai = new OpenAI({
      apiKey: global.openai,
    });

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `info: kamu mengetahui bahwa waktu saat ini adalah ${dateInfo}
info: kamu mengetahui bahwa setiap hari Minggu adalah hari libur untuk pelajar
info: kamu tahu kalo tag dan nama aku adalah = @${m.sender.split('@')[0]}
info: kamu memiliki semua pengetahuan dari 2023 
pertanyaan: ${text}`,
        },
        {
          role: 'system',
          content: 'kamu adalah gpt-3.5-turbo',
        },
      ],
    });

    await conn.sendMessage(m.chat, {
      text: response.choices[0].message.content,
      contextInfo: {
        mentionedJid: participants.map(a => a.id),
        externalAdReply: {
          title: 'Akazamd',
          body: 'Chat OpenAI by akazamd',
          thumbnailUrl: global.thumb,
          sourceUrl: global.sgc,
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });

  } catch (error) {
    console.error(error);
    await m.reply(`Terjadi kesalahan dalam menjalankan fitur AI: ${error}`);
  }
};

handler.help = ['ai', 'openai'];
handler.tags = ['ai'];
handler.command = /^(ai|openai)$/i;
handler.register = true;
handler.premium = true;
handler.limit = true;

export default handler;