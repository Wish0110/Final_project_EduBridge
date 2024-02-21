const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs/promises'); // Use fs/promises for better async/await handling

const allowedDomains = ['plymouth.ac.uk'];
const startUrl = 'https://www.plymouth.ac.uk/subjects/';
const crawledDataFile = 'crawled_data.json';

// Set to keep track of visited URLs
const visitedUrls = new Set();

// Load previously crawled course titles (if the file exists)
async function loadCrawledTitles() {
  try {
    if (await fs.exists(crawledDataFile)) {
      const data = await fs.readFile(crawledDataFile, 'utf8');
      return JSON.parse(data).reduce((acc, item) => {
        return Array.isArray(item) ? [...acc, ...item.courseTitle] : [...acc, item.courseTitle];
      }, []); // Flatten the array if necessary
    }
    return []; // Return empty array if file doesn't exist
  } catch (error) {
    console.error('Error reading crawled data:', error);
    return []; // Handle errors gracefully
  }
}

const crawledTitles = await loadCrawledTitles();

async function crawl() {
  const queue = [startUrl];

  while (queue.length > 0) {
    const url = queue.shift();

    if (!visitedUrls.has(url) && !crawledTitles.includes(url)) { // Use includes() for efficiency
      visitedUrls.add(url);

      try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Extract course titles using `.map` (replace with actual selectors)
        const courseTitles = $('.gallery-web-refresh-grid-item span.title')
          .map((index, element) => $(element).text().trim())
          .get();

        // Filter and update crawled titles
        const newTitles = courseTitles.filter(title => !crawledTitles.includes(title));
        crawledTitles.push(...newTitles); // Efficiently add new titles

        // Store crawled titles to file
        await fs.writeFile(crawledDataFile, JSON.stringify(crawledTitles, null, 2)); // Overwrite entire file

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
