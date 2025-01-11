const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config({ path: '.env.local' });

const app = express();

// Enable CORS for your Netlify frontend
app.use(cors({
  origin: '*', //process.env.FRONTEND_URL || 'https://your-netlify-app.netlify.app',
  methods: ['GET']
}));

// Proxy endpoint for NewsAPI
app.get('/api/news', async (req, res) => {
  try {
    const { pageSize, page, category, country } = req.query;
    
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        pageSize: pageSize || 10,
        page: page || 1,
        category,
        country,
        apiKey: process.env.REACT_APP_NEWS_API
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ 
      error: 'Failed to fetch news',
      message: error.response?.data?.message || error.message 
    });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});