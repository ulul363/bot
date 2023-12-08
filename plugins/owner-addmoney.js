let handler = async (m, { conn, command, text, args }) => {
  let [tag, money] = text.split('|');
  if (!tag || !money) return m.reply(`Masukkan tag dan jumlah money.\nContoh: .addlimit @akaza|100`);
  
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  
  let users = global.db.data.users;
  if (!users[who]) users[who] = {};
  if (!users[who].money) users[who].money = 0;
  
  users[who].money += parseInt(money);
  
  conn.reply(m.chat, `Berhasil menambah money ${tag} sebesar ${money}!`, m);
}

handler.help = ['addmoney']
handler.tags = ['owner']
handler.command = /^addmoney(user)?$/i
handler.rowner = true

export default handler