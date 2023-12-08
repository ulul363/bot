import fetch from "node-fetch";

const rewards = {
  limit: 2000,
  money: 5000,
};

let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender];
  let [text1, text2] = text.split('|');
  
  if (!text1 || !text2) {
    throw 'Teksnya Mana Kak?\nContoh: .logo3dmetal teks1|teks2';
  }

  for (let reward of Object.keys(rewards)) {
    if (reward in user) {
      user[reward] -= rewards[reward];
    }
  }

  m.reply("Sedang memproses...");

  try {
    let res = await fetch(`https://api.alandikasaputra.repl.co/scraper-textpro2?text=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&link=https://textpro.me/text-logo-3d-metal-galaxy-943.html`);
let result = await res.buffer();
    if (result) {
      conn.sendMessage(m.chat, {
        image: result,
        caption: "Logo 3D Metal"
      });
    } else {
      throw "Gagal membuat logo 3metal. Coba lagi nanti.";
    }
  } catch (error) {
    throw "Terjadi kesalahan saat membuat logo 3dmetal. Coba lagi nanti.";
  }
};

handler.help = ["logo3dmetal"].map((v) => v + " <text1>|<text2>");

handler.tags = ["maker"];

handler.command = /^(logo3dmetal)$/i;

handler.register = true;

handler.limit = 2000;

handler.money = 5000;

export default handler;