let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0] || isNaN(args[0])) throw `Masukkan Angka Mewakili Jumlah Hari !\n*Misal : ${usedPrefix + command} 30*`

    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = Date.now()
    if (global.db.data.chats[who] && now < global.db.data.chats[who].expired) {
        delete global.db.data.chats[who].expired
    }
    global.db.data.chats[who].expired = now + jumlahHari
    conn.reply(m.chat, `Berhasil Menetapkan Hari Kadaluarsa Untuk Grup Ini Selama ${args[0]} Hari.\n\nHitung Mundur : ${msToDate(global.db.data.chats[who].expired - now)}`, m)
}
handler.help = ['addsewa']
handler.tags = ['owner']
handler.command = /^(addsewa)$/i
handler.rowner = true
handler.group = true

export default handler

function msToDate(ms) {
    let temp = Math.abs(ms);
    let days = Math.floor(temp / (24 * 60 * 60 * 1000));
    let daysms = temp % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = daysms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = hoursms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return (ms < 0 ? "-" : "") + days + " Hari " + hours + " Jam " + minutes + " Menit";
}