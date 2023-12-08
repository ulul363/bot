// Note Buat Kalian Yang Mau Hapus Namaku Silahkan
// Tapi Tolong Jangan Hapus Nama Nama Yang Di Atas Namaku

import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `Thanks Too 
- Narutomo (Base-Sepuh)
- BochilGaming (Base-Sepuh)
- Ivan (Inpirasi)
- Jikarinka (Base utama)
- Eliana (base dua)
`;
	await conn.sendMessage(m.chat, { image: { url: `${global.thumb}` }, caption: tqto }, m)
}
handler.help = ['tqto']
handler.tags = ['main']
handler.command = /^(tqto)$/i;

export default handler;
