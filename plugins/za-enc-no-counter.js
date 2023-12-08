import JavaScriptObfuscator from "javascript-obfuscator";

let handler = async (m, { args }) => {
    try {
        const modes = ["low", "high"];
        const usage = "Reply Codenyanya!!!\n\n*Example:*\n.obfuscate high";
        
        if (!m.quoted) return m.reply(usage);
        
        const type = args[0]?.toLowerCase(); // Menggunakan args[0] agar kode sesuai dengan command
        if (!modes.includes(type)) return m.reply(usage);

        const message = type === "high" ? await Encrypt(m.quoted.text) : await Decrypt(m.quoted.text);
        
        if (args.length >= 2) {
            const texts = args.slice(1).join(" ");
            const response = type === "high" ? await Encrypt(texts) : await Decrypt(texts);
            return m.reply(response);
        }

        return m.reply(message);
    } catch (e) {
        console.error(e); // Menggunakan console.error untuk menampilkan pesan kesalahan ke konsol
        await m.reply("Terjadi kesalahan dalam proses enkripsi/dekripsi.");
    }
};

handler.help = ['encrypt'];
handler.tags = ['tools'];
handler.command = /^(encrypt|enc)$/i;
handler.limit = true;

export default handler;

async function Encrypt(query) {
    const obfuscationResult = JavaScriptObfuscator.obfuscate(query, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1,
        sourceMap: false,
        sourceMapMode: "separate",
    });

    return obfuscationResult.getObfuscatedCode();
}

async function Decrypt(encryptedCode) {
    const decryptedCode = JavaScriptObfuscator.obfuscate(encryptedCode, {
        compact: false,
        controlFlowFlattening: true,
    }).getObfuscatedCode();

    return decryptedCode;
}