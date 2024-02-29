const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const allowedDomains = ['plymouth.ac.uk'];
const startUrl = 'https://www.plymouth.ac.uk/subjects/';
const crawledDataFile = 'crawled_data1.json'; // File to store unique course titles


const codeSnippet = `
<div>
  <section class="gallery-web-refresh ">
    <div class="responsive-module">
      <header class="headings">
        <h2>Courses and degree subject areas</h2>
      </header>
      <div class="gallery-web-refresh-grid">
        <!-- Title and link grid items -->
      </div>
    </div>
  </section>
</div>
`;

async function crawl() {
  const $ = cheerio.load(codeSnippet);

  const titleLinks = [];

  $('.gallery-web-refresh-grid-item').each((index, element) => {
    const title = $(element).find('.title').text().trim();
    const link = $(element).find('a').attr('href');

    titleLinks.push({ title, link });
  });

  fs.writeFileSync('crawled_data.json', JSON.stringify(titleLinks, null, 2));
}

crawl();