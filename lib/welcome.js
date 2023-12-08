import { DOMImplementation, XMLSerializer } from 'xmldom';
import JsBarcode from 'jsbarcode';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { join } from 'path';
import fetch from 'node-fetch'; // Import fetch here

const src = join(__dirname, '..', 'src');

const _svg = readFileSync(join(src, 'welcome.svg'), 'utf-8');
const barcode = (data) => {
    const xmlSerializer = new XMLSerializer();
    const document = new DOMImplementation().createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    JsBarcode(svgNode, data, {
        xmlDocument: document,
    });

    return xmlSerializer.serializeToString(svgNode);
};
const imageSetter = (img, value) => img.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', value);
const textSetter = (el, value) => (el.textContent = value);

let {
    window: { document: svg },
} = new JSDOM(_svg);

const toImg = (svg, format = 'png') =>
    new Promise((resolve, reject) => {
        if (!svg || svg.length === 0) return resolve(Buffer.alloc(0));

        const gm = require('gm'); // Import the 'gm' library

        const im = gm(Buffer.from(svg)); // Use 'gm' to process the SVG
        im.toBuffer(format, (err, buffer) => {
            if (err) return reject(err);
            resolve(buffer);
        });
    });

const toBase64 = (buffer, mime) => `data:${mime};base64,${buffer.toString('base64')}`;

const genSVG = async ({
    wid = '',
    pp = join(
        src,
        'fetch', // Corrected this part
        'https://api.erdwpe.com/api/maker/welcome1?name=erdwpe&gpname=&member=private&pp=https://telegra.ph/file/fc707b30c93233492ea79.png&bg=https://telegra.ph/file/fea867e29574ad52c3660.jpg'
    ),
    title = '',
    name = '',
    text = '',
    background = '',
} = {}) => {
    let el = {
        code: [
            '#_1661899539392 > g:nth-child(6) > image',
            imageSetter,
            toBase64(await toImg(barcode(wid.replace(/[^0-9]/g, '')), 'png'), 'image/png'),
        ],
        pp: ['#_1661899539392 > g:nth-child(3) > image', imageSetter, pp],
        text: ['#_1661899539392 > text.fil1.fnt0', textSetter, text],
        title: ['#_1661899539392 > text.fil2.fnt1', textSetter, title],
        name: ['#_1661899539392 > text.fil2.fnt2', textSetter, name],
        bg: ['#_1661899539392 > g:nth-child(2) > image', imageSetter, background],
    };
    for (let [selector, set, value] of Object.values(el)) {
        set(svg.querySelector(selector), value);
    }
    return svg.body.innerHTML;
};

const render = async (
    {
        wid = '',
        pp = toBase64(
            readFileSync(
                join(
                    src,
                    'fetch', // Corrected this part
                    'https://api.erdwpe.com/api/maker/welcome1?name=erdwpe&gpname=&member=private&pp=https://telegra.ph/file/fc707b30c93233492ea79.png&bg=https://telegra.ph/file/fea867e29574ad52c3660.jpg'
                ),
                'image/png'
            )
        ),
        name = '',
        title = '',
        text = '',
        background = toBase64(readFileSync(join(src, 'Aesthetic', 'Aesthetic_000.jpeg')), 'image/jpeg'),
    } = {},
    format = 'png'
) => {
    let svg = await genSVG({
        wid,
        pp,
        name,
        text,
        background,
        title,
    });
    return await toImg(svg, format);
};

if (require.main === module) {
    render({
        wid: '1234567890',
        // pp: '',
        name: 'John Doe',
        text: 'Lorem ipsum\ndot sit color',
        title: 'grup testing',
        // background: ''
    }, 'jpg').then((result) => {
        // console.log(result)
        process.stdout.write(result);
    });
    // toImg(barcode('test')).then(result => {
    //     // console.log(result)
    //     process.stdout.write(result)

    // })
} else module.exports = render;