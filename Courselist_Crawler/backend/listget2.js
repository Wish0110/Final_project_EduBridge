const axios = require('axios');
const cheerio = require('cheerio');

const baseURL = 'https://www.plymouth.ac.uk';
const url = 'https://www.plymouth.ac.uk/subjects';

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

getLinks(url)
  .then((links) => {
    console.log(`Total links found: ${links.length}`);
    console.log(links);
  })
  .catch((error) => console.error(`Error: ${error}`));