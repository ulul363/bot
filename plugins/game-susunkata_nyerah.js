let handler = async (m, { conn }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (!(id in conn.susunkata)) throw false
                clearTimeout(conn.susunkata[id][3])
            delete conn.susunkata[id]
            m.reply('aowkakwiwk gitu doang dek')
}
handler.command = /^nyerah$/i
handler.limit = true
export default handler