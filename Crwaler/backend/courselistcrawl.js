const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function crawl() {
    const queue = [startUrl];
    const visited = new Set();
  
    while (queue.length > 0) {
      const url = queue.shift();
  
      if (!visited.has('https://www.plymouth.ac.uk/courses')) {
        visited.add('https://www.plymouth.ac.uk/courses');
  
        try {
          const response = await axios.get(url);
          const $ = cheerio.load(response.data);
  
          // Verify selectors (replace with actual selectors after inspection)
          const courseList = [];
          $('.course-listing-item h3 a').each((index, element) => {
            courseList.push({
              name: $(element).text().trim(),
              link: $(element).attr('href')
            });
          });
  
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