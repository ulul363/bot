let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Masukan namamu', m);

    await m.reply('Sedang Menebak...');


    let randomAge = Math.floor(Math.random() * 100) + 1;

    let hasil = `Namamu : ${text}\nUmurmu : ${randomAge}`;

    conn.reply(m.chat, hasil, m);
};

handler.help = ['tebakumur'].map((v) => v + ' <nama>');
handler.tags = ['fun'];
handler.command = /^(tebakumur)$/i;
handler.owner = false;
handler.exp = 0;
handler.limit = true;

export default handler;
