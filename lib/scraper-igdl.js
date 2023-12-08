import axios from "axios";
import cheerio from "cheerio";

const igdl = async (urlku) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        "https://snapinsta.tv/core/ajax.php",
        new URLSearchParams({
          url: urlku,
          host: "instagram",
        }),
        {
          headers: {
            accept: "*/*",
            cookie:
              "PHPSESSID=a457b241510ae4498043da9e765de30c; _gid=GA1.2.1007159517.1698108684; _gat_gtag_UA_209171683_55=1; _no_tracky_101422226=1; _ga_N43B1RQRDX=GS1.1.1698108684.1.1.1698108695.0.0.0; _ga=GA1.1.1466088105.1698108684",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
          },
        }
      );

      const $ = cheerio.load(response.data);
      const mediaURL = $(
        "div.row > div.col-md-12 > div.row.story-container.mt-4.pb-4.border-bottom"
      )
        .map((_, el) => {
          return (
            "https://snapinsta.tv/" +
            $(el).find("div.col-md-8.mx-auto > a").attr("href")
          );
        })
        .get();

      const res = {
        status: 200,
        media: mediaURL,
      };

      console.log(res);
      resolve(res);
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        message: "error",
      });
    }
  });
};

export { igdl };