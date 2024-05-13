const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // Use environment variable or default port

// Replace with your actual email credentials (avoid storing in code)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or your preferred email service
  auth: {
    user: 'nmails6969@gmail.com',
    pass: 'wqij frps qaxq mzln'
  }
});

// Configure body parser for JSON data
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  try {
    const {  } = req.body; // Extract data from request body

    const mailOptions = {
        from: 'p', // sender address
        to: "plymouthuniversitydummy@gmail.com", // list of receivers
        subject: "EduBridge Application Submission✔", // Subject line
        text: "Congradulations!!! Your Application Submited succesfully.", 
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
    res.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
