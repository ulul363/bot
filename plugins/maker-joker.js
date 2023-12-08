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

  let res = await fetch(`https://api.alandikasaputra.repl.co/scraper-textpro?text=${text}&link=https://textpro.me/create-logo-joker-online-934.html`);
let ris = res.buffer();
  await conn.sendMessage(m.chat, {
          image: { url: ris },
          caption: " Ni "
        });
};

handler.help = ["joker"].map((v) => v + " <text>");

handler.tags = ["maker"];

handler.command = /^(joker)$/i;

handler.register = true



handler.limit = 2000
handler.money = 5000



export default handler