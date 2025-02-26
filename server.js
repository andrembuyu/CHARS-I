const express = require('express');
const bodyParser = require('body-parser');
const { PDFDocument } = require('pdf-lib');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

// Set SendGrid API key - Fix: Add console logging for debugging
const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
    console.error('SendGrid API key is missing!');
} else {
    console.log('SendGrid API key configured:', apiKey.substring(0, 5) + '...');
    sgMail.setApiKey(apiKey);
}

// Handle form submission
app.post('/submit', async (req, res) => {
    const userInfo = req.body;

    try {
        // Create PDF
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage();
        const { width, height } = page.getSize();
        page.drawText(`Name: ${userInfo.firstName} ${userInfo.lastName}`, { x: 50, y: height - 50 });
        page.drawText(`Email: ${userInfo.email}`, { x: 50, y: height - 70 });
        page.drawText(`Age: ${userInfo.age}`, { x: 50, y: height - 90 });
        page.drawText(`Gender: ${userInfo.gender}`, { x: 50, y: height - 110 });

        const pdfBytes = await pdfDoc.save();

        // Send Email with SendGrid
        const msg = {
            to: 'chars.index@gmail.com', // Send to this email
            from: 'andrembuyu487@gmail.com', // Verified sender in SendGrid
            subject: 'New User Registration',
            text: `New user registered with the following details:
                   Name: ${userInfo.firstName} ${userInfo.lastName}
                   Email: ${userInfo.email}
                   Age: ${userInfo.age}
                   Gender: ${userInfo.gender}`,
            attachments: [
                {
                    content: Buffer.from(pdfBytes).toString('base64'),
                    filename: 'user-info.pdf',
                    type: 'application/pdf',
                    disposition: 'attachment'
                }
            ]
        };

        await sgMail.send(msg);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        // Fix: Provide more detailed error response
        res.status(500).send(`Failed to send email: ${error.message}`);
    }
});

// Serve the main HTML file for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});