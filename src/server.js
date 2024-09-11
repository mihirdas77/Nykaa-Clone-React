const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email setup (use your email service credentials)
app.post('/sendLoginLink', async (req, res) => {
    const { email } = req.body;
  
    // Generate a JWT token with the email
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
  
    // Create a link that includes the token
    const loginLink = `http://localhost:3000/verify?token=${token}`;
  
    // Send email
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Login Link',
      text: `Click this link to log in: ${loginLink}`
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Login link sent to your email');
    } catch (error) {
      console.error('Error sending email:', error); // Log the error
      res.status(500).send('Error sending email');
    }
  });
  
// Endpoint to verify token and log in user
app.get('/verify', (req, res) => {
  const { token } = req.query;

  // Verify the token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid or expired token');
    }

    // Token is valid, log in the user (you can generate a session or JWT here)
    res.status(200).send(`Welcome back, ${decoded.email}`);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
