import { youtubedl } from '@bochilteam/scraper';
//coded by akazamd
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Urlnya Mana Bang? contoh .ytv 360p|linknya';
  m.reply('Tunggu sebentar...');
  let v = args[0];
  const data = await youtubedl(`${v}`);

  let caption = `Ytv by akazamd\n${data.title}\n${data.duration}`;
  const videoUrl = await data.video['360p'].download(); 
  
  conn.sendMessage(m.chat, {
                        video: {
                            url: videoUrl
                        },
                        caption: `Yang free mah kek gini aowkwkwkk`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
};
handler.tags = ['ytv'];
handler.command = ['ytv'];
export default handler;