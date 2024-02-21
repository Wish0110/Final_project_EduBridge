const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const allowedDomains = ['plymouth.ac.uk'];
const startUrl = 'https://www.plymouth.ac.uk/subjects/';

async function crawl() {
  const visited = new Set();

  async function crawlPage(url) {
    if (!visited.has(url)) {
      visited.add(url);

      try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Verify selectors (replace with actual selectors after inspection)
        const courseTitle = $('div.gallery-web-refresh-grid-item span.title').text().trim();

        // Return parsed items
        return {
          courseTitle,
        };
      } catch (error) {
        console.error('Error crawling:', error);
        return null;
      }
    }
  }

  async function crawlAll(url) {
    const result = await crawlPage(url);

    if (result) {
      // Write parsed items to JSON file
      fs.appendFileSync('crawled_data.json', JSON.stringify(result) + '\n');

      // Follow links to other categories
      $('.pager a').each((index, element) => {
        const link = $(element).attr('href');
        if (link && allowedDomains.some(domain => link.startsWith(domain))) {
          crawlAll(link);
        }
      });
    }
  }

  crawlAll(startUrl);
}

crawl();