import { youtubedl } from '@bochilteam/scraper';
//coded by akazamd
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Urlnya Mana Bang? contoh .ytmp4 linknya';
  m.reply('Tunggu sebentar...');
  let v = args[0];
  const data = await youtubedl(`${v}`);
    let caption = `Ytmp4 by akazamd\n${data.title}\n${data.duration}`;
  const videoUrl = await data.video['360p'].download(); 
  
  conn.sendMessage(m.chat, {
                        video: {
                            url: videoUrl
                        },
                        caption: `noh`,
                        fileLength: "999",
                        viewOnce: false
                    }, {
                        quoted: m
                    })
}

handler.command = /^ytmp4$/i;
handler.help = ["ytmp4 <link>"];
handler.tags = ['downloader'];
handler.register = true;

export default handler;