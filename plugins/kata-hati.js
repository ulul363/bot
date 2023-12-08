let handler = async (m, { conn, args, usedPrefix, command }) => {
  let kalimat = [
    "Kata adalah alat yang kuat untuk menyampaikan pikiran dan perasaan.",
    "Dalam dunia ini, kata-kata memiliki kekuatan untuk menginspirasi atau melukai orang lain.",
    "Saat kita berbicara, kita harus memilih kata-kata dengan bijak.",
    "Terkadang, satu kata bisa memiliki makna yang mendalam.",
    "Kata-kata indah dapat mengubah mood dan suasana hati seseorang.",
    "Jika kita menggunakan kata dengan kasar, itu bisa menyakiti perasaan orang lain.",
    "Sebuah cerita dimulai dengan kata pertama dan berakhir dengan kata terakhir.",
    "Kata-kata adalah jendela ke dalam pikiran dan perasaan seseorang.",
    "Kita dapat membangun atau merusak hubungan dengan kata-kata yang kita pilih.",
    "Mari jaga agar kata-kata kita selalu memancarkan kebaikan dan kebijaksanaan."
  ];

  let kalimatAcak = kalimat[Math.floor(Math.random() * kalimat.length)];
  conn.reply(m.chat, kalimatAcak, m)
}

handler.command = ['katahati']
handler.tags = ['fun']
handler.help = ['katahati']

export default handler