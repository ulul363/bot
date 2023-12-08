let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender

    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada dalam database'
    m.reply(`sisa ${global.db.data.users[who].limit}  Limit tersisa\nkurang? beli limit ke owner😁`)
}

handler.help = ['limit <@user>']
handler.tags = ['xp']
handler.limit = false
handler.command = /^(limit)$/i
export default handler
