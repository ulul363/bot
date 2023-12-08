import axios from 'axios';

async function ytdl(link) {
  try {
    const response = await axios.get(`https://youtube-dl.wave.video/info?url=${link}&type=video`);
    const data = response.data;

    const judul = data.title;
    const duration = data.duration;
    const idCreator = data.uploader_id;
    const penonton = data.view_count;
    const tmb = data.thumbnail;
    const format360p = data.formats.find(format => format.format_note.includes('360p'));
    const format720p = data.formats.find(format => format.format_note.includes('720p'));
    const format1080p = data.formats.find(format => format.format_note.includes('1080p'));
    const formatHDR = data.formats.find(format => format.format_note.includes('1080p'));

    const res = {
      status: 200,
      sd: format360p ? format360p.url : null,
      hd: format720p ? format720p.url : null,
      hdr: formatHDR ? formatHDR.url : null,
      thumb: tmb,
      'total-ditonton': penonton,
      judul: judul,
      idChanel: idCreator,
      durasi: duration,
    };

    console.log(res);
    return res;
  } catch (error) {
    console.error('Gagal mengambil data:', error);
  }
}

export { ytdl }