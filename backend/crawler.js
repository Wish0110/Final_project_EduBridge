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

        // Find the 'ul' tag within the details element
        const schoolTitle = $('h2.school-title a').text().trim();
        const courseTitle = $('h1.hero-heading .course-title').text().trim();
        const detailsTable = $('.key-facts--alternative table').text().trim();
        const registerButton = $('.cta-key-fact--alternative--register-for-open-day a').attr('href').trim();
        const applyButton = $('.cta-key-fact--alternative--apply-via-ucas a').attr('href').trim();
        const ulElement = $('details#careers-accordion ul');

        // Extract the data from the 'li' tags
        const careers = [];
        ulElement.children('li').each((index, element) => {
          careers.push($(element).text().trim());
        });

        // Write parsed items to JSON file
        fs.appendFileSync('crawled_data.json', JSON.stringify({
          schoolTitle,
          courseTitle,
          detailsTable,
          registerButton,
          applyButton
      },
          careers, null, 2) + '\n');

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