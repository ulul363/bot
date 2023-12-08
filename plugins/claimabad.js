//3153600000

const rewards = {
    limit: 1992828,
    money: 91738,
    exp: 150000,
   premiumtime: 30,
   diamond: 4,
    
  }
  const cooldown = 3153600000000
  let handler = async (m,{ conn} ) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.abad < cooldown) throw `kamu sudah klaim hadiah perabad lu tunggu *${((user.abad + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) {
      if (!(reward in user)) continue
      user[reward] += rewards[reward]
      text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
    }
    conn.reply(m.chat, text.trim(), m)
    user.abad = new Date * 1
  }
  handler.help = ['claimabad']
  handler.tags = ['main']
  handler.command = /^(claimabad)$/i
  
  handler.cooldown = cooldown
  
  export default handler