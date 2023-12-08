import yargs from 'yargs'
import cfonts from 'cfonts'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { createRequire } from 'module'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import { createInterface } from 'readline';
import server from './uptime.js'

const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
const { name, author } = require(join(__dirname, './package.json'))
const randomColor = ['black', 'red', 'green', 'yellow', 'blue'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
//Terima kasih buat zyckobot md untuk animasi di bawah ini🗿 gw gk pandai anjir buat animasi yang bisa buat animasi terminal keren chat gw 6283843362676
const spc1 = '      '
const spc2 = ''
const spc3 = '      '
const spc4 = '   '
const spc5 = '   '
const spc6 = '   '
const spc7 = '   '
const text = `
[Created by: Botz Create By Akazamd]
           
    < =============================== >
${spc1}[•]Hai         : Akaza Md 
${spc2}[•]Version     : 13.0.0
${spc3}[•]Library      : whiskeysockets/baileys
${spc4}[•]Status      : Online!
${spc5}[•]Owner       : Akazamd
${spc6}[•]Author      : Akazamd
${spc7}[•]Base Ori    : Games Wa Bot Md
    < =============================== >`;


say(text, {
  font: "console",
  align: "center",
  colors: [`${apiColor}`]
})
say("AKAZAMD ©akaza", {
  font: "console",
  align: "center",
  colors: [`blue`]
})
say("START RUN", {
  font: "shade",
  align: "center",
  colors: [`${apiColor}`]
})
var isRunning = false

function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [join(__dirname, file), ...process.argv.slice(2)]
  say([process.argv[0], ...args].join(' '), { font: 'console', align: 'center', gradient: ['red', 'magenta'] })
  setupMaster({ exec: args[0], args: args.slice(1) })
  let p = fork()
  p.on('message', data => {
    console.log('dapat', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('[❗]Exited with code:', code)
    if (code !== 0) return start(file)
    watchFile(args[0], () => {
      unwatchFile(args[0])
      start(file)
    })
  })
}

// Code by akazamd

const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test']) {
  let timer;
  rl.question('Pilih aksi (1: qrcode, 2: pairing code) \n Note Jika tidak ada pilihan dalam 14detik maka akan otomatis dijalankannya main.js): ', (answer) => {
    clearTimeout(timer);
    if (answer === '1') {
      start('main.js')
    } else if (answer === '2') {
      start('code.js')
    } else {
      console.log('Pilihan tidak valid.')
      start('code.js')
    }
  });

  timer = setTimeout(() => {
    start('code.js');
    rl.close();
  }, 20000);
}
