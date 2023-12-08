import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args, participants }) => {
        let nomor = args[0];
    if (!nomor) return m.reply('Nomor siapa bang');
    let target = `${nomor}@s.whatsapp.net`;
    await conn.groupParticipantsUpdate(m.chat, [target], 'promote'); // Use 'groupParticipantsUpdate' to add a participant
    await m.reply('Done');
    m.reply('Succes')

}
handler.help = ['promote nomor']
handler.tags = ['owner']
handler.command = /^(promote)$/i

handler.owner = true
handler.group = true
handler.botAdmin = true

export default handler