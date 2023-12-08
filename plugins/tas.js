import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let target = global.db.data.users[who]
  
  let str = `
  *Nama = ${target.name}*
  *Limit = ${target.limit}*
  *Uang = ${target.money}*
  *Exp = ${target.exp}*
  *Level = ${target.level}*

`.trim()
m.reply(str)
}
handler.help = ['tas']
handler.tags = ['main']
handler.command = /^(tas)$/i
handler.register = false
export default handler