import fetch from 'node-fetch'
import fs from 'fs'
let timeout = 180000
let money = 5000
let limit = 100
let xp = 3000
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, ' *Masih Ada Soal Yang Belu Terjawab* ', conn.susunkata[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/AKAZAMD/AKAZAMDBotz/main/scraper/susunkata.json')).json();
    let json = src[Math.floor(Math.random() * src.length)];
let caption = `
${json.soal}

Tipe : ${json.tipe}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}suska untuk bantuan
mau nyerah? ketik .nyerah
Bonus: ${money} Money
Limit: ${limit} Limit
Xp: ${xp} Xp
`.trim()
    conn.susunkata[id] = [
        await conn.reply(m.chat, caption, m),
        json, money,
        setTimeout(() => {
            if (conn.susunkata[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.susunkata[id][0])
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata|sskata/i
handler.group = false

export default handler