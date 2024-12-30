const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const crypto = require('crypto');

const app = express();

// Configure Express to use EJS and serve static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // Middleware to parse JSON bodies

// Serve the index page
app.get('/', (req, res) => {
    res.render('index', { data: {} }); // Render the index page with an empty data object initially
});

app.post('/create-pdf', async (req, res) => {
    console.log("Received request to generate PDF");
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-gpu',
                '--disable-dev-shm-usage',
                '--no-first-run',
                '--no-zygote',
                '--single-process',
            ],
        });
        const page = await browser.newPage();

        // Render the EJS template with the JSON data received in the request body
        const renderedHtml = await ejs.renderFile('views/index.ejs', { data: req.body });
        await page.setContent(renderedHtml, {
            waitUntil: 'networkidle0',
            baseURL: `http://localhost:${PORT}`,
        });

        // Wait for images to load
        await page.evaluate(async () => {
            const selectors = Array.from(document.querySelectorAll('img'));
            await Promise.all(selectors.map(img => {
                if (img.complete) return;
                return new Promise((resolve, reject) => {
                    img.addEventListener('load', resolve);
                    img.addEventListener('error', reject);
                });
            }));
        });

        const outputDir = path.join(__dirname, 'output');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }

        // Generate a unique filename
        const fileName = `SanctionTLO_${crypto.randomBytes(4).toString('hex')}.pdf`;
        const filePath = path.join(outputDir, fileName);
        
        await page.pdf({
            path: filePath,
            format: 'A2',
            printBackground: true,
            preferCSSPageSize: true,
        });
        await browser.close();

        console.log(`PDF generated and saved to ${filePath}`);
        res.json({ Filename: fileName }); // Respond with the unique filename
    } catch (error) {
        console.error("Failed to generate PDF:", error);
        res.status(500).send('Failed to generate PDF: ' + error.message);
    }
});

const PORT = process.env.PORT || 5566;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
