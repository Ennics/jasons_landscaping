const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/build')));

// Configure multer to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.post('/send-application', upload.single('resume'), (req, res) => {
  const { firstName, lastName, email, phone, jobInterest, additionalInfo } = req.body;
  const resumeBuffer = req.file ? req.file.buffer : null;

  /* 
  Create a nodemailer transporter using your email credentials
  RMTAT-8JTSX-SVD5R-W7YPX-UNCUC
  Setup two factor authentication
  Add an app password
  */
  const transporter = nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
      user: 'ennics@gmail.com',
      pass: 'vwkxhngstyaworuf',
    },
  });

  const mailOptions = {
    from: 'ennics@gmail.com',
    to: 'nicholasnicolaev@cmail.carleton.ca',
    subject: `Job Application: ${jobInterest}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nJob Interest: ${jobInterest}\nAdditional Info / Cover Letter:\n${additionalInfo}`,
    attachments: [
      {
        filename: 'resume.pdf',
        content: resumeBuffer ? resumeBuffer.toString('base64') : null,
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
      service: 'Outlook365',
      auth: {
        user: 'ennics@gmail.com',
        pass: 'vwkxhngstyaworuf',
      },
    });
  
    // Construct the email body
    const mailOptions = {
      from: 'ennics@gmail.com',
      to: 'nicholasnicolaev@cmail.carleton.ca',
      subject: `Inquiry: ${inquirySubject}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${inquirySubject}\n\nMessage:\n${inquiryMessage}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
