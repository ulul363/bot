let handler = async (m, { conn, text }) => {

    conn.sendAkazaFile(m.chat, './audio/sepuh.mp3', m)
  
  }
handler.customPrefix = /(sepuh|puh|ayolahpuh|sepuuh|puhpuh)/i
handler.command = new RegExp
  
handler.mods = false

export default handler