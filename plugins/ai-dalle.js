import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: global.openai,
});

const handler = async (m, { conn, text, command }) => {
  try {
    if (!text) throw 'Membuat gambar dari AI.\n\nContoh:\n.dalle women,strong|high\n\nCreate image from AI\nExample:\n.dalle women,strong|high';

    const [prompt, options] = text.split('|');
    const size = options === 'high' ? '1024x1024' : options === 'medium' ? '512x512' : options === 'Low' ? '256x256' : '512x512';

    const wait = 'Please wait...'; // Define the "wait" message here

    await m.reply(wait);
    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: size,
    });

      conn.sendFile(m.chat, response['data'][0]['url'], text);
  } catch (error) {
    console.error(error);
    m.reply(error.message || 'An error occurred.');
  }
};

handler.help = ['dalle <prompt>'];
handler.tags = ['ai'];
handler.command = /^(dalle)$/i;

handler.premium = false;
handler.limit = true;
handler.register = true;

export default handler;