import fetch from "node-fetch";
let handler = async (m, { conn, text }) => {
  let usr = global.db.data.users[m.sender]
  let [text1, text2] = text.split("|");
  if (!text1 || !text2) throw "Masukkan kedua parameter teks contoh akaza|md";
  usr.limit -= 4000
  usr.money -= 1000
  m.reply("Proses...");
  let res = `https://skizo.tech/api/theo-phong?text1=${text1}&text2=${text2}&apikey=${global.xzn}`;
  conn.sendFile(m.chat, res, "logi.jpg", `Nih kak`, m, false);
};
handler.help = ["logo"].map((v) => v + " <text1|text2>");
handler.tags = ["logo"];
handler.command = /^(logo)$/i;
handler.register = false;

handler.limit = 4000;
handler.level = 5;
export default handler;