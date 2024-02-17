const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
var https = require('https');
var http = require('http');
var fs = require('fs');

var app = express();
const PORT = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/build')));

// Configure multer to handle file uploads
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.post('/send-application', upload.single('resume'), (req, res) => {
  const { firstName, lastName, email, phone, jobInterest, additionalInfo } = req.body;
  
  // Access the uploaded file from req.file.buffer
  const resumeBuffer = req.file ? req.file.buffer : null;

  // Create a nodemailer transporter using your email credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jasonslandscaping2003@gmail.com',
      pass: 'jrgs ydhr gtuz lwoi',
    },
  });

  // Construct the email body
  const mailOptions = {
    from: 'jasonslandscaping2003@gmail.com',
    to: 'jasonslandscaping2003@gmail.com',
    subject: `Job Application: ${jobInterest}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nJob Interest: ${jobInterest}\nAdditional Info / Cover Letter:\n${additionalInfo}`,
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

app.post('/send-inquiry', (req, res) => {
    const { firstName, lastName, email, phone, inquirySubject, inquiryMessage } = req.body;
  
    // Create a nodemailer transporter using your email credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jasonslandscaping2003@gmail.com',
        pass: 'jrgs ydhr gtuz lwoi',
      },
    });
  
    // Construct the email body
    const mailOptions = {
      from: 'jasonslandscaping2003@gmail.com',
      to: 'jasonslandscaping2003@gmail.com',
      subject: `Inquiry: ${inquirySubject}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${inquirySubject}\n\nMessage:\n${inquiryMessage}`,
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
});

var options = {
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.pem')
};

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// Create an HTTP service.
http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(443);
