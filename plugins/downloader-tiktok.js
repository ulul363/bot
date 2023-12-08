import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, { conn, args }) => {
    if (!args[0]) {
        throw 'Uhm... URL-nya mana?';
    }

    try {
        await conn.reply(m.chat, 'Tunggu sebentar kak, video sedang di download', m);

        const tiktokData = await tryServer1(args[0]);

        if (!tiktokData) {
            throw 'Gagal mendownload video!';
        }

        const videoURL = tiktokData.video.noWatermark;

        const videoURLWatermark = tiktokData.video.watermark;

        let ppTiktok = '';
        if (tiktokData.author && tiktokData.author.avatar) {
            ppTiktok = tiktokData.author.avatar;
        }

        const infonya_gan = `Judul: ${tiktokData.title}\nUpload: ${tiktokData.created_at}\n\nSTATUS:\n=====================\nLike = ${tiktokData.stats.likeCount}\nKomen = ${tiktokData.stats.commentCount}\nShare = ${tiktokData.stats.shareCount}\nViews = ${tiktokData.stats.playCount}\nSimpan = ${tiktokData.stats.saveCount}\n=====================\n\nUploader: ${tiktokData.author.name || 'Tidak ada informasi penulis'}\n(${tiktokData.author.unique_id} - https://www.tiktok.com/@${tiktokData.author.unique_id})\nBio: ${tiktokData.author.signature}\nLagu: ${tiktokData.music.play_url}\nResolusi: ${tiktokData.video.ratio}\nFoto Profile: ${ppTiktok}`;

        if (videoURL || videoURLWatermark) {
            await conn.sendFile(m.chat, videoURL, 'tiktok.mp4', `Ini kak videonya\n\n${infonya_gan}`, m);
            setTimeout(async () => {
                await conn.sendFile(m.chat, videoURLWatermark, 'tiktokwm.mp4', `*Ini Versi Watermark*\n\n${infonya_gan}`, m);
                await conn.sendFile(m.chat, `${tiktokData.music.play_url}`, 'lagutt.mp3', 'ini lagunya', m);
            }, 5000);
        } else {
            throw 'Tidak ada tautan video yang tersedia.';
        }
    } catch (error1) {
        conn.reply(m.chat, `Error: ${error1}\n coba gunakan .tiktok2`, m);
    }
};

handler.help = ['tiktok'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(tiktok1|tt|tiktok|itiktok)$/i;

export default handler;

async function tryServer1(url) {
    let tiklydownAPI = `https://api.tiklydown.eu.org/api/download?url=${url}`;
    let response = await axios.get(tiklydownAPI);
    return response.data;
}
