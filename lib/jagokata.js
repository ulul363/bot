import cheerio from 'cheerio';
import fetch from 'node-fetch';

export default function quotes(input) {
	return new Promise((resolve, reject) => {
		fetch('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
			.then(res => res.text())
			.then(res => {
				const $ = cheerio.load(res);
				let data = [];
				$('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
					let x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim();
					let y = $(this).find('span[class="auteur-beschrijving"]').text().trim();
					let z = $(element).find('q[class="fbquote"]').text().trim();
					data.push({ author: x, bio: y, quote: z });
				});
				data.splice(2, 1);
				if (data.length == 0) return resolve({ creator: '@Akazamd', status: false });
				resolve({ creator: '@Akazamd', status: true, data });
			}).catch(reject);
	});
}