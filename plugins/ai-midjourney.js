import fetch from "node-fetch";

const handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
  let query = "Input text, e.g., `.midjourney man kissing`";
  let text;

  if (args.length >= 1) {
    text = args.join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else {
    throw query;
  }

  try {
    m.reply(wait);

    const img = await Draw(text);

    conn.sendFile(m.chat, img, text, `*[ Result ]*\n${text}`, m);
  } catch (e) {
    throw e;
  }
};

handler.help = ["midjourney"];
handler.tags = ["ai"];
handler.command = /^midjourney$/i;

export default handler;

async function Draw(prompt) {
  const response = await fetch("https://api-inference.huggingface.co/models/prompthero/openjourney-v4", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${global.hugging}`,
    },
    body: JSON.stringify({ inputs: prompt }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return buffer;
}