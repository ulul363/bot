let handler = async (m, { conn, command, text, args }) => {
  let [tag, exp] = text.split('|');
  if (!tag || !exp) return m.reply(`Masukkan tag dan jumlah limit.\nContoh: .addexp @akaza|100`);
  
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  
  let users = global.db.data.users;
  if (!users[who]) users[who] = {};
  if (!users[who].exp) users[who].exp = 0;
  
  users[who].exp += parseInt(exp);
  
  conn.reply(m.chat, `Berhasil menambah exp ${tag} sebesar ${exp}!`, m);
}

handler.help = ['addexp']
handler.tags = ['owner']
handler.command = /^addexp(user)?$/i
handler.rowner = true

export default handler