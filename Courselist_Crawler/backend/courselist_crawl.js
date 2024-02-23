const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const allowedDomains = ['plymouth.ac.uk'];
const startUrl = 'https://www.plymouth.ac.uk/subjects/';
const crawledDataFile = 'crawled_data1.json'; // File to store unique course titles

// Set to keep track of visited URLs
const visitedUrls = new Set();

// Load previously crawled course titles (if the file exists)
let crawledTitles = [];
if (fs.existsSync(crawledDataFile)) {
  try {
    let data = fs.readFileSync(crawledDataFile, 'utf8');
    let parsedData = JSON.parse(data);

    if (Array.isArray(parsedData)) {
      crawledTitles = parsedData;
    } else {
      console.log('Parsed data is not an array');
    }
  } catch (error) {
    console.error('Error loading crawled data:', error);
  }
}

async function crawl() {
  const queue = [startUrl];

  while (queue.length > 0) {
    const url = queue.shift();

    if (!visitedUrls.has(url) && !crawledTitles.includes(url)) { // Check both visited and crawled lists
      visitedUrls.add(url);

      try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Verify selectors (replace with actual selectors after inspection)
        const courseTitle = $('div.gallery-web-refresh-grid-item span.title')
          .text()
          .trim();

        // Only add new course title to crawled data if unique
        if (!crawledTitles.includes(courseTitle)) {
          crawledTitles.push(courseTitle);

          // Write course title on a separate line in the JSON file
          fs.appendFileSync(
            crawledDataFile,
            `{"courseTitle": "${courseTitle}"},\n`,
            'utf8'
          );
        }

        // Follow links to other categories (modified to filter irrelevant links)
        $('.pager a').each((index, element) => {
          const link = $(element).attr('href');
          if (
            link &&
            allowedDomains.some(domain => link.startsWith(domain)) &&
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
