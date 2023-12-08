import axios from 'axios';
import cheerio from'cheerio';
import fetch from 'node-fetch';
import https from "https";
import qs from "qs";
import request from 'request';
import crypto from 'crypto';
function convertAngka(number) {
    const data = String(number).split('').reverse()
    let combine = ''
    for (let i = 0; i < data.length; i++) {
        if ((i + 1) % 3 == 0 && i != data.length - 1) {
            data[i] = `.${data[i]}`
        }
    }
    combine = `${data.reverse().join('')}`
    return combine
}
async function tanggal_pernikahan(tgl, bln, thn) {
    return new Promise((resolve, reject) => {
        axios.get('https://primbon.com/tanggal_jadian_pernikahan.php?tgl='+tgl+'&bln='+bln+'&thn='+thn+'&proses=+Submit%21+')
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let fetchText = $('#body').text()
            let hasil
            try {
                hasil = {
                    status: true,
                    message: {
                        tanggal: fetchText.split('Tanggal: ')[1].split('Karakteristik: ')[0],
                        karakteristik: fetchText.split('Karakteristik: ')[1].split('< Hitung Kembali')[0],
                        catatan: 'Untuk melihat kecocokan jodoh dengan pasangan, dapat dikombinasikan dengan primbon Ramalan Jodoh (Jawa), Ramalan Jodoh (Bali), numerologi Kecocokan Cinta, tingkat keserasian Nama Pasangan, dan Ramalan Perjalanan Hidup Suami Istri.'
                    }
                }
            } catch {
                hasil = {
                    status: false,
                    message: 'Error, Mungkin Input Yang Anda Masukkan Salah'
                }
            }
            resolve(hasil)
        })
    })
}

async function kecocokan(nama1, nama2) {
    return new Promise((resolve, reject) => {
        axios.get('https://primbon.com/kecocokan_nama_pasangan.php?nama1='+nama1+'&nama2='+nama2+'&proses=+Submit%21+')
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let fetchText = $("#body").text()
            let hasil
            try {
                hasil = {
                    status: true,
                    message: {
                        nama_anda: nama1,
                        nama_pasangan: nama2,
                        sisi_positif: fetchText.split('Sisi Positif Anda: ')[1].split('Sisi Negatif Anda: ')[0],
                        sisi_negatif: fetchText.split('Sisi Negatif Anda: ')[1].split('< Hitung Kembali')[0],
                        gambar: 'https://primbon.com/ramalan_kecocokan_cinta2.png',
                        catatan: 'Untuk melihat kecocokan jodoh dengan pasangan, dapat dikombinasikan dengan primbon Ramalan Jodoh (Jawa), Ramalan Jodoh (Bali), numerologi Kecocokan Cinta, Ramalan Perjalanan Hidup Suami Istri, dan makna dari Tanggal Jadian/Pernikahan.'
                    }
                }
            } catch {
                hasil = {
                    status: false,
                    message: 'Error, Mungkin Input Yang Anda Masukkan Salah'
                }
            }
            resolve(hasil)
        })
    })
}

async function joox(query) {
    return new Promise((resolve, reject) => {
      const time = Math.floor(new Date() / 1000)
        axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
          .then(({ data }) => {
                let result = []
                let hasil = []
                let promoses = []
                let ids = []
                data.itemlist.forEach(result => {
                    ids.push(result.songid)
                });
                for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
                    promoses.push(
                        axios.get(get, {
                            headers: {
                                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                            }
                        })
                            .then(({ data }) => {
                                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                                hasil.push({
                                    lagu: res.msong,
                                    album: res.malbum,
                                    penyanyi: res.msinger,
                                    publish: res.public_time,
                                    img: res.imgSrc,
                                    mp3: res.mp3Url
                                })
                                Promise.all(promoses).then(() => resolve({
                                    creator: "WH MODS DEV",
                                    status: true,
                                    data: hasil,
                                }))
                            }).catch(reject)
                    )
                }
            }).catch(reject)
    })
}

async function facebook(url) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'https://aiovideodl.ml/',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"
            }
        }).then((src) => {
            let a = cheerio.load(src.data)
            let token = a('#token').attr('value')
            axios({
                url: 'https://aiovideodl.ml/wp-json/aio-dl/video-data/',
                method: 'POST',
                headers: {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"   
                },
                data: new URLSearchParams(Object.entries({ 'url': link, 'token': token }))
            }).then(({ data }) => {
                resolve(data)
            })
        })
    })
}

async function trustpositif(url) {
  if(!url) return false
  let agent = new https.Agent({ rejectUnauthorized: false })
  url = Array.isArray(url) ? encodeURIComponent(url.join("\n")) : url
  let { data } = await axios({
    "url": "https://trustpositif.kominfo.go.id/Rest_server/getrecordsname_home",
    "method": "POST",
    "httpsAgent": agent,
    "data": {
      "name": url,
    }
  })
  let result = {}
  for(let i of data.values) {
    result[i.Domain] = i.Status === "Ada"
  }
  return result
}
async function sifat_usaha_bisnis(tgl, bln, thn) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'https://primbon.com/'+'sifat_usaha_bisnis.php',
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: new URLSearchParams(Object.entries({
                "tgl": tgl, "bln": bln, "thn": thn, "submit": " Submit! "
            }))
        }).then(({
                data
            }) => {
            let $ = cheerio.load(data)
            let fetchText = $('#body').text()
            let hasil
            try {
                hasil = {
                    status: true,
                    message: {
                        hari_lahir: fetchText.split('Hari Lahir Anda: ')[1].split(thn)[0],
                        usaha: fetchText.split(thn)[1].split('< Hitung Kembali')[0],
                        catatan: 'Setiap manusia memiliki sifat atau karakter yang berbeda-beda dalam menjalankan bisnis atau usaha. Dengan memahami sifat bisnis kita, rekan kita, atau bahkan kompetitor kita, akan membantu kita memperbaiki diri atau untuk menjalin hubungan kerjasama yang lebih baik. Para ahli primbon di tanah Jawa sejak jaman dahulu telah merumuskan karakter atau sifat bisnis seseorang berdasarkan weton hari kelahirannya. Hasil perhitungannya bisa dijadikan referensi untuk memilih bidang usaha atau rekan bisnis yang cocok bagi kita.'
                    }
                }
            } catch {
                hasil = {
                    status: false,
                    message: 'Error, Mungkin Input Yang Anda Masukkan Salah'
                }
            }
            resolve(hasil)
        })
    })
}
export {
facebook,
trustpositif,
joox,
sifat_usaha_bisnis,
kecocokan,
tanggal_pernikahan
}
