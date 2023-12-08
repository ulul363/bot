import fetch from "node-fetch";
const rewards = {
  limit: 2000,
  money: 5000,
};

let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender];
  if (!text) throw "Masukkan Parameter";

  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue;
    user[reward] -= rewards[reward];
  }
  m.reply("Proses...");

  try {
    let res = await fetch(`https://api.alandikasaputra.repl.co/scraper-textpro?text=${text}&link=https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html`);
    let image = await res.buffer();
    conn.sendMessage(m.chat, { image: image, caption: "Ini nih" }, m);
  } catch (error) {
    throw "Terjadi kesalahan saat mengambil gambar.";
  }
};

handler.help = ["neon"].map((v) => v + " <text>");
handler.tags = ["maker"];
handler.command = /^(neon)$/i;
handler.register = true;
handler.limit = 2000;
handler.money = 5000;

export default handler;