import axios from 'axios'
import sharp from 'sharp'

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0';

async function generateLocation() {
    const url = 'https://www.google.com/maps?q=Jawa+Timur&output=embed';
    
    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': userAgent
            }
        });
        const imgBuffer = response.data;
        return imgBuffer;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const handler = async (m, { conn }) => {
    conn.reply(m.chat, "Tunggu sebentar yah, sedang diminta peta nya...", m);

    try {
        const imgBuffer = await generateLocation();
        conn.sendMessage(m.chat, { image: imgBuffer, caption: "Lokasi Jawa Timur\n\nhttps://www.google.com/maps?q=Jawa+Timur" }, { quoted: m });
    } catch (error) {
        conn.reply(m.chat, "Maaf, terjadi kesalahan saat meminta peta. Silakan coba lagi nanti.", m);
    }
};

handler.help = ['lokas']
handler.tags = ['tools']
handler.command = /^(lokas)$/i

export default handler