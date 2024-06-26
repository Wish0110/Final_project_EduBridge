const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const cron = require('node-cron');

const baseURL = 'https://www.plymouth.ac.uk';
const url = 'https://www.plymouth.ac.uk/subjects';
const outputFile = 'links.json';

const getLinks = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const links = [];

    $('.gallery-web-refresh-grid-item a').each((i, link) => {
      const title = $(link).text().trim();
      const href = baseURL + $(link).attr('href');
      links.push({ title, href });
    });

    return links;
  } catch (error) {
    console.error(`Error fetching links: ${error}`);
  }
};

const scheduleCrawl = () => {
  cron.schedule('55 13 * * *', async () => {
    console.log('Starting crawl at 13.49...');
    const links = await getLinks(url);
    console.log(`Total links found: ${links.length}`);

    fs.writeFile(outputFile, JSON.stringify(links, null, 2), (err) => {
      if (err) {
        console.error(`Error writing to file: ${err}`);
      } else {
        console.log(`Links saved to ${outputFile}`);
      }
    });
  });
};

scheduleCrawl();