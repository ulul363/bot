let handler = async (m, { conn, command, args }) => {
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
   let user = global.db.data.users[m.sender]
     if (user.money < 10000) return m.reply('Uang kamu tidak mencukupi. Minimal 10000')
     
     let deductedMoney = user.money
     let limitIncrease = deductedMoney / 2
     
     user.money -= deductedMoney
     user.limit += limitIncrease
   
     m.reply(`Uang sebesar ${deductedMoney} telah ditukar dengan tambahan limit sebesar ${limitIncrease}.`)
}

handler.command = ['buyall']
handler.tags = ['rpg']
export default handler