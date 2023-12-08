let handler = async (m, { conn, command, text, args }) => {
  let [item, jumlah] = text.split('|');
  if (!item || !jumlah) return m.reply(`Masukkan item dan jumlah.\nContoh: .beli gold|10`);

  let hargaPerItem;
  const harga = {
    diamond: 5000, 
    iron: 3000,
    gold: 4000,
    atm: 1000,
    level: 1000,
    emerald: 10000,
    armor: 4000,
  };

  if (harga[item]) {
    hargaPerItem = harga[item] * jumlah;
  } else {
    return m.reply('Item yang dimasukkan tidak valid.');
  }

  let user = global.db.data.users[m.sender];

  if (user.money < hargaPerItem) {
    return m.reply('Maaf, Anda tidak memiliki cukup uang untuk membeli item ini.');
  }

  // Simpan jumlah item langsung dalam data pengguna
  if (user[item]) {
    user[item] += parseInt(jumlah);
  } else {
    user[item] = parseInt(jumlah);
  }

  user.money -= hargaPerItem;

  conn.reply(m.chat, `Berhasil membeli ${jumlah} ${item} dengan harga ${hargaPerItem} money!`, m);
}

handler.help = ['beli'];
handler.tags = ['rpg'];
handler.command = /^beli?$/i;

export default handler;