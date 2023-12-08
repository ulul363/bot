let handler = async (m, { conn, command, text, args }) => {
  let [tag, limit] = text.split('|');
  if (!tag || !limit) return m.reply(`Masukkan tag dan jumlah limit.\nContoh: .addlimit @akaza|100`);
  
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  
  let users = global.db.data.users;
  if (!users[who]) users[who] = {};
  if (!users[who].limit) users[who].limit = 0;
  
  users[who].limit += parseInt(limit);
  
  conn.reply(m.chat, `Berhasil menambah limit ${tag} sebesar ${limit}!`, m);
}

handler.help = ['addlimit']
handler.tags = ['owner']
handler.command = /^addlimit(user)?$/i
handler.rowner = true

export default handler