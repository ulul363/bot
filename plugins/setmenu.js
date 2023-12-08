import '../config.js';
let handler = async (m, { conn, text }) => {
 if (!text) return m.reply(`Mau Pilih Yang Mana?\n1. V1\n2. V2\n3. V3`)
global.typemenu = `${text}`
let caption = `*Succses*
 Ganti Type menu
Versi Menu Sekarang ${global.typemenu}`;
await conn.sendMessage(m.chat, {
    image: { url: "https://telegra.ph/file/8911d7c14f947ad0b8f49.jpg" },
    mimetype: 'image/png',
    caption: caption.trim(),
    contextInfo: {
        externalAdReply: {
            title: 'akaza',
            body: 'Powered by akaza',
            thumbnailUrl: "https://telegra.ph/file/c8307b624a194c2a056b8.jpg",
            sourceUrl: global.sgc,
            mediaType: 1,
            showAdAttribution: false,
            renderLargerThumbnail: true
        }
    }
}, { quoted: m })
}
handler.tags = ['owner'];
handler.owner = true;
handler.command = ['setmenu', 'menuset'];
handler.help = ['setmenu'];
export default handler