# Contact Form Backend Setup

This backend server handles email sending for the contact form.

## Setup Instructions

1. **Install server dependencies:**
   ```bash
   cd /Users/micahlloyd/Documents/Github\ Projects/abasite
   npm install --save express cors nodemailer dotenv
   npm install --save-dev nodemon
   ```

2. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

3. **Configure email settings in .env:**
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-gmail-app-password
   PORT=3001
   ```

   **Note:** For Gmail, you need to:
   - Enable 2-factor authentication
   - Generate an "App Password" (not your regular password)
   - Use the app password in EMAIL_PASS

4. **Run the servers:**
   
   **Terminal 1 (Backend server):**
   ```bash
   cd /Users/micahlloyd/Documents/Github\ Projects/abasite
   node server.js
   ```
   
   **Terminal 2 (React app):**
   ```bash
   cd /Users/micahlloyd/Documents/Github\ Projects/abasite/app
   npm run dev
   ```

## How it works

- Contact form submits to `http://localhost:3001/api/contact`
- Server receives form data and sends email using nodemailer
- Email is sent to `micah.dev.lloyd@gmail.com` for testing
- Form shows loading/success/error states to user

## Testing

1. Fill out the contact form on the website
2. Submit the form
3. Check `micah.dev.lloyd@gmail.com` for the email
4. Form should show success message and reset

## Production Deployment

For production, you'll need to:
1. Deploy the server to a hosting service (Heroku, DigitalOcean, etc.)
2. Update the fetch URL in Contact.jsx to your production server URL
3. Update the recipient email address in server.js