import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import './config.js';
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)

    resolve()

}, ms))
export async function handler(chatUpdate) {

    this.msgqueque = this.msgqueque || []

    if (!chatUpdate)

        return

    this.pushMessage(chatUpdate.messages).catch(console.error)

    let m = chatUpdate.messages[chatUpdate.messages.length - 1]

    

    global.img = 'https://telegra.ph/file/e4a2f4339da8a32ad20a1.jpg' 

    

    if (!m)

        return

    if (global.db.data == null)

        await global.loadDatabase()

    try {

        m = smsg(this, m) || m

        if (!m)

            return

        m.exp = 0

        m.limit = false

        try {

            // TODO: use loop to insert data instead of this

            let user = global.db.data.users[m.sender]

            if (typeof user !== 'object')

                global.db.data.users[m.sender] = {}

            if (user) {

                if (!isNumber(user.exp))

                    user.exp = 0

                if (!isNumber(user.limit))

                    user.limit = 10

                if (!isNumber(user.lastclaim))

                    user.lastclaim = 0

                if (!isNumber(user.pasangan))

                    user.pasangan = ''

                if (!('registered' in user))

                    user.registered = false

                if (!user.registered) {

                    if (!('name' in user))

                        user.name = m.name

                    if (!isNumber(user.age))

                        user.age = -1

                    if (!isNumber(user.regTime))

                        user.regTime = -1

                }

                if (!isNumber(user.afk))

                    user.afk = -1

                if (!('afkReason' in user))

                    user.afkReason = ''

                if (!('banned' in user))

                    user.banned = false

                if (!isNumber(user.warning))

                    user.warning = 0

                if (!isNumber(user.warn))

                    user.warn = 0

                if (!isNumber(user.level))

                    user.level = 0

             

                if (!('autolevelup' in user))

                    user.autolevelup = true



                if (!isNumber(user.money))

                    user.money = 0

                if (!isNumber(user.atm))

                    user.atm = 0

                if (!isNumber(user.fullatm))

                    user.fullatm = 0

                if (!isNumber(user.bank))

                    user.bank = 0

                if (!isNumber(user.health))

                    user.health = 100

                if (!isNumber(user.potion))

                    user.potion = 0

                if (!isNumber(user.trash))

                    user.trash = 0

                if (!isNumber(user.wood))

                    user.wood = 0

                if (!isNumber(user.rock))

                    user.rock = 0

                if (!isNumber(user.string))

                    user.string = 0

                if (!isNumber(user.petFood))

                    user.petFood = 0



                if (!isNumber(user.emerald))

                    user.emerald = 0

                if (!isNumber(user.diamond))

                    user.diamond = 0

                if (!isNumber(user.gold))

                    user.gold = 0

                if (!isNumber(user.iron))

                    user.iron = 0

                if (!isNumber(user.upgrader))

                    user.upgrader = 0



                if (!isNumber(user.common))

                    user.common = 0

                if (!isNumber(user.uncommon))

                    user.uncommon = 0

                if (!isNumber(user.mythic))

                    user.mythic = 0

                if (!isNumber(user.legendary))

                    user.legendary = 0

                if (!isNumber(user.superior))

                    user.superior = 0

                if (!isNumber(user.pet))

                    user.pet = 0



                if (!isNumber(user.horse))

                    user.horse = 0

                if (!isNumber(user.horseexp))

                    user.horseexp = 0

                if (!isNumber(user.cat))

                    user.cat = 0

                if (!isNumber(user.catexp))

                    user.catexp = 0

                if (!isNumber(user.fox))

                    user.fox = 0

                if (!isNumber(user.foxhexp))

                    user.foxexp = 0

                if (!isNumber(user.dog))

                    user.dog = 0

                if (!isNumber(user.dogexp))

                    user.dogexp = 0

                if (!isNumber(user.robo))

                    user.robo = 0

                if (!isNumber(user.roboxp))

                    user.roboxp = 0



                if (!isNumber(user.horselastfeed))

                    user.horselastfeed = 0

                if (!isNumber(user.catlastfeed))

                    user.catlastfeed = 0

                if (!isNumber(user.foxlastfeed))

                    user.foxlastfeed = 0

                if (!isNumber(user.doglastfeed))

                    user.doglastfeed = 0



                if (!isNumber(user.armor))

                    user.armor = 0

                if (!isNumber(user.armordurability))

                    user.armordurability = 0

                if (!isNumber(user.sword))

                    user.sword = 0

                if (!isNumber(user.sworddurability))

                    user.sworddurability = 0

                if (!isNumber(user.pickaxe))

                    user.pickaxe = 0

                if (!isNumber(user.pickaxedurability))

                    user.pickaxedurability = 0

                if (!isNumber(user.fishingrod))

                    user.fishingrod = 0

                if (!isNumber(user.fishingroddurability))

                    user.fishingroddurability = 0



                if (!isNumber(user.lastclaim))

                    user.lastclaim = 0

                if (!isNumber(user.lastadventure))

                    user.lastadventure = 0

                if (!isNumber(user.lastfishing))

                    user.lastfishing = 0

                if (!isNumber(user.lastdungeon))

                    user.lastdungeon = 0

                if (!isNumber(user.lastduel))

                    user.lastduel = 0
                    
                if (!('role' in user))
                    user.role = 'Bronze V'
                if (!('autoroleup' in user))
                    user.autoroleup = true
                    
                if (!isNumber(user.lastmining))

                    user.lastmining = 0

                if (!isNumber(user.lasthunt))

                    user.lasthunt = 0

                if (!isNumber(user.lastweekly))

                    user.lastweekly = 0

                if (!isNumber(user.lastmonthly))

                    user.lastmonthly = 0

                if (!isNumber(user.lastbunga))

                    user.lastbunga = 0

                if (!isNumber(user.note))

                    user.note = 0

                    

                if (!isNumber(user.premium))

                    user.premium = false

                if (!isNumber(user.premiumTime))

                    user.premiumTime = 0

                if (!isNumber(user.limitjoin))

                    user.limitjoin = 0

            } else

                global.db.data.users[m.sender] = {

                    exp: 0,

                    limit: 10,

                    lastclaim: 0,

                    registered: false,

                    name: m.name,

                    pasangan: '',

                    age: -1,

                    regTime: -1,

                    afk: -1,

                    afkReason: '',

                    banned: false,

                    warn: 0,

                    level: 0,

                    role: 'Beginner',

                    autolevelup: true,

                    money: 0,

                    bank: 0,

                    atm: 0,

                    fullatm: 0,

                    health: 100,

                    potion: 10,

                    trash: 0,

                    wood: 0,

                    rock: 0,

                    string: 0,



                    emerald: 0,

                    diamond: 0,

                    gold: 0,

                    iron: 0,

                    upgrader: 0,



                    common: 0,

                    uncommon: 0,

                    mythic: 0,

                    legendary: 0,

                    superior: 0,

                    pet: 0,



                    horse: 0,

                    horseexp: 0,

                    cat: 0,

                    catngexp: 0,

                    fox: 0,

                    foxexp: 0,

                    dog: 0,

                    dogexp: 0,



                    horselastfeed: 0,

                    catlastfeed: 0,

                    foxlastfeed: 0,

                    doglastfeed: 0,



                    armor: 0,

                    armordurability: 0,

                    sword: 0,

                    sworddurability: 0,

                    pickaxe: 0,

                    pickaxedurability: 0,

                    fishingrod: 0,

                    fishingroddurability: 0,

                    role: 'Bronze V',
                    autoroleup: true,

                    lastclaim: 0,

                    lastadventure: 0,

                    lastfishing: 0,

                    lastdungeon: 0,

                    lastduel: 0,

                    lastmining: 0,

                    lasthunt: 0,

                    lastweekly: 0,

                    lastmonthly: 0,

                    lastbunga: 0,

                    note: 0,

                    

                    premium: false,

                    premiumTime: 0,

                    limitjoin: 0,

                }

            let chat = global.db.data.chats[m.chat]

            if (typeof chat !== 'object')

                global.db.data.chats[m.chat] = {}

            if (chat) {

                if (!('isBanned' in chat))

                    chat.isBanned = false

                if (!('welcome' in chat))

                    chat.welcome = true

                if (!('detect' in chat))

                    chat.detect = false

                if (!('sWelcome' in chat))

                    chat.sWelcome = ''

                if (!('sBye' in chat))

                    chat.sBye = ''

                if (!('sPromote' in chat))

                    chat.sPromote = ''

                if (!('sDemote' in chat))

                    chat.sDemote = ''

                if (!('delete' in chat))

                    chat.delete = true

                if (!('antiLink' in chat))

                    chat.antiLink = false

                if (!('viewonce' in chat))

                    chat.viewonce = false

                if (!('antiBadword' in chat)) 

                    chat.antiBadword = false

                if (!('simi' in chat))

                    chat.simi = false

                if (!('nsfw' in chat))

                    chat.nsfw = false

                if (!('premnsfw' in chat))

                    chat.premnsfw = false

                if (!isNumber(chat.expired))

                    chat.expired = 0

            } else

                global.db.data.chats[m.chat] = {

                    isBanned: false,

                    welcome: true,

                    detect: false,

                    sWelcome: '',

                    sBye: '',

                    sPromote: '',

                    sDemote: '',

                    delete: true,

                    antiLink: false,

                    viewonce: false,

                    antiBadword: false,

                    simi: false,

                    expired: 0,

                    nsfw: false,

                    premnsfw: false,

                }

            let settings = global.db.data.settings[this.user.jid]

            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}

            if (settings) {

                if (!('self' in settings)) settings.self = false

                if (!('autoread' in settings)) settings.autoread = true
                if (!('autoTyping' in settings)) settings.autoTyping = true

                if (!('restrict' in settings)) settings.restrict = true

                if (!('jadibot' in settings)) settings.jadibot = false

                if (!('autorestart' in settings)) settings.autorestart = true

                if (!('restartDB' in settings)) settings.restartDB = 0

            } else global.db.data.settings[this.user.jid] = {

                self: false,

                autoread: true,

                jadibot: false,

                restrict: true,

                autorestart: true,

                restartDB: 0

            }

        } catch (e) {

            console.error(e)

        }

        if (opts['nyimak'])

            return

        if (!m.fromMe && opts['self'])

            return

        if (opts['pconly'] && m.chat.endsWith('g.us'))

            return

        if (opts['gconly'] && !m.chat.endsWith('g.us'))

            return

        if (opts['swonly'] && m.chat !== 'status@broadcast')

            return

        if (typeof m.text !== 'string')

            m.text = ''



        const botNumber = conn.user.jid;
const ownerNumbers = global.owner.map(([number]) => number.replace(/[^0-9]/g, '') + '@s.whatsapp.net');
const isROwner = [botNumber, ...ownerNumbers].includes(m.sender);

        const isOwner = isROwner || m.fromMe
const isMods = isOwner || global.mods.map(number => number.toString().replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);

        const isPrems = isROwner || db.data.users[m.sender].premiumTime > 0

        if (opts['queque'] && m.text && !(isMods || isPrems)) {

            let queque = this.msgqueque, time = 1000 * 5

            const previousID = queque[queque.length - 1]

            queque.push(m.id || m.key.id)

            setInterval(async function () {

                if (queque.indexOf(previousID) === -1) clearInterval(this)

                await delay(time)

            }, time)

        }



        if (m.isBaileys)

            return

        m.exp += Math.ceil(Math.random() * 10)



        let usedPrefix

        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]



        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}

        const participants = (m.isGroup ? groupMetadata.participants : []) || []

        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data

        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data

        const isRAdmin = user?.admin == 'superadmin' || false

        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?

        const isBotAdmin = bot?.admin || false // Are you Admin?



        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')

        for (let name in global.plugins) {

            let plugin = global.plugins[name]

            if (!plugin)

                continue

            if (plugin.disabled)

                continue

            const __filename = join(___dirname, name)

            if (typeof plugin.all === 'function') {

                try {

                    await plugin.all.call(this, m, {

                        chatUpdate,

                        __dirname: ___dirname,

                        __filename

                    })

                } catch (e) {

                    // if (typeof e === 'string') continue

                    console.error(e)

                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {

                        let data = (await conn.onWhatsApp(jid))[0] || {}

                        if (data.exists)

                            m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)

                    }

                }

            }

            if (!opts['restrict'])

                if (plugin.tags && plugin.tags.includes('admin')) {

                    // global.dfail('restrict', m, this)

                    continue

                }

            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix

            let match = (_prefix instanceof RegExp ? // RegExp Mode?

                [[_prefix.exec(m.text), _prefix]] :

                Array.isArray(_prefix) ? // Array?

                    _prefix.map(p => {

                        let re = p instanceof RegExp ? // RegExp in Array?

                            p :

                            new RegExp(str2Regex(p))

                        return [re.exec(m.text), re]

                    }) :

                    typeof _prefix === 'string' ? // String?

                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :

                        [[[], new RegExp]]

            ).find(p => p[1])

            if (typeof plugin.before === 'function') {

                if (await plugin.before.call(this, m, {

                    match,

                    conn: this,

                    participants,

                    groupMetadata,

                    user,

                    bot,

                    isROwner,

                    isOwner,

                    isRAdmin,

                    isAdmin,

                    isBotAdmin,

                    isPrems,

                    chatUpdate,

                    __dirname: ___dirname,

                    __filename

                }))

                    continue

            }

            if (typeof plugin !== 'function')

                continue

            if ((usedPrefix = (match[0] || '')[0])) {

                let noPrefix = m.text.replace(usedPrefix, '')

                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)

                args = args || []

                let _args = noPrefix.trim().split` `.slice(1)

                let text = _args.join` `

                

                command = (command || '').toLowerCase()

                let fail = plugin.fail || global.dfail // When failed

                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?

                    plugin.command.test(command) :

                    Array.isArray(plugin.command) ? // Array?

                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?

                            cmd.test(command) :

                            cmd === command

                        ) :

                        typeof plugin.command === 'string' ? // String?

                            plugin.command === command :

                            false



                if (!isAccept)

                    continue

                m.plugin = name

                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {

                    let chat = global.db.data.chats[m.chat]

                    let user = global.db.data.users[m.sender]

                    if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && chat?.isBanned)

                        return // Except this
                        if (name != 'owner-unbanuser.js' && user?.banned)

                        return

                }

                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner

                    fail('owner', m, this)

                    continue

                }

                if (plugin.rowner && !isROwner) { // Real Owner

                    fail('rowner', m, this)

                    continue

                }

                if (plugin.owner && !isOwner) { // Number Owner

                    fail('owner', m, this)

                    continue

                }

                if (plugin.mods && !isMods) { // Moderator

                    fail('mods', m, this)

                    continue

                }

                if (plugin.premium && !isPrems) { // Premium

                    fail('premium', m, this)

                    continue

                }

                if (plugin.group && !m.isGroup) { // Group Only

                    fail('group', m, this)

                    continue

                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin

                    fail('botAdmin', m, this)

                    continue

                } else if (plugin.admin && !isAdmin) { // User Admin

                    fail('admin', m, this)

                    continue

                }

                if (plugin.private && m.isGroup) { // Private Chat Only

                    fail('private', m, this)

                    continue

                }

                if (plugin.register == true && _user.registered == false) { // Butuh daftar?

                    fail('unreg', m, this)

                    continue

                }

                m.isCommand = true

                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command

                if (xp > 200)

                    m.reply('ngecit lu ya🧐')

                else
                    m.exp += xp

                if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {

                    this.reply(m.chat, `Limit kau abis dek, kontak owner untuk membeli atau claim limit daily kamu melalui *${usedPrefix}daily ${usedPrefix}weekly
                    ${usedPrefix}yearly*`, m)

                    continue // Limit habis

                }

                               if (!isPrems && plugin.money && global.db.data.users[m.sender].money < plugin.money * 1) {

                    this.reply(m.chat, `[❗] uang lu abis aiwkawk .claimabad untuk dapat hadiah besar*`, m)

                    continue // Limit habis

                    }

                if (plugin.level > _user.level) {

                    this.reply(m.chat, `[💬] Diperlukan level ${plugin.level} untuk menggunakan perintah ini\n*Level mu:* ${_user.level}`, m)

                    continue // If the level has not been reached

                }

                let extra = {

                    match,

                    usedPrefix,

                    noPrefix,

                    _args,

                    args,

                    command,

                    text,

                    conn: this,

                    participants,

                    groupMetadata,

                    user,

                    bot,

                    isROwner,

                    isOwner,

                    isRAdmin,

                    isAdmin,

                    isBotAdmin,

                    isPrems,

                    chatUpdate,

                    __dirname: ___dirname,

                    __filename

                }

                try {

                    await plugin.call(this, m, extra)

                    if (!isPrems)

                        m.limit = m.limit || plugin.limit || false

                } catch (e) {

                    // Error occured

                    m.error = e

                    console.error(e)

                    if (e) {

                        let text = format(e)

                        for (let key of Object.values(global.APIKeys))

                            text = text.replace(new RegExp(key, 'g'), 'hide')

                        if (e.name)

                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {

                                let data = (await conn.onWhatsApp(jid))[0] || {}

                                if (data.exists)

                                    m.reply(`*laport error pada Plugin:* ${m.plugin}\n* digunakan oleh:* ${m.sender}\n*di Chat:* ${m.chat}\n*command:* ${usedPrefix}${command} ${args.join(' ')}\n📄 *pesan error:*\n\n\`\`\`${text}\`\`\``.trim(), data.jid)

                            }

                        m.reply(text)

                    }

                } finally {

                    // m.reply(util.format(_user))

                    if (typeof plugin.after === 'function') {

                        try {

                            await plugin.after.call(this, m, extra)

                        } catch (e) {

                            console.error(e)

                        }

                    }

                    if (m.limit)

                        m.reply(+m.limit + ' ʟɪᴍɪᴛ ᴛᴇʀᴘᴀᴋᴀɪ ✔️')

                }

                break

            }

        }

    } catch (e) {

        console.error(e)

    } finally {

        if (opts['queque'] && m.text) {

            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)

            if (quequeIndex !== -1)

                this.msgqueque.splice(quequeIndex, 1)

        }

        //console.log(global.db.data.users[m.sender])

        let user, stats = global.db.data.stats

        if (m) {

            if (m.sender && (user = global.db.data.users[m.sender])) {

                user.exp += m.exp

                user.limit -= m.limit * 1

            }

            let stat

            if (m.plugin) {

                let now = +new Date

                if (m.plugin in stats) {

                    stat = stats[m.plugin]

                    if (!isNumber(stat.total))

                        stat.total = 1

                    if (!isNumber(stat.success))

                        stat.success = m.error != null ? 0 : 1

                    if (!isNumber(stat.last))

                        stat.last = now

                    if (!isNumber(stat.lastSuccess))

                        stat.lastSuccess = m.error != null ? 0 : now

                } else

                    stat = stats[m.plugin] = {

                        total: 1,

                        success: m.error != null ? 0 : 1,

                        last: now,

                        lastSuccess: m.error != null ? 0 : now

                    }

                stat.total += 1

                stat.last = now

                if (m.error == null) {

                    stat.success += 1

                    stat.lastSuccess = now

                }

            }

        }

        try {

            if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)

        } catch (e) {

            console.log(m, m.quoted, e)

        }

        if (global.autoread)
                await this.readMessages([m.key]).catch(() => {})
    }
if (global.autoTyping)
await this.sendPresenceUpdate('composing', m.chat)
}
export async function participantsUpdate({ id, participants, action }) {
    if (opts["self"] || this.isInit) return;

    if (global.db.data == null) {
        await loadDatabase();
    }

    const chat = global.db.data.chats[id] || {};
   
    switch (action) {
        case 'add':
            if (chat.welcome) {
                try {
                    let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata;
                    for (let user of participants) {
                        let pp = './pporang.png';
                        let ppgp = './pporang.png';
                        try {
                            pp = await this.profilePictureUrl(user, 'image');
                            ppgp = await this.profilePictureUrl(id, 'image');
                        } catch (e) {
                            console.error('Error fetching profile picture:', e);
                            throw e;
                        } finally {
                            let text = (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user')
                                .replace('@group', await this.getName(id))
                                .replace('@desc', groupMetadata.desc?.toString() || 'error')
                                .replace('@user', '@' + user.split('@')[0]);

                            let memberCount = groupMetadata.participants.length;
                            let name = await this.getName(user);
                            let gpname = await this.getName(id);
                            let metadata = await this.groupMetadata(id)
/*let welcomeApiUrl = `https://api.xyroinee.xyz/api/canvas/welcome?nama=${encodeURIComponent(name)}&member=${encodeURIComponent(memberCount.toString())}&pp=${encodeURIComponent(pp)}&apikey=${global.xyro}`;*/
let welcomeApiUrl2 = `https://api.alandikasaputra.repl.co/welcome?username=${encodeURIComponent(name)}&guildName=${metadata.subject}&guildIcon=${encodeURIComponent(ppgp)}&memberCount=${encodeURIComponent(memberCount.toString())}&avatar=${encodeURIComponent(pp)}&bg=https://telegra.ph/file/c8307b624a194c2a056b8.jpg`;
                            try {
                                let welcomeResponse = await fetch(welcomeApiUrl2);
                                let welcomeBuffer = await welcomeResponse.buffer();

                                const welcomeFilePath = 'welcome.png';

                                if (fs.existsSync(welcomeFilePath)) {
                                    fs.unlinkSync(welcomeFilePath);
                                }

                                fs.writeFileSync(welcomeFilePath, welcomeBuffer);

                                await this.sendFile(id, welcomeFilePath, "thumb.png", text.trim());
                            } catch (error) {
                                console.error(`Error generating welcome image: ${error}`);
                            }
                        }
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }
            break;

        case 'remove':
            if (chat.welcome) {
                try {
                    let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata;
                    for (let user of participants) {
                        let pp = './pporang.png';
                        let ppgp = './pporang.png';
                        try {
                            pp = await this.profilePictureUrl(user, 'image');
                            ppgp = await this.profilePictureUrl(id, 'image');
                        } catch (e) {
                            console.error('Error fetching profile picture:', e);
                            throw e;
                        } finally {
                            let text = (chat.sBye || this.bye || conn.bye || 'HELLO, @user')
                                .replace('@user', '@' + user.split('@')[0]);
                            let memberCount = groupMetadata.participants.length;
                            let name = await this.getName(user);
                            let gpname = await this.getName(id);
                            let metadata = await this.groupMetadata(id);
/*let leaveApiUrl = `https://api.xyroinee.xyz/api/canvas/goodbye?nama=${encodeURIComponent(name)}&member=${encodeURIComponent(memberCount.toString())}&pp=${encodeURIComponent(pp)}&apikey=${global.xyro}`;*/
let leaveApiUrl2 = `https://api.alandikasaputra.repl.co/leave?username=${encodeURIComponent(name)}&guildName=${metadata.subject}&guildIcon=${encodeURIComponent(ppgp)}&memberCount=${encodeURIComponent(memberCount)}&avatar=${encodeURIComponent(pp)}&bg=https://telegra.ph/file/c8307b624a194c2a056b8.jpg`;
try {
let leaveResponse = await fetch(leaveApiUrl2);
let leaveBuffer = await leaveResponse.buffer();
const leaveFilePath = 'leave.png';
if (fs.existsSync(leaveFilePath)) {
fs.unlinkSync(leaveFilePath);
}
fs.writeFileSync(leaveFilePath, leaveBuffer);
await this.sendFile(id, leaveFilePath, "thumb.png", text.trim());
                            } catch (error) {
                                console.error(`Error generating leave image: ${error}`);
                            }
                        }
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }
            break;
case 'promote':
    let pp = './pporang.png'; 
    for (let user of participants) {
        let userName = await this.getName(user);
        let metadata = await this.groupMetadata(id) || (this.chats[id] || {}).metadata; // Get group metadata
        try {
            pp = await this.profilePictureUrl(user, 'image');
        } catch (e) {
            console.error('Error fetching profile picture:', e);
        } finally {
            await conn.sendMessage(id, {
                image: { url: pp }, 
                mentions: [user],
                caption: `@${user.split('@')[0]} Ciee Jadi Admin Di Group ${metadata.subject}`
            });
        }
    }
    break;

case 'demote':
    for (let user of participants) {
        let userName = await this.getName(user);
        let metadata = await this.groupMetadata(id) || (this.chats[id] || {}).metadata; // Get group metadata
        try {
            pp = await this.profilePictureUrl(user, 'image');
        } catch (e) {
            console.error('Error fetching profile picture:', e);
        } finally {
            await conn.sendMessage(id, {
                image: { url: pp },
                mentions: [user],
                caption: ` halo @${user.split('@')[0]} kamu telah di demote di grub ${metadata.subject}`
            });
        }
    }
    break;
    }
}

export async function groupsUpdate(groupsUpdate) {
    if (opts['self']) {
        return;
    }

    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id;

        if (!id) {
            continue;
        }

        const chats = global.db.data.chats[id];
        let text = '';

        if (!chats?.detect) {
            continue;
        }

        if (groupUpdate.desc) {
            text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc);
        }

        if (groupUpdate.subject) {
            text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject);
        }

        if (groupUpdate.icon) {
            text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon);
        }

        if (groupUpdate.revoke) {
            text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke);
        }

        if (!text) {
            continue;
        }
        const groupName = await this.getName(id);
        text = text.replace('@group', groupName);

        await this.sendMessage(id, { text, mentions: this.parseMention(text) });
    }
}
export async function deleteUpdate(message) {

    try {

        const { fromMe, id, participant } = message

        if (fromMe)

            return

        let msg = this.serializeM(this.loadMessage(id))

        if (!msg)

            return

        let chat = global.db.data.chats[msg.chat] || {}

        if (chat.delete)

            return

        await this.reply(msg.chat, `

Terdeteksi @${participant.split`@`[0]} telah menghapus pesan

Untuk mematikan fitur ini, ketik

*.enable delete*

`.trim(), msg, {

            mentions: [participant]

        })

        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))

    } catch (e) {

        console.error(e)

    }

}
 
global.dfail = (type, m, conn) => {
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing',
        'Pon',
        'Wage',
        'Kliwon',
        'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, {
        weekday: 'long'
    })
    let date = d.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    let user = global.db.data.users[m.sender]
    let tag = `@${m.sender.replace(/@.+/, '')}`
    let msg = {
        rowner: '*ᴏᴡɴᴇʀ ᴏɴʟʏ •* ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴏᴡɴᴇʀ ʙᴏᴛ !!',
        owner: '*ᴏᴡɴᴇʀ ᴏɴʟʏ •* ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴏᴡɴᴇʀ ʙᴏᴛ !!',
        mods: '*ᴏᴡɴᴇʀ ᴏɴʟʏ •* ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴏᴡɴᴇʀ ʙᴏᴛ !!',
        premium: '*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ •* ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʀ ᴘʀᴇᴍɪᴜᴍ !!',
        group: '*ɢʀᴏᴜᴘ ᴏɴʟʏ •* ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ɢʀᴏᴜᴘ !!',
        private: '*ᴘʀɪᴠᴀᴛᴇ ᴏɴʟʏ •* ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ᴄʜᴀᴛ ᴘʀɪʙᴀᴅɪ !!',
        admin: '*ᴀᴅᴍɪɴ ᴏɴʟʏ •* ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ !!',
        botAdmin: 'ᴊᴀᴅɪᴋᴀɴ ʙᴏᴛ ꜱᴇʙᴀɢᴀɪ ᴀᴅᴍɪɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ',
        segel: 'ᴍᴀᴀꜰ ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴅɪɢᴜɴᴀᴋᴀɴ ᴋᴀʀɴᴀ ʀᴀᴡᴀɴ ʙᴀɴɴᴇᴅ !!',
        onlyprem: 'ʜᴀɴʏᴀ ᴜꜱᴇʀ *ᴘʀᴇᴍɪᴜᴍ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ꜰɪᴛᴜʀ ɪɴɪ ᴅɪ *ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ* !!',
        nsfw: 'ᴀᴅᴍɪɴ ᴍᴇɴᴏɴᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ *ɴsғᴡ* ᴅɪ ɢʀᴏᴜᴘ ɪɴɪ!',
        rpg: 'ᴀᴅᴍɪɴ ᴍᴇɴᴏɴᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ *ʀᴘɢ ɢᴀᴍᴇ* ᴅɪ ɢʀᴏᴜᴘ ɪɴɪ!',
        game: 'ᴀᴅᴍɪɴ ᴍᴇɴᴏɴᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ *ɢᴀᴍᴇ* ᴅɪ ɢʀᴏᴜᴘ ɪɴɪ!',
        limitExp: 'ʟɪᴍɪᴛ ᴋᴀᴍᴜ ʜᴀʙɪs! ʙᴇʙᴇʀᴀᴘᴀ ᴄᴏᴍᴍᴀɴᴅ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴅɪ ᴀᴋsᴇs!',
        restrict: 'ꜰɪᴛᴜʀ ɪɴɪ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ !!',
        unreg: 'sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴋᴇ *ᴅᴀᴛᴀʙᴀsᴇ* ʙᴏᴛ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ!\n\nᴄᴏɴᴛᴏʜ:\n#ᴅᴀғᴛᴀʀ ᴀɴᴀᴋ nama.ᴜᴍᴜʀᴍᴜ'
    }[type]
    if (msg) return conn.reply(m.chat, msg, m, {
        contextInfo: {
            externalAdReply: {
                title: '*LU SIAPA MAININ BOT SEMBARANGAN !*', body: wm, sourceUrl: global.saweria, thumbnail: fs.readFileSync('./media/denied.jpg')
        }}})
}

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'handler.js'"))
if (global.reloadHandler) console.log(await global.reloadHandler())
})
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Udh malem dek"
if (time >= 4) {
res = "Selamat Pagi"
}
if (time >= 10) {
res = "Selamat Siang"
}
if (time >= 15) {
res = "Selamat Sore"
}
if (time >= 18) {
res = "Selamat Malam"
}
return res
}