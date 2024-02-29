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

        // Extract titles and links from the provided code snippet
        const titlesAndLinks = [
          'Allied health professions', 'https://www.plymouth.ac.uk/study/allied-health-professions',
          'Architecture and built environment', 'https://www.plymouth.ac.uk/subjects/architecture-design-building-construction',
          'Art', 'https://www.plymouth.ac.uk/subjects/art',
          // Add more categories here
        ];

        titlesAndLinks.forEach(([title, link]) => {
          fs.appendFileSync('crawled_data.json', JSON.stringify({
            title,
            link,
          }, null, 2) + '\n');
        });

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

crawl();