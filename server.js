const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Configure multer to handle file uploads
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });

app.post('/send-email', upload.single('resume'), (req, res) => {
  const { firstName, lastName, email, phone, jobInterest, additionalInfo } = req.body;
  
  // Access the uploaded file from req.file.buffer
  const resumeBuffer = req.file ? req.file.buffer : null;

  // Create a nodemailer transporter using your email credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jasonslandscaping2003@gmail.com', // replace with your email
      pass: 'jrgs ydhr gtuz lwoi', // replace with your email password
    },
  });

  // Construct the email body
  const mailOptions = {
    from: 'jasonslandscaping2003@gmail.com', // replace with your email
    to: 'jasonslandscaping2003@gmail.com',
    subject: `Job Application: ${jobInterest}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nJob Interest: ${jobInterest}\nAdditional Info / Cover Letter: ${additionalInfo}`,
    attachments: [
      {
        filename: 'resume.pdf', // Change the filename as needed
        content: resumeBuffer ? resumeBuffer.toString('base64') : null, // Convert Buffer to base64
        encoding: 'base64',
      },
    ],
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
