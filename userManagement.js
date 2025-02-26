const { jsPDF } = require('jspdf');

class UserManagement {
    constructor() {
        this.serverUrl = 'http://localhost:3000'; // Update this based on your server configuration
    }

    generatePDF(userData) {
        return new Promise((resolve, reject) => {
            try {
                const doc = new jsPDF();
                doc.setFontSize(22);
                doc.setTextColor(41, 128, 185);
                doc.text('CAI - User Registration Details', 20, 20);
                doc.setLineWidth(0.5);
                doc.line(20, 25, 190, 25);
                doc.setFontSize(14);
                doc.setTextColor(44, 62, 80);
                doc.text('Personal Information', 20, 40);
                doc.setFontSize(12);
                doc.setTextColor(0, 0, 0);
                const details = [
                    `Full Name: ${userData.firstName} ${userData.lastName}`,
                    `Email: ${userData.email}`,
                    `Age: ${userData.age}`,
                    `Gender: ${userData.gender}`,
                    `Registration Date: ${new Date().toLocaleDateString()}`
                ];
                let yPosition = 55;
                details.forEach(detail => {
                    doc.text(detail, 25, yPosition);
                    yPosition += 10;
                });
                doc.setFontSize(10);
                doc.setTextColor(127, 140, 141);
                const footer = 'This is an automatically generated document by the CAI System.';
                doc.text(footer, doc.internal.pageSize.width / 2, 280, { align: 'center' });
                const pdfBase64 = doc.output('datauristring');
                resolve(pdfBase64);
            } catch (error) {
                reject(error);
            }
        });
    }

    async sendEmail(userData, pdfBase64) {
        const emailData = {
            to: userData.email,
            from: 'chars.index@gmail.com',
            subject: `Welcome to Chars-i - Registration Confirmation`,
            html: `
                <h2>Welcome to Chars-i, ${userData.firstName}!</h2>
                <p>Thank you for registering with the Cigarette Addiction Index (CAI) system.</p>
                <p><strong>Your Registration Details:</strong></p>
                <ul>
                    <li>Name: ${userData.firstName} ${userData.lastName}</li>
                    <li>Email: ${userData.email}</li>
                    <li>Age: ${userData.age}</li>
                    <li>Gender: ${userData.gender}</li>
                    <li>Registration Date: ${new Date().toLocaleDateString()}</li>
                </ul>
                <p>Please find your registration details attached in the PDF.</p>
                <p>Best regards,<br>The CAI Team</p>
            `,
            attachments: [{
                filename: `CAI_Registration_${userData.firstName}_${userData.lastName}.pdf`,
                content: pdfBase64.split('base64,')[1],
                encoding: 'base64'
            }]
        };

        try {
            const response = await fetch(`${this.serverUrl}/api/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData)
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            return true;
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }

    async processNewUser(userData) {
        try {
            const pdfBase64 = await this.generatePDF(userData);
            await this.sendEmail(userData, pdfBase64);
            const pdfOutput = atob(pdfBase64.split('base64,')[1]);
            const blob = new Blob([pdfOutput], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `CAI_Registration_${userData.firstName}_${userData.lastName}.pdf`;
            link.click();
            window.URL.revokeObjectURL(url);
            return true;
        } catch (error) {
            console.error('Error processing user:', error);
            throw error;
        }
    }
}

const userManagement = new UserManagement();
module.exports = userManagement;