import { getAggregateVotesInPollMessage } from '@adiwajshing/baileys';
let handler = async (m, { conn, text }) => {
    let [poll, opt] = text.split("|");
    if (text.split("|").length < 2) {
        return await m.reply(
            `Contoh penggunaan .poll text nya|opsi1, opsi2, opsi3`
        );
    }
    let options = [];
    for (let i of opt.split(',')) {
        options.push(i);
    }
    await conn.sendMessage(m.chat, {
        poll: {
            name: poll,
            values: options
        }
    });
};

handler.help = ['poll'];
handler.tags = ['group'];
handler.command = /^((create)?poll(ing)?)$/i;
handler.group = true;

export default handler;
