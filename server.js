const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies (for lead capture endpoint)
app.use(express.json());

// Serve the diagnostic tool
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Lead capture endpoint
app.post('/api/leads', (req, res) => {
  const { firstName, lastName, email, company, role, score, tier } = req.body;

  // Log the lead (in production, connect to your CRM / email platform)
  console.log('New lead captured:', {
    firstName,
    lastName,
    email,
    company,
    role,
    score,
    tier,
    timestamp: new Date().toISOString(),
  });

  // TODO: Integrate with HubSpot, Salesforce, Marketo, etc.
  // Example: await hubspot.createContact({ email, firstName, lastName, company });

  res.json({ success: true, message: 'Lead captured successfully' });
});

app.listen(PORT, () => {
  console.log(`Thredd Processor Diagnostic running at http://localhost:${PORT}`);
});
