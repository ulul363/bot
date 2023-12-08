import yts from 'yt-search';
import fs from 'fs';
import ytdl from 'ytdl-core';
import axios from 'axios';
import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix }) => {
  try {
    if (!text) throw `Use it like this: ${usedPrefix}play2 naruto blue bird`;

    m.reply('Searching...');
    let ya = await yts(text);
    let url = ya.videos[0].url;
    global.db.data.users[m.sender].limit -= 3000;
    let vid = ya.videos[0]; // Fix: Change 'search' to 'ya'
    let { author, title, thumbnail, duration, views, timestamp } = vid; // Fix: Change 'viewH' to 'views'
    let hasil = await ytmp3(url);
    await conn.sendMessage(m.chat, { audio: await (await fetch(hasil.audio)).buffer() }, { quoted: m }); // Fix: Add '.buffer()' after 'await fetch(hasil.audio)'
  } catch (err) {
    m.reply(`${err}`);
  }
};

handler.help = ['play2'].map((v) => v + ' <search>');
handler.tags = ['downloader'];
handler.command = /^play2$/i;
handler.exp = 0;
handler.limit = 3000;
handler.level = 11;

export default handler;

async function ytmp3(link) {
  const url = 'https://tomp3.cc/api/ajax/search';
  const data = `query=${link}=downloader`;

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Accept: '*/*',
    'X-Requested-With': 'XMLHttpRequest',
  };

  try {
    const response = await axios.post(url, data, { headers });
    const title = response.data.title;
    const mp4Links = response.data.links.mp4;

    const result = {
      title: title,
      '240p': mp4Links['133'].k,
      '360p': mp4Links['18'].k,
      '1080p': mp4Links['137'].k,
      audio: response.data.links.mp3.mp3128.k,
    };

    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
