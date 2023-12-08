import express from 'express'
import fetch from 'node-fetch'
let app = global.app = express()

function connect(PORT) {
	
	app.get('/', (req, res) => {
		res.send(`
			<!DOCTYPE html>
			<html>
			<head>
    <meta http-equiv="refresh" content="1">
				<style>
					body {
						font-family: Arial, sans-serif;
						background-color: #f2f2f2;
						margin: 0;
						padding: 20px;
					}
					
					h1 {
						color: #333;
						text-align: center;
					}
					
					.container {
						max-width: 600px;
						margin: 0 auto;
						background-color: #fff;
						padding: 20px;
						border-radius: 5px;
						box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
					}
					
					.result {
						margin-top: 20px;
					}
					
					.result-item {
						margin-bottom: 10px;
						padding: 10px;
						border: 1px solid #ccc;
						border-radius: 5px;
						background-color: #f9f9f9;
					}
					
					.result-item .jid {
						font-weight: bold;
					}
					
					.result-item .exists {
						color: green;
					}
					
					.result-item .not-exists {
						color: red;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<h1>WhatsApp Number Checker</h1>
					<form action="/nowa" method="GET">
						<label for="number">Number Parameter:</label>
						<input type="text" id="number" name="number" required>
						<button type="submit">Check</button>
					</form>
					<div class="result">
						<!-- Result will be displayed here -->
					</div>
				</div>
			</body>
			</html>
		`);
	})
	
	app.get('/nowa', async (req, res) => {
		let q = req.query.number, regex = /x/g
		if (!q) return res.send('Input Parameter Number Parameter')
		if (!q.match(regex)) return res.send('Parameter Number Must Fill With One Letter "x"')
		let random = q.match(regex).length, total = Math.pow(10, random), array = []
		for (let i = 0; i < total; i++) {
			let list = [...i.toString().padStart(random, '0')]
			let result = q.replace(regex, () => list.shift()) + '@s.whatsapp.net'
			if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
				let info = await conn.fetchStatus(result).catch(_ => {})
				array.push({ jid: result, exists: true, ...info })
			} else {
				array.push({ jid: result, exists: false })
			}
		}
		let resultHtml = array.map(item => `
			<div class="result-item">
				<span class="jid">${item.jid}</span>
				<span class="${item.exists ? 'exists' : 'not-exists'}">${item.exists ? 'Exists' : 'Not Exists'}</span>
			</div>
		`).join('');
		res.send(`
			<!DOCTYPE html>
			<html>
			<head>
				<style>
					body {
						font-family: Arial, sans-serif;
						background-color: #f2f2f2;
						margin: 0;
						padding: 20px;
					}
					
					h1 {
						color: #333;
						text-align: center;
					}
					
					.container {
						max-width: 600px;
						margin: 0 auto;
						background-color: #fff;
						padding: 20px;
						border-radius: 5px;
						box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
					}
					
					.result {
						margin-top: 20px;
					}
					
					.result-item {
						margin-bottom: 10px;
						padding: 10px;
						border: 1px solid #ccc;
						border-radius: 5px;
						background-color: #f9f9f9;
					}
					
					.result-item .jid {
						font-weight: bold;
					}
					
					.result-item .exists {
						color: green;
					}
					
					.result-item .not-exists {
						color: red;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<h1>WhatsApp Number Checker</h1>
					<form action="/nowa" method="GET">
						<label for="number">Number Parameter:</label>
						<input type="text" id="number" name="number" required>
						<button type="submit">Check</button>
					</form>
					<div class="result">
						${resultHtml}
					</div>
				</div>
			</body>
			</html>
		`);
	})
	
	app.listen(PORT, () => {
		keepAlive()
		console.log('App listened on port', PORT)
	})
}

function keepAlive() {
	let url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
	if (/(\/\/|\.)undefined\./.test(url)) return
	setInterval(() => {
		fetch(url).catch(console.log)
	}, 1 * 1000) 
console.log(`Server running on Url ${url}`)
}

function formatDate(n, locale = 'id') {
	let d = new Date(n)
	return d.toLocaleDateString(locale, { timeZone: 'Asia/Jakarta' })
}
export default connect