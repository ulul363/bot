import { youtubedl } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args }) => {
  if (args[0]) return m.reply('please input link youtube ')
  let ytdl = youtubedl
  const inchat = m.chatq
  let hasil = await ytdl(args[0])
  let caption = `*-Downloader Youtube Dl-*
  *|Judul: ${hasil.title}*
  *|Id: ${hasil.id}*`
 await conn.sendMessage(m.chat, {
    audio: { url: hasil.audio['128kpbs'].download() },
    mimetype: 'audio/mp3',
    contextInfo: {
        externalAdReply: {
            title: 'akaza',
            body: caption.trim(),
            thumbnailUrl: hasil.thumbnail,
            sourceUrl: args[0],
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true
        }
    }
}, { quoted: m })
}
handler.help = handler.command = ['ytmp3', 'downloaderytmp3']
handler.tags = ['downloader', 'fun']
export default handler