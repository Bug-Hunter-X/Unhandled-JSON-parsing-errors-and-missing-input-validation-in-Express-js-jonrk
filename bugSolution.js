const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  try {
    const user = req.body;
    // Input validation
    if (!user.name || !user.email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    console.log('User:', user);
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ error: 'Invalid JSON or missing data' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));