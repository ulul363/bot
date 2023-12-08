import axios from 'axios';
import fetch from 'node-fetch';

let handler = async (m, { conn, command }) => {
    try {
        let url = await axios.get('https://candaan-api-h590oa540-ardhptr21.vercel.app/api/text/random');
        let res = url.data;
        let caption = `
Random Text Candaan
hasil: ${res.data}
`;
        await conn.sendMessage(m.chat, caption, m);
    } catch (axiosError) {
        console.error('Error using Axios:', axiosError);

        try {
            let response = await fetch('https://candaan-api-h590oa540-ardhptr21.vercel.app/api/text/random');
            if (response.ok) {
                let data = await response.json();
                let caption = `
Random Text Candaan
hasil: ${data.data}
`;
                await conn.sendMessage(m.chat, caption, m);
            } else {
                throw new Error('Gagal mengambil data dengan Fetch');
            }
        } catch (fetchError) {
            console.error('Error using Fetch:', fetchError);
            await conn.sendMessage(m.chat, 'Terjadi kesalahan saat mengambil data dengan baik Axios maupun Fetch.', m);
        }
    }
};

handler.command = /^(meme)$/i;
handler.tags = ['internet'];
handler.help = ['meme'];

export default handler;
