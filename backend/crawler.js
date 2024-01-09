const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const allowedDomains = ['britishcouncil.org']; // Update if needed
const startUrl = 'https://study-uk.britishcouncil.org/moving-uk/cost-studying';

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

        const items = [];

        // Extract title and properties:
        const title = $('head title').text().trim();
        const description = $('meta[name="description"]').attr('content');
        const ogTitle = $('meta[property="og:title"]').attr('content');
        const ogDescription = $('meta[property="og:description"]').attr('content');
        const ogImage = $('meta[property="og:image"]').attr('content');

        items.push({
          title,
          description,
          ogTitle,
          ogDescription,
          ogImage
        });

        // Write parsed items to JSON file
        fs.appendFileSync('crawled_data.json', JSON.stringify(items, null, 2) + '\n');

        // Follow links to other pages (if applicable)
        // ...
      } catch (error) {
        console.error('Error crawling:', error);
      }
    }
  }
}

crawl();
