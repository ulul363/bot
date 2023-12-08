import fetch from 'node-fetch';
import moment from 'moment-timezone';
let handler = async (m, { conn, text, command }) => {
  let nama = await conn.getName(m.sender);
  let img = getRandom(global.ALmdjpg)
  let img2 = getRandom(global.ALmdjpg)
  let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  
  let isPremium = global.db.data.users[m.sender].premium ? 'Yes' : 'No';
let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
  let caption = `
Halo ${nama}! Welcome To Menu AlMd
  ╭──────•›「 *Info User* 」
  │ • Limit: ${global.db.data.users[m.sender].limit}
  │ • Level: ${global.db.data.users[m.sender].level}
  │ • Exp: ${global.db.data.users[m.sender].exp}
  │ • Premium: ${isPremium}
  ╰──────•›「 *LIST* 」
  │ • *.menu*
  │ • *.allmenu*
  │ • *.stickermenu*
  │ • *.downloadermenu*
  │
  ╰──────•›「 *DESKRIPSI* 」
  │ Bot WhatsApp Al Md adalah bot WhatsApp dengan fitur melimpah yang akan sangat membantu hidup kalian menjadi lebih menyenangkan.
  │ Total Fitur Akazamd: ${totalf}
  │ Owner akan selalu Mengupdate bot ini.
  │ Jika kalian ingin donasi silahkan pencet di bawah
  │ ${global.psaweria}
  │
  ╰──────•›「 *MADE WITH AKAZA* 」
  `;

  conn.sendMessage(m.chat, {
    image: await (await fetch(img2)).buffer(),
    mimetype: 'image/png',
    caption: caption.trim(),
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        title: 'Menu By Akaza',
        body: `uptime: ${muptime}`,
        thumbnail: await (await fetch(img)).buffer(),
        mediaUrl: img,
        sourceId: 'https://api.alandikasaputra.repl.co',
        sourceUrl: global.psaweria
      }
    }
  }, { quoted: m });
};

handler.command = ['menu', 'help', '?'];
handler.tags = ['main'];
handler.help = ['menu', 'help', '?'];

export default handler;

function getRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, '0')).join('');
}
