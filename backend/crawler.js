const axios = require('axios');
const cheerio = require('cheerio');

async function fetchData(url) {
 const { data } = await axios.get(url);
 return cheerio.load(data);
}

async function scrapeData(url) {
 const $ = await fetchData(url);

 const headers = [];
 const links = [];

 $('h2').each((i, elem) => {
    headers.push($(elem).text());
 });

 $('a').each((i, elem) => {
    links.push($(elem).attr('href'));
 });

 return { headers, links };
}

async function main() {
 const url = 'https://yourwebsite.com';
 const data = await scrapeData(url);
 console.log(data);
}

main();