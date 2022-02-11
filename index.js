const https = require('https')
const { name } = require("./package.json");

module.exports = (job, settings, action, type) => {
	if (type != "postrender") {
		throw new Error(`Action ${name} can be only run in postrender mode, you provided: ${type}.`
		);
	}
	if (!action.url) {
		throw new Error("No url value was provided, call can't be sent.");
	}
	
	const options = {
		hostname: action.url,
		port: 443,
		path: action.path,
		method: 'GET'
	}
	
	return new Promise((resolve, reject) => {
		const req = https.request(options, res => {
			resolve();
			console.log(`[${job.uid}] applying ${name} actions...`);
		}).on('error', error => {
			console.log(error)
			reject(err);
		})
		req.end()
	});


  


};