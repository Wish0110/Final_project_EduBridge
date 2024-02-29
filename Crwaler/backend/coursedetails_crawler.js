const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const allowedDomains = ['plymouth.ac.uk'];
const startUrl = 'https://www.plymouth.ac.uk/courses/undergraduate/bsc-computer-science-artificial-intelligence/';

async function crawl() {
  const queue = [startUrl];
  const visited = new Set();

  while (queue.length > 0) {
    const url = queue.shift();

    if (!visited.has(url)) {
      visited.add(url);

      try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const sociologyTitle = $('.gallery-web-refresh-grid-item .title').eq(21).text().trim(); // Index 21 corresponds to the Sociology title
        const sociologyLink = $('.gallery-web-refresh-grid-item a').eq(21).attr('href').trim();

        // Write parsed items to JSON file
        fs.appendFileSync('crawled_data.json', JSON.stringify({
          sociologyTitle,
          sociologyLink
        }, null, 2) + '\n');

        // Follow links to other categories
        $('.gallery-web-refresh-grid-item a').each((index, element) => {
          const link = $(element).attr('href');
          if (link && allowedDomains.some(domain => link.startsWith(domain))) {
            queue.push(link);
          }
        });

      } catch (error) {
        console.error('Error crawling:', error);
      }
    }
  }
}

crawl();