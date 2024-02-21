const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const startUrl = 'https://www.plymouth.ac.uk/courses';
const allowedDomains = ['plymouth.ac.uk'];

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
        const courseList = $('.course-listing-item');

        courseList.each((index, element) => {
          const courseName = $(element).find('.course-title').text().trim();
          const courseRoute = $(element).find('.course-route').text().trim();
          const courseLink = $(element).find('.course-title a').attr('href');

          // Extract course details only if courseLink exists
          if (courseLink) {
            const courseDetails = {
              name: courseName,
              route: courseRoute,
              link: courseLink
            };

            // Follow course link to get more details
            axios.get(courseLink)
              .then(response => {
                const $ = cheerio.load(response.data);
                const courseTitle = $('h1.hero-heading .course-title').text().trim();
                const courseDescription = $('div.overview p').text().trim();

                courseDetails.title = courseTitle;
                courseDetails.description = courseDescription;

                // Write parsed item to JSON file
                fs.appendFileSync('crawled_data.json', JSON.stringify({
                  course: courseDetails
                }, null, 2) + '\n');
              })
              .catch(error => {
                console.error('Error crawling course:', error);
              });
          }
        });

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