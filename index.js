const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const CLIENT_ID = '123';
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.get('/auth', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/auth.html'));
});

app.get('/final', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/final.html'));
});

app.get('/end', (req, res) => {
  res.send('END OK!', JSON.stringify(req))
});

app.get('/token', (req, res) => {
console.log('GET token:', JSON.stringify(req));
res.send('GET OK!')
});
app.post('/token', (req, res) => {
  console.log('POST token:', JSON.stringify(req));
  res.send('POST OK!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});