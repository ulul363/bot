// let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
let dapat = (Math.floor(Math.random() * 1000))
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag Orang Yang Ingin Kamu Rampok'
  if (typeof db.data.users[who] == 'undefined') throw 'Pengguna Tidak Ada Didalam Database'
  let __timers = (new Date - global.db.data.users[m.sender].udahrampok)
  let nama = conn.getName(m.sender)
  let _timers = (3600000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  if (new Date - global.db.data.users[m.sender].udahrampok < 3600000){
  if (100 > users[who].koin) throw 'Orang Yang Kamu Tag, Tidak Memiliki Uang\nApakah Kamu Tidak Kasihan?'
  users[who].limit -= dapat * 1
  users[m.sender].money += dapat * 1
  global.db.data.users[m.sender].udahrampok = new Date * 1
  conn.reply(m.chat, `Berhasil Merampok Koinnya Dan Kamu Mendapatkan ${dapat} Koin`, m)
  conn.sendMessage(who, { text: `Kamu Telah Di Rampok Oleh ${nama} Dan Kehilangan ${dapat} Koin`})

}else conn.reply(m.chat, `Kamu Sudah Merampok Dan Berhasil Sembunyi , Tunggu ${timers} Untuk Merampok Lagi`, m)
}
handler.help = ['merampok']
handler.tags = ['havefun']
handler.command = /^(merampok|rampok)$/
handler.limit = true
handler.group = true

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}