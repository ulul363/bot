//https://api.akuari.my.id/textpro/transformer?text=Bot%20Ari
import fetch from "node-fetch";
const rewards = {
  limit: 2000,
  money: 5000,
};
let handler = async (m, { conn, text, }) => {
let user = global.db.data.users[m.sender];
  if (!text) throw "Masukkan Parameter";

 for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue;
    user[reward] -= rewards[reward];
  }
  m.reply("proses..");

  let res = `https://api.akuari.my.id/textpro/transformer?text=${text}`;

  conn.sendFile(m.chat, res, "logi.jpg", `Nih kak`, m, false);

};

handler.help = ["trans"].map((v) => v + " <text>");

handler.tags = ["logo"];

handler.command = /^(trans)$/i;

handler.register = true



handler.limit = 2000
handler.money = 5000



export default handler