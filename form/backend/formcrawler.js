const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://services.ucas.com/apply2024/home/5ef134c1-5129-4cb8-86f3-94cf8ffd6f42/application/details/personal-details';

axios.get(url)
  .then(response => {
    const $ = cheerio.load(response.data);
    const formFields = $('input.form-control');
    const formData = [];

    formFields.each((index, element) => {
      formData.push({
        name: $(element).attr('name'),
        value: $(element).attr('value')
      });
    });

    fs.writeFile('form.json', JSON.stringify(formData, null, 2), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Form data saved to form.json');
      }
    });
  })
  .catch(console.error);