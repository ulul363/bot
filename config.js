/*
𝐀𝐮𝐭𝐡𝐨𝐫 : AKAZA_MD
Base : game wabot md dan eliana md md
🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    let wktugeneral = `${wibh}:${wibm}:${wibs}`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
global.psaweria = 'https://saweria.co/Akazamd'
global.owner = [['6283851350292', 'akazamd', true], ['62838513502922', 'AKAZA_MD', true],
["62838433626763", "akazamd", true]]
global.mods = [
['6283851350292']
]
global.ALmdjpg = [
    'https://i.ibb.co/TgSLJxr/e5d98b50efd91b142977a.jpg',
    'https://telegra.ph/file/5db2f0315bcd4c3ab665a.jpg',
    'https://telegra.ph/file/dd14e4d2a3428e12fed9e.jpg',
    'https://telegra.ph/file/58c9c00997f02581d4985.jpg',
    'https://telegra.ph/file/0fba7b34da419a8bb8641.jpg',
    'https://telegra.ph/file/9475f8bc15bba57619854.jpg',
    'https://telegra.ph/file/3d0ab88fdfe1b479f956c.jpg',
    'https://telegra.ph/file/91353b2e74e98ac5295ef.jpg',
    'https://telegra.ph/file/1a34e5b57d41fa94946c1.jpg',
    'https://telegra.ph/file/021e2c345a85c8d65d286.jpg',
    'https://telegra.ph/file/c9e1ca86920bd6a47e0e9.jpg',
    'https://telegra.ph/file/f03249cea7c2933634765.jpg',
    'https://telegra.ph/file/7ace723061593dceeaaaa.jpg',
    'https://telegra.ph/file/a5179f53c894696c012e4.jpg',
    'https://telegra.ph/file/20e56a270477950e6395a.jpg',
    'https://telegra.ph/file/275b2e42f1a39d51d94d8.jpg',
    'https://telegra.ph/file/3074faccea40fd53f658c.jpg',
    'https://telegra.ph/file/29cae013f55fdbc7f7123.jpg',
    'https://telegra.ph/file/6877f86f35d68bd8c10a4.jpg'
]
global.prems = ['6283843362676']
global.nomorbot = [['6283843362676']]
global.nomorown = [
  ['6283843362676'],
  ['62882021343518'],
      ['6283851350292']
] // Tambain no mor lu disini
global.typemenu = 'v3'//Set the type menu in command .setmenu v/ v1 v2 v3 v4
global.autoTyping = true // ubah ke true buat autotyping kalo gamau false mati ye aowkwkwkw
global.antilink = true
global.autoread = true
global.readMore = readMore
global.author = 'AKAZA_MD'
global.namebot = 'AKAZA_MD'
global.wm = '© AKAZA_MD BY AKAZAMD'
global.watermark = wm
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.stickpack = `Sticker Dibuat dengan ${namebot}\ngithub.com/AKAZAMD\n\nAKAZABotz\n${owner}`
global.stickauth = `© AKAZA_BOT_MD BY AKAZAMD`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`

global.nameown1= 'AKAZA'
global.nameown2 = 'AKAZA'
global.Linkgc = 'https://chat.whatsapp.com/KNco6fyw228K9qFVvoIPSH'
global.lynk = 'https://chat.whatsapp.com/KNco6fyw228K9qFVvoIPSH'
global.sgc = 'https://chat.whatsapp.com/KNco6fyw228K9qFVvoIPSH'
global.listsewa = '*├ 10 Hari IDR 5.000\n├ 15 Hari IDR 8.000\n├ 15+5 Hari IDR 13.000\n├ 30 Hari IDR 20.000*'
global.LyAtas1 = '*☰ ━━━ ❨*'
global.LyAtas2 = '*❩ ━━┄┈ •⟅*'
global.Ly = '*┃*'
global.lybwh = '*┗━━┈┈ ⳻⳻*'
global.sym = '*◈▻*'
global.sym2 = '*➭*'
global.dmenut = '❏═┅═━–〈' //
global.dmenub = '*┊↬*' //body
global.dmenub2 = '┊' //
global.dmenuf = '┗––––––––––✦' 
global.dashmenu = '*┅═┅═❏ *HALAMAN UTAMA* ❏═┅═┅*'
global.cmenut = '*❏––––––『*' 
global.cmenuh = '*』––––––*' 
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '*\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     *'
global.pmenus = '✦'
global.htki = '––––––『',
	global.htka = '』––––––',
	global.haki = '┅━━━═┅═❏',
	global.haka = '❏═┅═━━━┅',
	global.lopr = 'Ⓟ',
	global.lolm = 'Ⓛ',
	global.htjava = '❃'
global.hsquere = ['*⛶*']


global.sig = '-'
global.sgh = 'https://github.com/Aal-oss' //github
global.sdc = '-' //discord
global.snh = '-'
global.nomorwa = '6283843362676'
global.site = 'api.alandikasaputra.repl.co'
global.sepuh = [['62882021343518']]
global.stiker_wait = 'sek🗿...'
global.wait = 'Please Wait...'
global.eror = 'Error bjir aowkwkw'
global.benar = 'Bener'
global.salah = 'mayan lah🗿'
global.dikit = "Kurang dikit padahal🗿"
global.readMore = readMore
global.author = 'AKAZA_MD'
global.namebot = 'AKAZA_MDV13'
global.wm = '© AKAZA_MD_V13 BY AKAZAMD'
global.watermark = wm
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.stickpack = `Sticker Dibuat Oleh Akazabotz\n${owner}`
global.stickauth = `© AKAZA_BOT_MD BY AKAZAMD`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`
global.multiplier = 200
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🗿',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}
/*============= DONASI =============*/
global.pdana = '6283843362676'
global.povo = '-'
global.pgopay = '083843362676'
global.plinkaja = '-' //link aja
global.ppulsa = '083843362676'
global.ppulsa2 = '083843362676'
global.saweria = 'https://saweria.co/Akazamd'
global.openai = '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'  //api key bisa didapatkan dari https://openai.com/api/
global.lolkey = 'd08ee7b5f60be15286356e40' //buy API at https://api.lolhuman.xyz
global.fg = 'H6MoiQTj'//buy di https://api-fgmods.ddns.net/ 
global.fg2 = 'HVxCizzv'// buy di https://api-fgmods.ddns.net/ 
global.lankey = 'HYoauZFG' //buy API at https://api.lannn.me/
global.botcahx = 'ueaAzx8P' //https://api.botcahx.live/
global.uptime = 'u2216792-9a23a0f8d019389b5caec37f' // Masukin APIKEY uptimerobot kamu disini ===== https://uptimerobot.com/dashboard?ref=website-header#mySettings
global.xzn = 'akazaa' //daftar sendiri jika key habis https://xzn.wtf/
global.xyro = '2x9PQXO6iX' //https://api.xyroinee.xyz/
global.ryzen = 'd2d8bf10'
global.dani = "sk-1yzeip66wyvu089kj"
//kalo mau work ambil apikei di https://api.ryzendesu.com/
global.hugging = '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'
//kalo ini mah no limit
global.oni = 'iqYPEC6DlJTZ' //ambil apikey di oni-chan.my.id
global.APIs = {
  // name: 'https://website'
  lol: 'https://api.lolhuman.xyz',
akaza: "https://api.alandikasaputra.repl.co",
  zn : 'https://xzn.wtf',
  erde: 'https://api.erdwpe.com',
  xyro : 'https://api.xyroinee.xyz' 
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.zahwazein.xyz': 'zenzkey_8bb60993ae',
    'https://api.xteam.xyz': 'cristian9407',
    'https://api.lolhuman.xyz': 'RyHarJR',
    'https://api.itsrose.site': 'Rs-RyHarJR',
    'https://api.alandikasaputra.repl.co': 'namalu22'
}

global.thumb = 'https://telegra.ph/file/c8307b624a194c2a056b8.jpg' 
global.imagebot = 'https://telegra.ph/file/c8307b624a194c2a056b8.jpg'
global.giflogo = 'https://telegra.ph/file/c8307b624a194c2a056b8.jpg'
global.thumbs = ['https://telegra.ph/file/c8307b624a194c2a056b8.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/c8307b624a194c2a056b8.jpg'
]

global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.fotonya1 = 'https://telegra.ph/file/c8307b624a194c2a056b8.jpg' 
global.fotonya2 = 'https://telegra.ph/file/c8307b624a194c2a056b8.jpg' 
global.hwaifu = ['https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg']
global.thumblvlup = [
  'https://telegra.ph/file/c8307b624a194c2a056b8.jpg',
  'https://telegra.ph/file/6bc4e87932d7ea57b79ef.jpg',
  'https://telegra.ph/file/bc2302ee38daa46c094ea.jpg',
  'https://telegra.ph/file/c552a9fb2848811247f82.jpg'
]

global.dtu = 'INSTAGRAM'
global.urlnya = "-"
global.dtc = 'CALL OWNER'
global.phn = '083843362676'

/*============= JANGAN DIUBAH =============*/
global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/c8307b624a194c2a056b8.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.magenta("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})