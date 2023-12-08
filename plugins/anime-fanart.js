import fetch from 'node-fetch';
import fs from 'fs';

let handler = async (m, { conn, command }) => {
  let url = `https://api.lolhuman.xyz/api/random/art?apikey=${global.lolkey}`;
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  fs.writeFileSync('fanart.jpg', buffer);


  conn.sendFile(m.chat, 'fanart.jpg', 'nih fanartnya', wm, m);
};

handler.command = /^(fanart)$/i;
handler.tags = ['anime'];
handler.help = ['fanart'];
handler.limit = true;
handler.premium = true;
handler.register = true;
export default handler;
