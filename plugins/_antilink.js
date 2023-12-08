const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;

export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0;

    if (!m.isGroup || !global.antilink) return !1;

    let chat = global.db.data.chats[m.chat];
    let bot = global.db.data.settings[this.user.jid] || {};
    const isGroupLink = linkRegex.exec(m.text);
    let hapus = m.key.participant;
    let bang = m.key.id;

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
            if (m.text.includes(linkThisGroup)) return !0;
        }

        await conn.sendMessage(m.chat, { text: '*Group link detect!* ' + (isBotAdmin ? '' : '\n\n_Bot not admin_  t_t') }, m, { contextInfo: { mentionedJid: [hapus] } });

        if (isBotAdmin && bot.restrict) {
            return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus } });
        } else if (!bot.restrict) {
            return m.reply('*Anda Atmin Anda Aman :v!*');
        }
    }

    return !0;
}
