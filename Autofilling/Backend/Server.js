const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const axios = require('axios');
  
  function getStudentId() {
    return new Promise((resolve, reject) => {
      readline.question('Enter student ID: ', (studentId) => {
        resolve(studentId.trim());
        readline.close();
      });
    });
  }
  
  async function fetchStudentData() {
    try {
      const studentid = await getStudentId();
  
      const data = JSON.stringify({
        collection: "students",
        database: "studentrecords",
        dataSource: "Cluster0",
        filter: {
          studentid
        }
      });
  
      const config = {
        method: 'post',
        url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-zwwqd/endpoint/data/v1/action/findOne',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': 'n7FEsXAd5f1vccyEEFrGEBvDO9oqeRJmi4r5ljf2OIr7pIlr5qJBNR7biXSvsCR2' // Replace with your actual API key
        },
        data
      };
  
      const response = await axios(config);
      const student = response.data.document;
  
      if (student) {
        console.log(`Name: ${student.name}`);
        console.log(`Student ID: ${student.studentid}`);
      } else {
        console.log('Student not found.');
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  }
  
  fetchStudentData();
  