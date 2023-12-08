import fetch from 'node-fetch';
let handler = async (m, { conn, command }) => {
  let name = await conn.getName(m.sender);
  let usr = global.db.data.users[m.sender];
  let level = usr.level;
  let exp = usr.exp;
  let limit = usr.limit;
  let img = getRandom(global.ALmdjpg);
  let img2 = getRandom(global.ALmdjpg);
  let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  
  let isPremium = global.db.data.users[m.sender].premium ? 'Yes' : 'No';
  let _muptime;

  if (process.send) {
    process.send('uptime');
    _muptime = await new Promise(resolve => {
      process.once('message', resolve);
      setTimeout(resolve, 1000);
    }) * 1000;
  }

  let muptime = clockString(_muptime);

  let caption = `
*Halo ${name}* ✨

*🌟 Info User 🌟*
• Level: ${level}
• Exp: ${exp}
• Limit: ${limit}
• Premium: ${isPremium}

*🚀 Welcome To List AI Al Md 🚀*
  • .ai
  • .za
  • .bard
  
*🕒 Uptime: ${muptime}*

*🎨 Menu By Akaza 🎨*
[Source](https://api.alandikasaputra.repl.co)
[Support](global.psaweria)
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
        body: `Uptime: ${muptime}`,
        thumbnail: await (await fetch(img)).buffer(),
        mediaUrl: img,
        sourceId: 'https://api.alandikasaputra.repl.co',
        sourceUrl: global.psaweria
      }
    }
  }, { quoted: m });
};

handler.help = handler.command = ['aimenu', 'menuai'];
export default handler;
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️* \n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function getRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}