import axios from 'axios';

var handler = async (m, { conn, text }) => {
  if (!text) throw `*Masukan Judul Manga Yang Ingin Kamu Cari !*`;
  conn.reply(m.chat, 'Sedang mencari manga... Silahkan tunggu', m);

  try {
    const response = await axios.get(`https://api.jikan.moe/v4/manga?q=${text}`);
    if (response.status !== 200) throw 'Tidak Ditemukan';

    const json = response.data;
    const {
      chapters,
      url,
      type,
      score,
      scored,
      scored_by,
      rank,
      popularity,
      members,
      background,
      status,
      volumes,
      synopsis,
      favorites,
    } = json.data[0];
    const judul = json.data[0].titles.map((jud) => `${jud.title} [${jud.type}]`).join('\n');
    const xnuvers007 = json.data[0].authors.map((Xnuvers007) => `${Xnuvers007.name} (${Xnuvers007.url})`).join('\n');
    const genrenya = json.data[0].genres.map((xnvrs007) => `${xnvrs007.name}`).join('\n');

    const animeingfo = `📚 Title: ${judul}
📑 Chapter: ${chapters}
✉️ Transmisi: ${type}
🗂 Status: ${status}
😎 Genre: ${genrenya}
🗃 Volumes: ${volumes}
🌟 Favorite: ${favorites}
🧮 Score: ${score}
🧮 Scored: ${scored}
🧮 Scored BY: ${scored_by}
🌟 Rank: ${rank}
🤩 Popularitas: ${popularity}
👥 Members: ${members}
⛓️ Url: ${url}
👨‍🔬 Author: ${xnuvers007}
📝 Background: ${background}
💬 Sinopsis: ${synopsis}
`;
    conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'manga.jpg', `*MANGA INFO*\n` + animeingfo, m);
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
};

handler.help = ['mangainfo <manga>'];
handler.tags = ['anime'];
handler.command = /^(mangainfo)$/i;

export default handler;
