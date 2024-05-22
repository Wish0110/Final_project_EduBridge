const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'edubridgebywish@gmail.com',
    pass: 'vbeo sopx gorm olzv',
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'p', // sender address
    to: "wishhiranyaco@gmail.com", // list of receivers
    subject: "EduBridge Application Submission✔", // Subject line
    text: "Congradulations!!! Your Application Submited succesfully.", // plain text body
   // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);