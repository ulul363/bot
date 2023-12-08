import axios from 'axios';

let handler = async (m, { conn, command }) => {
  try {
    let random = await axios.get("https://candaan-api-h590oa540-ardhptr21.vercel.app/api/image");
    let json = random.data;
    let data = json.data; 
    let randomImage = data[Math.floor(Math.random() * data.length)]; 


    let randomImageUrl = randomImage.url;
    let randomImageSource = randomImage.source;

await conn.sendFile(m.chat, randomImageUrl, m)
  } catch (error) {
    console.error(error);

  }
};
handler.command = ['randomgambar']
handler.tags = ['fun']
export default handler;
