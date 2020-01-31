const puppeteer = require('puppeteer');


const margin = '0cm'

const generatePdf = async (template) => {
	try{
		const browser = await puppeteer.launch({
			headless:true,
			args:['--no-sandbox','--disable-setuid-sandbox']
		});
		const page = await browser.newPage();
	
		await page.setContent(template);
		await page.emulateMedia("screen");
	  
		const pdf = await page.pdf({
			format: 'Letter',
		  printBackground:true,
		  margin: {
			left: margin,
			top: 0,
			right: margin,
			bottom: 0
		}
		});
		await browser.close();
		return pdf;
	}catch(e){
		return e;
	}
};


module.exports = {
	generatePdf
};