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

        // Verify selectors (replace with actual selectors after inspection)
        const schoolTitle = $('h2.school-title a').text().trim();
        const courseTitle = $('h1.hero-heading .course-title').text().trim();
        const overviewText = $('div.overview p').text().trim();
        const detailsTable = $('.key-facts--alternative table').text().trim();
        const registerButton = $('.cta-key-fact--alternative--register-for-open-day a').attr('href').trim();
        const applyButton = $('.cta-key-fact--alternative--apply-via-ucas a').attr('href').trim();
        const careerTopic = $('details#careers-accordion h2').text().trim();
        const careerDescript = $('details#careers-accordion div.trix-content').text().trim();
        const ulElement = $('details#careers-accordion ul');
        const keyFeaturesTopic = $('details#key-features-accordion h2').text().trim();
        const keyFeaturesList = $('details#key-features-accordion ul').children('li').map((index, element) => $(element).text().trim()).get();
        const courseMain = $('details#structure-accordion summary.module-accordion-summary h3.course-stage-heading').text().trim();
        const courseDetails = $('details#structure-accordion .module-accordion-summary h2').text().trim();
        const ulElement3 = $('details#structure-accordion div.trix-content ul').children('li').map((index, element) => $(element).text().trim()).get();

        const entryreqTopic = $('details#entry-requirements-accordion h2').text().trim();
        const entryreq = $('details#entry-requirements-accordion div.accordion-div-box p').text().trim();
        const entryreqdetails = $('details#entry-requirements-accordion div.trix-content strong').text().trim();
        
        const feesTopic = $('details#fees-funding-accordion .module-accordion-summary h2').text().trim();
        const feesDetails = $('details#fees-funding-accordion div.course_fee_table table').text().trim();
        const feesDetailsextra = $('details#fees-funding-accordion div.course_fee_table ').text().trim();
        const feesDetailsadd = $('div.trix-content h2').text().trim();
        const feesDetailsaddDetails = $('div.trix-content div.strong').text().trim();
        const applytopic = $('details#how-to-apply-accordion h2').text().trim();
        const applydetails = $('details#how-to-apply-accordion div.trix-content ').text().trim();

        let careers = []; // Define careers as an empty array here

        // Extract careers only if ulElement exists
        if (ulElement.length > 0) {
          ulElement.children('li').each((index, element) => {
            careers.push($(element).text().trim());
          });
        } else {
          console.warn('Careers ul element not found on the page.');
        }

        
        // Write parsed items to JSON file
        fs.appendFileSync('crawled_data.json', JSON.stringify({
          schoolTitle,
          courseTitle,
          detailsTable,
          registerButton,
          applyButton,
          overviewText,
          careerTopic,
          careerDescript,
          careers: careers,
          keyFeaturesTopic,
          keyFeaturesList,
          courseMain,
          courseDetails,
          ulElement3,
          entryreqTopic,
          entryreq,
          entryreqdetails,
          feesTopic,
          feesDetails,
          feesDetailsextra,
          feesDetailsadd,
          feesDetailsaddDetails,
          applytopic,
          applydetails
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
