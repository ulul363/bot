import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://api.lolhuman.xyz/api/random/faktaunik?apikey=RyHar'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result) throw json
 
  conn.sendButton(m.chat, `${json.result}`, wm, [['N E X T', '.tahugasih']], m)
}
handler.help = ['tahugasih']
handler.tags = ['internet']
handler.command = /^(taugasih|tahugasih)$/i
handler.limit = true
export default handler