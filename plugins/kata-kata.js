let handler = async (m, { conn, args, usedPrefix, command }) => {
  let kalimat = [
  "Setiap hari adalah kesempatan baru untuk menggapai impianmu.",
  "Kegagalan adalah batu loncatan menuju kesuksesan.",
  "Jangan pernah menyerah pada impianmu, teruslah berjuang.",
  "Percayalah pada dirimu sendiri, kamu lebih kuat dari yang kamu kira.",
  "Ketika kamu merasa lelah, ingatlah mengapa kamu memulai.",
  "Keberhasilan dimulai dari langkah pertama, jadi mulailah sekarang.",
  "Jadilah sumber inspirasi bagi orang lain.",
  "Kejarlah impianmu dengan tekun dan penuh semangat.",
  "Tidak ada yang tidak mungkin jika kamu berusaha keras.",
  "Kamu adalah pencipta takdirmu sendiri.",
  "Berani menghadapi tantangan adalah kunci kesuksesan.",
  "Jangan sia-siakan waktu, gunakanlah dengan bijak.",
  "Kamu mampu melewati segala cobaan yang datang.",
  "Kesuksesan adalah hasil dari kerja keras dan tekad yang kuat.",
  "Pikirkan positif, dan segalanya akan menjadi mungkin.",
  "Kamu adalah pemenang sejati.",
  "Jangan takut untuk gagal, itu adalah bagian dari proses belajar.",
  "Selalu bersyukur atas apa yang kamu miliki.",
  "Tetap fokus pada tujuanmu, dan jangan terpengaruh oleh hal lain.",
  "Kamu memiliki potensi yang luar biasa.",
  "Ketika kamu mencoba, kamu memiliki peluang untuk sukses.",
  "Pantang menyerah adalah kunci keberhasilan.",
  "Impianmu adalah peta jalan menuju masa depanmu.",
  "Berjuanglah untuk menjadi versi terbaik dari dirimu sendiri.",
  "Jangan bandingkan dirimu dengan orang lain, kamu unik.",
  "Ketika kamu bekerja keras, hasilnya akan sepadan.",
  "Percayalah pada proses, semua akan berjalan dengan baik.",
  "Kamu adalah sumber kekuatanmu sendiri.",
  "Hidup ini indah, nikmatilah setiap momennya.",
  "Semangatmu adalah kuncinya, jangan pernah kehilangannya."
  ];

  let kalimatAcak = kalimat[Math.floor(Math.random() * kalimat.length)];
  conn.reply(m.chat, kalimatAcak, m)
}

handler.command = ['kata-kata']
handler.tags = ['fun']
handler.help = ['katakata']

export default handler