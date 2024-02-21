const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs/promises'); // Use fs/promises for better async/await handling

const allowedDomains = ['plymouth.ac.uk'];
const startUrl = 'https://www.plymouth.ac.uk/subjects/';
const crawledDataFile = 'crawled_data.json';

// Set to keep track of visited URLs
const visitedUrls = new Set();

// Load previously crawled course titles (if the file exists)
const crawledTitles = await fs.readFile(crawledDataFile, 'utf8')
  .then(data => {
    if (!data) return []; // Handle empty file gracefully
    return JSON.parse(data);
  })
  .then(data =>
    Array.isArray(data)
      ? data.map(item => item.courseTitle)
      : [data.courseTitle] // Ensure consistency, handle both single and array structures
  )
  .catch(error => {
    console.error('Error reading crawled data:', error);
    return []; // Initialize with empty array in case of errors
  });

async function crawl() {
  const queue = [startUrl];

  while (queue.length > 0) {
    const url = queue.shift();

    if (!visitedUrls.has(url) && !crawledTitles.includes(url)) { // Use includes() for efficiency
      visitedUrls.add(url);

      try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Verify selectors (replace with actual selectors after inspection)
        const courseTitle = $('div.gallery-web-refresh-grid-item span.title')
          .text()
          .trim();

        // Only add new course title to crawled data if unique
        if (!crawledTitles.includes(courseTitle)) { // Use includes() for efficiency
          crawledTitles.push(courseTitle); // Add directly to the array instead of creating an object
          await fs.appendFile(crawledDataFile, JSON.stringify({ courseTitle }) + '\n');
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
