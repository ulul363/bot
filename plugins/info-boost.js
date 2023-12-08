import { performance } from 'perf_hooks';

let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
   let old = performance.now();
   let neww = performance.now();
   let speed = `${neww - old}`;
   let oh = [
   `*Berhasil mempercepat*\n*kecepatan saat ini adalah ${speed}*`,
   `*gagal mempercepat mohon di ulangi lagi`,
      `*Berhasil mempercepat*\n*kecepatan saat ini adalah ${speed}*`,
   `*gagal mempercepat mohon di ulangi lagi`,
      `*Berhasil mempercepat*\n*kecepatan saat ini adalah ${speed}*`,
   `*gagal mempercepat mohon di ulangi lagi`,
      `*gagal mempercepat mohon di ulangi lagi`,
         `*gagal mempercepat mohon di ulangi lagi`,
            `*gagal mempercepat mohon di ulangi lagi`
   ]
   let balas = oh[Math.floor(Math.random() * oh.length)];
   var hawemod = [
     "*AKAZAMD*《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"*AKAZAMD*《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
     "*AKAZAMD*《 ████▒▒▒▒▒▒▒▒》30%",
     "*AKAZAMD*《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
     "*AKAZAMD*《 ████▒▒▒▒▒▒▒▒》30%",
     "*AKAZAMD*《 ███████▒▒▒▒▒》50%",
     "*AKAZAMD*《 ██████████▒▒》80%",
     "*AKAZAMD*《 ███████▒▒▒▒▒》50%",
     "*GAGAL MENDAPATKAN DATA* \n*MENCOBA LAGI...*",
     "*AKAZAMD*《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
     "*AKAZAMD*《 ████▒▒▒▒▒▒▒▒》30%",
     "*AKAZAMD*《 ██████████▒▒》80%",
     "*AKAZAMD*《 ███████▒▒▒▒▒》50%",
     "*AKAZAMD*《 ████████████》100%",
     "_*©辛AKAZAMD*_~\nMEMUAT KECEPATAN.",
     "*AKAZAMD*《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
     "*AKAZAMD*《 ████▒▒▒▒▒▒▒▒》30%",
     "*AKAZAMD*《 ███████▒▒▒▒▒》50%",
     "*AKAZAMD*《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
     "*AKAZAMD*《 ████▒▒▒▒▒▒▒▒》30%",
     "*AKAZAMD*《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
     "*AKAZAMD*《 ████▒▒▒▒▒▒▒▒》30%",
     "*AKAZAMD*《 ███████▒▒▒▒▒》50%",
     "*AKAZAMD*《 ██████████▒▒》80%",
     "*AKAZAMD*《 ███████▒▒▒▒▒》50%",
     "*AKAZAMD*《 ██████████▒▒》80%",
     "*AKAZAMD*《 ████████████》100%",
     "*GAGAL MENDAPATKAN DATA* \n*MENCOBA LAGI...*",
     "*GAGAL MEREFRESH BOT, SEGERA MEMULAI ULANG*",
     "*MEMULAI AKSELERASI ULANG *",
     "*AKAZAMD*《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
     "*AKAZAMD*《 ████▒▒▒▒▒▒▒▒》30%",
     "*AKAZAMD*《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
     "*AKAZAMD*《 ████▒▒▒▒▒▒▒▒》30%",   
  "*AKAZAMD*《 ███████▒▒▒▒▒》50%",
     "*AKAZAMD*《 ██████████▒▒》80%",
     "*AKAZAMD*《 ███████▒▒▒▒▒》50%",
     "*GAGAL MENDAPATKAN DATA* \n*MENCOBA LAGI...*",
     "*AKAZAMD*《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
     "*AKAZAMD*《 ████▒▒▒▒▒▒▒▒》30%",
     "*membersikan sampah mohon tunggu*",
     "*AKAZAMD*《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
     "*AKAZAMD*《 ████▒▒▒▒▒▒▒▒》30%",
     "*AKAZAMD*《 ██████████▒▒》80%",
     "*DONE BANG*",
     "*AKAZAMD*《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
     "*AKAZAMD*《 ████▒▒▒▒▒▒▒▒》30%",
     "*AKAZAMD*《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
     "*AKAZAMD*《 ████▒▒▒▒▒▒▒▒》30%",
     "*AKAZAMD*《 ███████▒▒▒▒▒》50%",
     "*AKAZAMD*《 ██████████▒▒》80%",
     "*AKAZAMD*《 ███████▒▒▒▒▒》50%",
     "*AKAZAMD*《 ████████████》100%",
     // ... sisanya sesuai dengan data yang Anda inginkan
     `${balas}`
   ]
   let { key } = await conn.sendMessage(m.chat, {text: '*refreset*..'});//Pengalih isu

   for (let i = 0; i < hawemod.length; i++) {
     /*await delay(10)*/
     setTimeout(async () => {
       await conn.sendMessage(m.chat, {text: hawemod[i], edit: key});//PESAN LEPAS
     }, i * 1000);
   }
}

handler.help = ['boost', 'refresh'];
handler.tags = ['info'];
handler.command = /^boost|refresh/i;
handler.rowner = true;

export default handler;