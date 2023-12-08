const rewards = {
    limit: 19000,
    money: 30000,
  } 
let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  for (let reward of Object.keys(rewards)) {
      if (!(reward in user)) continue
      user[reward] -= rewards[reward]}
      user.atm += 1;
  
  
let caption = `
SUCSES MEMBUAT ATM dengan level: ${user.atm}
MOHON DIJAGA BAIK BAIK
KAMU BISA CEK TOTAL SALDO KAMU DENGAN KETIK COMMAND .bank semakin besar level atm kamu maka akan makin besar pula uang yang bisa di tabung
`
  m.reply(caption)
  }
handler.help = ['beliatm']
handler.tags = ['main']
handler.command = /^(beliatm)$/i
handler.limit = 19000
handler.money = 30000
export default handler