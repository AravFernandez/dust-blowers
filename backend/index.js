const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});




app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received contact form data:', req.body);
  res.json({ success: true, message: 'Thank you for contacting us!' });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
