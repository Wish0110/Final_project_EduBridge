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

        // Extract titles and links from the page
        const titlesAndLinks = [];
        $('.course-listing-item').each((index, element) => {
          const title = $(element).find('.course-title').text().trim();
          const link = $(element).find('.course-title a').attr('href');

          if (title && link) {
            titlesAndLinks.push({
              title,
              link,
            });
          }
        });

        // Save the extracted titles and links to a file
        fs.writeFileSync('crawled_data.json', JSON.stringify(titlesAndLinks, null, 2));

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
}

// Delete the existing crawled_data.json file or rename it to crawled_data_old.json
if (fs.existsSync('crawled_data.json')) {
  fs.unlinkSync('crawled_data.json');
}

crawl();