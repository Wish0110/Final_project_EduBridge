const express = require("express");
const OpenAI = require("openai");
const axios = require('axios');
const app = express();
app.use(express.json());

const openai=new OpenAI({
    apiKey:"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"
})
app.post('/getResponse', async (req, res) => {
    try {
        const studentid = req.body.studentid;

        const config = {
            method: 'post',
            url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-zwwqd/endpoint/data/v1/action/findOne',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': 'n7FEsXAd5f1vccyEEFrGEBvDO9oqeRJmi4r5ljf2OIr7pIlr5qJBNR7biXSvsCR2',
                'Accept': 'application/ejson'
            },
            data: JSON.stringify({
                "collection": "students",
                "database": "studentrecords",
                "dataSource": "Cluster0",
                "filter": {
                    "studentid": studentid // Filter documents where studentid matches
                }
            })
        };

        const response = await axios(config);
        const student = response.data.document;
        const name = student.name;
        const studentnumber = student.studentid;
        const studentdegree = student.degree;
        const studentgpa = student.gpa;
        const studentsports = student.sports;
        const studetfaculty = student.faculty;

        const openaiResponse = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{
                "role": "user",
                "content": `i want to write a letter about the a student nameed ${name} with the student number ${studentnumber} who studied ${studentdegree} with a gpa of ${studentgpa} and did ${studentsports} in our university as a dean of the faculty as a recomdation for a masters degree and add recipent as Dear Sir/Madam sender is Dean Faculty of ${studetfaculty} please dont add recipeints senders desgisnation would be engough please dont use [] in the spaces`
            }]
        });

        console.log(openaiResponse.choices[0].message.content);
        res.send(openaiResponse.choices[0].message.content);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});