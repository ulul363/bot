import fetch from 'node-fetch';
let handler = async (m, { conn, usedPrefix, text, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom());
    let name = await conn.getName(who);

    let [q, include_nsfw] = text.split('|').map(param => param.trim());

    if (!q) {
        throw `Example usage: ${usedPrefix}${command} query|include_nsfw(optional)`;
    }

    let includeNsfwParam = include_nsfw === '1' ? '&include_nsfw=1' : '';
const username = "AlanSaputraAndika"
  const pass = "akazamd123"
    let res = await fetch(`https://api.imgflip.com/search_memes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${pass}&q=${encodeURIComponent(q)}${includeNsfwParam}`,
    });

    let result = await res.json();

    if (result.success) {
        let memes = result.data.memes;
        if (memes.length > 0) {
            let meme = memes[0]; // Assuming you want to use the first meme in the response
            return conn.sendMessage(m.chat, { image: { url: meme.url }, caption: `Result from ${command}` }, { quoted: m });
        } else {
            throw 'No memes found for the given query.';
        }
    } else {
        throw 'Failed to search memes. Please check your credentials and try again.';
    }
};

handler.help = ['mememaker'];
handler.tags = ['maker'];
handler.command = /^(mememaker)$/i;

export default handler;
