//coded by akazamd
import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) throw 'Text mana bre';
    let user = global.db.data.users[m.sender];
    
    if (user.limit < 1000) throw 'Limit anda kurang untuk memakai fitur ini, minimal 1000';
    user.limit -= 1000;

    if (user.money < 1000) throw 'Uang lu kurang bijir, minimal 1000';
    
    let tmb = `${global.thumb}`;
    
    let zaa = await fetch(`https://api.alandikasaputra.repl.co/api-bardai?text=${text}`);
    let res = await zaa.json();
    m.reply(res.result)
};

handler.help = ['bard-ai'];
handler.command = /^(bard|bard-ai)$/i;
handler.register = true;

export default handler;