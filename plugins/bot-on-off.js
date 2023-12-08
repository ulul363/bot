import fs from 'fs'

let handler = async (m, { conn, usedPrefix, isAdmin, isOwner, text }) => {
    if (m.isGroup) {
        switch (text) {
            case 'off': {
                global.db.data.chats[m.chat].isBanned = true
                global.db.data.users[m.chat].autolevelup = false
                global.db.data.users[m.chat].autoroleup = false
                conn.reply(m.chat, 'Bot telah dimatikan untuk grup ini semua fitur ridak akan bisa digunakan dalam gc ini', m)
                break
            }
            case 'on': {
                global.db.data.chats[m.chat].isBanned = false
                global.db.data.users[m.chat].autolevelup = true
                global.db.data.users[m.chat].autoroleup = true
                conn.reply(m.chat, 'Bot telah diaktifkan kembali untuk grup ini', m)
                break
            }
            default: {
                conn.reply(m.chat, `Silakan gunakan \`${usedPrefix}bot on\` untuk mengaktifkan bot atau \`${usedPrefix}bot off\` untuk menonaktifkannya.`, m)
                break
            }
        }
    } else {
        conn.reply(m.chat, `Perintah ini hanya bisa digunakan dalam grup. Silakan ketik ${usedPrefix}menu untuk melihat perintah yang tersedia.`, m)
    }
}

handler.help = ['bot [on/off]']
handler.tags = ['group']
handler.command = /^(bot|)$/i
handler.admin = false
handler.premium = true

export default handler