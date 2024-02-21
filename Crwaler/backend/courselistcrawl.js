const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const allowedDomains = ['plymouth.ac.uk'];
const startUrl = 'https://www.plymouth.ac.uk/courses';

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

        // Verify selectors (replace with actual selectors after inspection)
        const courseList = $('page-courses responsive-module ').text().trim();
        

        // Extract careers only if ulElement exists
        if (ulElement.length > 0) {
          ulElement.children('li').each((index, element) => {
            careers.push($(element).text().trim());
          });
        } else {
          console.warn('Careers ul element not found on the page.');
        }

        
        // Write parsed items to JSON file
        fs.appendFileSync('crawled_data.json', JSON.stringify({
            courseList
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
}

crawl();
