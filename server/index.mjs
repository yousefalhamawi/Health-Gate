import 'dotenv/config';
import express from 'express';
import { siteKnowledge } from './knowledge.mjs';

const app = express();
const port = Number(process.env.CHAT_PORT || 8787);
const model = process.env.DEEPSEEK_MODEL || 'deepseek-chat';
app.use(express.json({ limit: '32kb' }));

app.post('/api/chat', async (req, res) => {
  const messages = Array.isArray(req.body?.messages) ? req.body.messages : [];
  const safeMessages = messages.filter((message) => message && ['user', 'assistant'].includes(message.role) && typeof message.content === 'string').slice(-10).map((message) => ({ role: message.role, content: message.content.slice(0, 2500) }));
  if (!safeMessages.length) return res.status(400).json({ error: 'Please enter a message.' });
  if (!process.env.DEEPSEEK_API_KEY) return res.status(503).json({ error: 'Chat is not configured yet. Add DEEPSEEK_API_KEY to .env and restart the server.' });
  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}` }, body: JSON.stringify({ model, temperature: 0.25, max_tokens: 500, messages: [{ role: 'system', content: siteKnowledge }, ...safeMessages] }) });
    if (!response.ok) { const detail = await response.text(); console.error('DeepSeek request failed:', response.status, detail.slice(0, 500)); return res.status(502).json({ error: 'The assistant is temporarily unavailable. Please try again shortly.' }); }
    const data = await response.json(); const answer = data?.choices?.[0]?.message?.content?.trim();
    if (!answer) return res.status(502).json({ error: 'The assistant returned an empty response. Please try again.' });
    return res.json({ answer });
  } catch (error) { console.error('Assistant network error:', error); return res.status(502).json({ error: 'The assistant is temporarily unavailable. Please try again shortly.' }); }
});
app.listen(port, () => console.log(`Health Gate assistant API listening on http://localhost:${port}`));
