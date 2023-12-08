import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  const linknya = args[0]

  if (!args[0]) throw `Input *URL*`
  try {
    let p = await fetch(`https://xzn.wtf/api/download?url=${linknya}&apikey=${global.xzn}`)
    let v = await p.json()
    let o = v.url[0].url
    await m.reply(global.wait)
    await conn.sendFile(m.chat, o, '', global.wm, m)
  } catch (e) {
    console.log(e)
    m.reply(`Fitur error atau Otak pengguna error`)
  }
}

handler.help = ['aiodl'].map((v) => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(aio|aiodl)$/i

handler.register = true
handler.limit = -400

export default handler