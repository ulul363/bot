import fetch from 'node-fetch';
const rewards = {
    limit: 60000,
    money: 50000,
  } 
let handler = async (m, { conn, args, text }) => {
        let user = global.db.data.users[m.sender]
    let [text1, text2] = text.split('|');
    if (!text1 || !text2) return m.reply(`Teksnya Mana Kak?\nContoh: .pubg teks1|teks2`)
    for (let reward of Object.keys(rewards)) {
      if (!(reward in user)) continue
      user[reward] -= rewards[reward]}
	m.reply('tunggu lagi proses\nNOTE FITUR INI DIHARGAI 60000limit dan 5000money')
    let meme = `https://api.erdwpe.com/api/photooxy/pubg?text=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
    let res = await fetch(meme);
    if (!res.ok) throw await res.text();
    let img = await res.buffer();
    await conn.sendFile(m.chat, img, 'gambar.jpeg', 'no dah selesai');
}

handler.help = ['pubg <teks1|teks2>']
handler.tags = ['maker']
handler.command = /^pubg$/i
handler.limit = 60000
handler.money = 50000

export default handler;