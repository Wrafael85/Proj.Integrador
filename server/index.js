/*
  
*/

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const LLM_API_URL = process.env.LLM_API_URL; 
const LLM_API_KEY = process.env.LLM_API_KEY;

app.post('/api/gemini', async (req, res) => {
  const prompt = req.body?.prompt;
  if (!prompt) return res.status(400).json({ error: 'prompt is required' });
  if (!LLM_API_URL || !LLM_API_KEY) return res.status(500).json({ error: 'LLM_API_URL and LLM_API_KEY must be set in env' });

  try {
    // proxy basico : encaminhar prompt para o endpoint LLM configurado
    const response = await fetch(LLM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LLM_API_KEY}`,
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    // 
    const reply = data.reply
      || (data.choices && (data.choices[0]?.text || data.choices[0]?.message?.content))
      || data.output
      || data;

    return res.json({ reply });
  } catch (err) {
    console.error('LLM proxy error', err);
    return res.status(500).json({ error: 'LLM request failed' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`LLM proxy server listening on http://localhost:${port}`));
