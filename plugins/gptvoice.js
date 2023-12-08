import OpenAI from 'openai';
import { generateWAMessageFromContent } from "@adiwajshing/baileys";
import gtts from 'node-gtts'
import { join } from 'path'
import { readFileSync, unlinkSync } from 'fs'; 

const rewards = {
    limit: 36000,
    money: 25000,
} 

const defaultLang = 'id'

const handler = async (m, { conn, text }) => {
    let user = global.db.data.users[m.sender]
    if (!text) throw "Mau nanya apaan?\nHarga fitur = 36000 limit dan 25000 money";
    for (let reward of Object.keys(rewards)) {
        if (!(reward in user)) continue
        user[reward] -= rewards[reward]
    }
    m.reply('mencari jawaban\nNOTE FITUR INI DIHARGAI 36000 LIMIT DAN 25000 MONEY')
    const openai = new OpenAI({
  apiKey: global.openai, 
});
    const response = await openai.completions.create({
        model: "text-davinci-003",
        prompt: text,
        temperature: 0,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0
    });
    const answer = response.choices[0].text;
    const lang = defaultLang;
    const audio = await tts(answer, lang, 'male'); 
    conn.sendFile(m.chat, audio, m );
};

handler.help = ['aivn'];
handler.tags = ['ai'];
handler.command = /^(gptvoice|aivn)$/i;
handler.premium = false;
handler.limit = 36000
handler.money = 25000

export default handler;

async function tts(answer, lang = 'id', gender = 'male') {
    console.log(lang, answer)
    return new Promise((resolve, reject) => {
        try {
            let tts = gtts(lang, { gender }); 
            let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
            tts.save(filePath, answer, () => {
                resolve(readFileSync(filePath)) 
                unlinkSync(filePath) 
            })
        } catch (e) { reject(e) }
    })
}