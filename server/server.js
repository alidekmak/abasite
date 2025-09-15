const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter setup (using Gmail as example)
let transporter = null;

try {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    console.log('📧 Email transporter configured for:', process.env.EMAIL_USER);
  } else {
    console.log('📧 Email credentials not found, will log emails to console');
  }
} catch (error) {
  console.log('📧 Email setup failed, will log emails to console:', error.message);
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    
    const emailContent = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${service || 'General Inquiry'}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Interest:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        
        <hr>
        <p><em>This message was sent from the Nurture Nest contact form.</em></p>
      `,
      replyTo: email
    };

    // Check if email credentials are configured and working
    if (!transporter || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('\n📧 EMAIL PREVIEW (Configure EMAIL_USER and EMAIL_PASS with Gmail App Password to send real emails):');
      console.log('Subject:', emailContent.subject);
      console.log('To:', emailContent.to);
      console.log('From:', emailContent.from);
      console.log('Reply-To:', emailContent.replyTo);
      console.log('Content:');
      console.log(emailContent.html.replace(/<[^>]*>/g, '').trim());
      console.log('---end email preview---\n');
      
      res.status(200).json({ message: 'Email preview logged to console (configure Gmail App Password for real sending)' });
      return;
    }

    try {
      await transporter.sendMail(emailContent);
      console.log('✅ Email sent successfully to:', emailContent.to);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (emailError) {
      console.log('\n❌ Email sending failed, showing preview instead:');
      console.log('Error:', emailError.message);
      console.log('\n📧 EMAIL PREVIEW:');
      console.log('Subject:', emailContent.subject);
      console.log('To:', emailContent.to);
      console.log('From:', emailContent.from);
      console.log('Reply-To:', emailContent.replyTo);
      console.log('Content:');
      console.log(emailContent.html.replace(/<[^>]*>/g, '').trim());
      console.log('---end email preview---\n');
      
      res.status(200).json({ message: 'Email preview logged to console (Gmail authentication failed - check App Password)' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});