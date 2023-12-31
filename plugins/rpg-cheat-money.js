const rewards = {
  money: 9999999999,
}
const cooldown = 1
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendMessage(m.chat, `*––––––『 DAILY 』––––––*\n${text.trim()}`, m)
  user.lastclaim = new Date * 1
}
handler.command = /^(cheatmoney)$/i

handler.owner = true
handler.cooldown = cooldown

export default handler