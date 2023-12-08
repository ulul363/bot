import fs from 'fs'

let handler = async (m, { conn }) => {
  let teks = 'donasi'
  let dana = global.pdana
  let pulsa = global.ppulsa
  let gopay = global.pgopay
  let nomorOwner = global.nomorown.map(number => `wa.me/${number}`).join(', '); // Menampilkan semua nomor owner dengan awalan "wa.me"
  let anu = `Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney Pulsa 〕
├ Dana : ${dana}
├ Gopay : ${gopay}
├ Pulsa : ${pulsa}
└────
Berapapun donasi kalian akan sangat berarti 👍

Terimakasih Buat Yang Sudah Donasi
[Manfaat Donasi]
1: Kalian Bantu Saya Untuk Makin Semangat Kembangin Bot Ini
2: Kalian Akan Dapat Pahala Amin🙏
3: Dengan Kalian Donate Diatas 10k Maka Kalian Akan Mendapatkan
Sc Hwv22 No Scan
4: Jika Donasi Diatas 15 Maka Akan Mendapatkan Sc Hwv22 + Sc V8 No Scan

Contact Owner:
${nomorOwner} (Owner)

**`
  m.reply(anu)
}

handler.help = ['donasi'];
handler.tags = ['main'];
handler.command = /^(donasi|donate)$/i;

export default handler;
