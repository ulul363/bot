import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `Author Bot `, 'akazamd', `alansuper123tree@gmail.com`, ` Indonesia`, `https://api.alandikasaputra.repl.ck`, `Owner`],
    [`${sepuh}`, `${await conn.getName(sepuh+'@s.whatsapp.net')}`, `SPUH`, `NO SPAM OR BAN MY SEPUH`, `s`, `Indonesia`, ` https://github.com/AKAZAMD`, `GITHUB`]
  ], fkontak)
  await m.reply(`Hello @${m.sender.split(`@`)[0]} jangan macam macam dengan owner ku kalo tidak nanti gw blok lu`)
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler