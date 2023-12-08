let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('Nomor siapa yang ingin Anda tendang? Contoh: .kick 6283843362676');
  

  const target = `${text.replace(/[^0-9]/g, '')}@s.whatsapp.net`;

  await conn.groupParticipantsUpdate(m.chat, [target], 'remove')

  await m.reply('Berhasil menendang pengguna');
}

handler.help = ['kick'].map(v => v + ' nomor');
handler.tags = ['group'];
handler.command = /^(kick)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
handler.owner = false;

export default handler;