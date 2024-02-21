const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const allowedDomains = ['plymouth.ac.uk'];
const startUrl = 'https://www.plymouth.ac.uk/subjects/';
const crawledDataFile = 'crawled_data.json'; // File to store unique course titles

// Set to keep track of visited URLs
const visitedUrls = new Set();

// Load previously crawled course titles (if the file exists)
const crawledTitles = new Set(
    fs.existsSync(crawledDataFile)
      ? JSON.parse(fs.readFileSync(crawledDataFile, 'utf8')).flatMap(item => (Array.isArray(item) ? item.map(i => i.courseTitle) : []))
      : []
  );

async function crawl() {
  const queue = [startUrl];

  while (queue.length > 0) {
    const url = queue.shift();

    if (!visitedUrls.has(url) && !crawledTitles.has(url)) { // Check both visited and crawled lists
      visitedUrls.add(url);

      try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Verify selectors (replace with actual selectors after inspection)
        const courseTitle = $('div.gallery-web-refresh-grid-item span.title')
          .text()
          .trim();

        // Only add new course title to crawled data if unique
        if (!crawledTitles.has(courseTitle)) {
          crawledTitles.add(courseTitle);
          fs.appendFileSync(crawledDataFile, JSON.stringify({ courseTitle }, null, 2) + '\n');
        }

        // Follow links to other categories (modified to filter irrelevant links)
        $('.pager a').each((index, element) => {
          const link = $(element).attr('href');
          if (
            link &&
            allowedDomains.some(domain => link.startsWith(domain)) &&
            // Filter out links that don't lead to course categories
            link.match(/\/subjects\/(\w|-)+$/)
          ) {
            queue.push(link);
          }
        });
      } catch (error) {
        console.error('Error crawling:', url, error);
      }
    }
  }
}

crawl();
