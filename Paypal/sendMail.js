const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nmails6969@gmail.com',
    pass: 'wqij frps qaxq mzln',
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'pakaya', // sender address
    to: "plymouthuniversitydummy@gmail.com", // list of receivers
    subject: "Application Submission✔", // Subject line
    text: "userid:22017 Wishmi submitted application", // plain text body
   // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);