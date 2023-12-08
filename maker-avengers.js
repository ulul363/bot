import fetch from "node-fetch";

const rewards = {
  limit: 2000,
  money: 5000,
};

let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender];
  let [text1, text2] = text.split('|');
  
  if (!text1 || !text2) {
    throw 'Teksnya Mana Kak?\nContoh: .avengers teks1|teks2';
  }

  for (let reward of Object.keys(rewards)) {
    if (reward in user) {
      user[reward] -= rewards[reward];
    }
  }

  m.reply("Sedang memproses...");

  try {
    let res = await fetch(`https://api.alandikasaputra.repl.co/scraper-textpro2?text=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&link=https://textpro.me/create-3d-avengers-logo-online-974.html`);
const result = await res.buffer();
    if (result) {
      conn.sendMessage(m.chat, {
        image: result,
        caption: "Hasil Avengers Logo Maker"
      });
    } else {
      throw "Gagal membuat logo Avengers. Coba lagi nanti.";
    }
  } catch (error) {
    throw "Terjadi kesalahan saat membuat logo Avengers. Coba lagi nanti.";
  }
};

handler.help = ["avengers"].map((v) => v + " <text1>|<text2>");

handler.tags = ["maker"];

handler.command = /^(avengers)$/i;

handler.register = true;

handler.limit = 2000;

handler.money = 5000;

export default handler;