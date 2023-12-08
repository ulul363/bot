let handler = async (m, { conn }) => {
  conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
  let id = m.chat
  var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"~_*©辛AKAZAMD*_~\n𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await conn.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < hawemod.length; i++) {
/*await delay(10)*/
await conn.sendMessage(m.chat, {text: hawemod[i], edit: key });//PESAN LEPAS
}
  if (!(id in conn.tebakbendera)) throw false
  let json = conn.tebakbendera[id][1]
  clearTimeout(conn.tebakbendera[id][3])
            delete conn.tebakbendera[id]
            m.reply(`aowkskw dah nyerah jawabanya adalah ` + json.name)
}

handler.command = /^nyerahben$/i

export default handler