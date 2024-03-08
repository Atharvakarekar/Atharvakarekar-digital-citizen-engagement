// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/report-issue', (req, res) => {
  // Handle issue reporting logic
  const { issueDetails } = req.body;
  // Save issue to the database, send notifications, etc.
  res.json({ status: 'Issue reported successfully' });
});

app.get('/api/educational-campaigns', (req, res) => {
  // Return a list of educational campaigns
  const campaigns = [{ title: 'Campaign 1', description: 'Description 1' }];
  res.json(campaigns);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
