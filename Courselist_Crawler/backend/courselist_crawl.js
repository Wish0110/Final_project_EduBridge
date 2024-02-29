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
    let data = fs.readFileSync(crawledDataFile, 'utf8');
    let parsedData = JSON.parse(data);

    if (Array.isArray(parsedData)) {
        crawledTitles = parsedData.map(item => item.courseTitle);
    } else {
        console.log('Parsed data is not an array');
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
        const courseTitle1 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle2 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle3 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle4 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle5 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle6 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle7 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle8 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle9 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle10 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle11 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle12 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle13 = $('div.gallery-web-refresh-grid-item a[href="').text().trim();
        const courseTitle14 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle15 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle16 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle17 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle18 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle19 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle20 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle21 = $('div.gallery-web-refresh-grid-item a[href=""] span.title').text().trim();
        const courseTitle22 = $('div.gallery-web-refresh-grid-item a[href="/subjects/sociology-international-relations-politics"] span.title').text().trim();

        fs.appendFileSync('crawled_data.json', JSON.stringify({
          courseTitle1,
          courseTitle2,
          courseTitle3,
          courseTitle4,
          courseTitle5,
          courseTitle6,
          courseTitle7,
          courseTitle8,
          courseTitle9,
          courseTitle10,
          courseTitle11,
          courseTitle12,
          courseTitle13,
          courseTitle14,
          courseTitle15,
          courseTitle16,
          courseTitle17,
          courseTitle18,
          courseTitle19,
          courseTitle20,
          courseTitle21,
          courseTitle22,
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
