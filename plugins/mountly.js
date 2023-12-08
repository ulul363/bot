const rewards = {
    limit: 999,
    money: 100,
  }
  const cooldown = 604800000
  let handler = async (m,{ conn} ) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.mingguclaim < cooldown) throw `kamu sudah klaim mingguan tunggu *${((user.mingguclaim + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) {
      if (!(reward in user)) continue
      user[reward] += rewards[reward]
      text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
    }
    conn.reply(m.chat, text.trim(), m)
    user.mingguclaim = new Date * 1
  }
  handler.help = ['mountly']
  handler.tags = ['main']
  handler.command = /^(mountly)$/i
  
  handler.cooldown = cooldown
  
  export default handler