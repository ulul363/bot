import fetch from "node-fetch";
const rewards = {
  limit: 2000,
  money: 5000,
};
//yang ngatain kok pake api 
//asal lu tau ya deck rest api nya gw yang buatðŸ—¿
let handler = async (m, { conn, text, }) => {
let user = global.db.data.users[m.sender];
  if (!text) throw "Masukkan Parameter";

 for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue;
    user[reward] -= rewards[reward];
  }
  m.reply("proses..");

  let res = await fetch(`https://api.alandikasaputra.repl.co/scraper-textpro?text=${text}&link=https://textpro.me/neon-text-effect-online-879.html`);
let rus = await res.buffer();
  await conn.sendMessage(m.chat, {
          image: rus,
          caption: " Ni "
        });
};

handler.help = ["neon3"].map((v) => v + " <text>");

handler.tags = ["maker"];

handler.command = /^(neon3)$/i;

handler.register = true



handler.limit = 2000
handler.money = 5000



export default handler