var handler = async (m, { conn, args }) => {
    let input = args[0]; // Mengambil input sebagai string lengkap
    if (!input) return m.reply('Masukkan nomor|idgc');
    
    let [nomor, idgc] = input.split('|'); // Membagi input menjadi nomor dan idgc
    if (!nomor || !idgc) return m.reply('Format yang Anda masukkan salah, gunakan nomor|idgc');
    
    let target = `${nomor}@s.whatsapp.net`;
    const groupId = idgc;
    let caption = `owner ku menyuruh mengeluarkan ${target}`
    try {
        await conn.sendMessage(groupId, caption, m)
        await conn.groupParticipantsUpdate(groupId, [target], "remove")
        m.reply(`Berhasil mengeluarkan nomor ${nomor} dari grup dengan ID ${groupId}`);
    } catch (error) {
        console.error(error);
        m.reply(`Gagal mengeluarkan nomor ${nomor} dari grup dengan ID ${groupId}`);
    }
}

handler.help = ['kik'].map(v => 'o' + v + ' nomor|idgc');
handler.tags = ['owner'];
handler.command = /^(kik)$/i;

handler.owner = true;
handler.group = false;
handler.botAdmin = false;

export default handler;