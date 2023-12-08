const { WAMessageStubType } = (await import('@adiwajshing/baileys')).default;
import { format } from 'util';

const isNumber = x => typeof x === 'number' && !isNaN(x);
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms)); // Fixed the delay function

export async function all(m) {
    if (m.fromMe && m.isBaileys) return !0;

    let setting = global.db.data.settings[this.user.jid];
    if (!global.anticall) return;

    if (m.messageStubType === WAMessageStubType.CALL_MISSED_VOICE || m.messageStubType === WAMessageStubType.CALL_MISSED_VIDEO) {
        await this.reply(m.chat, 'kamu Di blockir oleh bot karena telah melanggar aturan bot\n\n*📮Dilarang menelepon Bot!*', null);
        await delay(1000);
        await this.updateBlockStatus(m.chat, "block");
    }
}
