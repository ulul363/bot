const rewards = {
    limit: 99999,
    money: 10000,
    exp: 2000,
    premiumtime: 30,
    
  }
  const cooldown = 31536000000
  let handler = async (m,{ conn} ) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.yearlyclaim < cooldown) throw `kamu sudah klaim tahunan tunggu *${((user.yearlyclaim + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) {
      if (!(reward in user)) continue
      user[reward] += rewards[reward]
      text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
    }
    conn.reply(m.chat, text.trim(), m)
    user.yearlyclaim = new Date * 1
  }
  handler.help = ['yearly']
  handler.tags = ['main']
  handler.command = /^(yearly)$/i
  
  handler.cooldown = cooldown
  
  export default handler