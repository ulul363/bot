import { areJidsSameUser } from '@adiwajshing/baileys';

let handler = async (m, { conn, args, text, participants }) => {
  try {
    if (args.length < 1) return m.reply('Nomor siapa bang');
    let nomor = args[0];
    let target = `${nomor}@s.whatsapp.net`;
    await conn.groupParticipantsUpdate(m.chat, [target], 'add'); // Use 'groupParticipantsUpdate' to add a participant
    await m.reply('Done');
  } catch (error) {
    m.reply(`Gagal menambahkan orang dengan nomor ${args[0]}`);
    m.reply('Mencoba mengundang dengan link grup');
    let group = m.chat;
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0];
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup';
    let groupMetadata = await conn.groupMetadata(group);
    if (!groupMetadata) throw 'groupMetadata is undefined :\\';
    if (!('participants' in groupMetadata)) throw 'participants is not defined :(';
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.jid, conn.user.jid));
    conn.sendMessage(target, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group));
  }
};

handler.help = ['add', '+'].map(v => v + ' @user');
handler.tags = ['group'];
handler.command = /^(add|\+)$/i;

handler.admin = true;
handler.group = true;
handler.botAdmin = true;
handler.owner = false;

export default handler;