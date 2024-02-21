const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const allowedDomains = ['https://www.plymouth.ac.uk'];
const queue = ['https://www.plymouth.ac.uk/courses'];

async function crawl() {
  while (queue.length > 0) {
    const url = queue.shift();
    console.log(`Crawling: ${url}`);

    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);

      // Extract course names
      const courseNames = [];
      $('.page-courses responsive-module a').each((index, element) => {
        courseNames.push($(element).text().trim());
      });

      // Write parsed items to JSON file
      fs.appendFileSync('crawled_data.json', JSON.stringify({
        url,
        courseNames
      }, null, 2) + '\n');

      // Follow links to other categories
      $('.pager a').each((index, element) => {
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

crawl();