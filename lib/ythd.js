import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';
import FormData from 'form-data';
import axios from 'axios';
import cheerio from 'cheerio';
import { fromBuffer } from 'file-type';

const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;

export async function post(url, formdata) {
    console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'));
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            accept: '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'),
    });
    return response;
}

export async function ythd(url) {
    return new Promise(async (resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url);
            url = 'https://youtu.be/' + ytId[1];
            try {
                const res = await post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                    url,
                    q_auto: 0,
                    ajax: 1,
                });
                const resJson = await res.json();
                const document = new JSDOM(resJson.result).window.document;
                const yaha = document.querySelectorAll('td');
                const filesize = yaha[yaha.length - 23].innerHTML;
                const id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', ''];
                const thumb = document.querySelector('img').src;
                const title = document.querySelector('b').innerHTML;

                const res2 = await post('https://www.y2mate.com/mates/en60/convert', {
                    type: 'youtube',
                    _id: id[1],
                    v_id: ytId[1],
                    ajax: '1',
                    token: '',
                    ftype: 'mp4',
                    fquality: 720,
                });
                const res2Json = await res2.json();
                const KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize));
                resolve({
                    dl_link: /<a.+?href="(.+?)"/.exec(res2Json.result)[1],
                    thumb,
                    title,
                    filesizeF: filesize,
                    filesize: KB,
                });
            } catch (error) {
                reject(error);
            }
        } else {
            reject('URL INVALID');
        }
    });
}