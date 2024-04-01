const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const baseURL = 'https://www.plymouth.ac.uk';
const url = 'https://www.plymouth.ac.uk/schools/school-of-engineering-computing-and-mathematics/computer-science';
const outputFile = 'DegreeLinks.json';

const getLinks = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const links = [];

    $('.article-group-grid-item a').each((i, link) => {
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

    fs.writeFile(outputFile, JSON.stringify(links, null, 2), (err) => {
      if (err) {
        console.error(`Error writing to file: ${err}`);
      } else {
        console.log(`Links saved to ${outputFile}`);
      }
    });
  })
  .catch((error) => console.error(`Error: ${error}`));