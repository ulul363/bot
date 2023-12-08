// Modules
import ytdl from 'ytdl-core';
import axios from 'axios';
import { millify } from 'millify';

// Api Youtube Downloader
const bytesToSize = (bytes) => {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
};

const ytMp4 = async (url) => {
  try {
    const getUrl = await ytdl.getInfo(url);
    let result = [];
    for (let i = 0; i < getUrl.formats.length; i++) {
      let item = getUrl.formats[i];
      if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
        let { qualityLabel, contentLength } = item;
        let bytes = await bytesToSize(contentLength);
        result[i] = {
          video: item.url,
          quality: qualityLabel,
          size: bytes,
        };
      }
    }
    let resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
    let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
    let tinyUrl = tiny.data;
    let title = getUrl.videoDetails.title;
    let desc = getUrl.videoDetails.description;
    let views = millify(getUrl.videoDetails.viewCount);
    let channel = getUrl.videoDetails.ownerChannelName;
    let uploadDate = getUrl.videoDetails.uploadDate;
    let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
    return {
      title,
      result: tinyUrl,
      quality: resultFix[0].quality,
      size: resultFix[0].size,
      thumb,
      views,
      channel,
      uploadDate,
      desc,
    };
  } catch (err) {
    return null;
  }
};

const ytMp3 = async (url) => {
  try {
    const getUrl = await ytdl.getInfo(url);
    let result = [];
    for (let i = 0; i < getUrl.formats.length; i++) {
      let item = getUrl.formats[i];
      if (item.mimeType == 'audio/webm; codecs="opus"') {
        let { contentLength } = item;
        let bytes = await bytesToSize(contentLength);
        result[i] = {
          audio: item.url,
          size: bytes,
        };
      }
    }
    let resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
    let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
    let tinyUrl = tiny.data;
    let title = getUrl.videoDetails.title;
    let desc = getUrl.videoDetails.description;
    let views = millify(getUrl.videoDetails.viewCount);
    let channel = getUrl.videoDetails.ownerChannelName;
    let uploadDate = getUrl.videoDetails.uploadDate;
    let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
    return {
      title,
      result: tinyUrl,
      size: resultFix[0].size,
      thumb,
      views,
      channel,
      uploadDate,
      desc,
    };
  } catch (err) {
    return null;
  }
};

export { ytMp4, ytMp3 };
