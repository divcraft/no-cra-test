const express = require('express');

const router = express.Router();
const Test = require('../database/models/test');

router.get('/', (req, res) => {
  res.json({
    id: 1,
    message: 'Hello Test!',
  });
});

router.get('/show-test', (req, res) => {
  Test.find({}, (err, data) => {
    if (err) return console.log(err);
    return res.json(data);
  });
});

router.post('/add-test', (req, res) => {
  const { content } = req.body;
  console.log('from react');
  const testData = new Test({
    content,
  });
  testData.save((err) => {
    const response = err || `Baza danych uzupełniona! Dodano nowy wiersz: ${content}`;
    res.json({ response });
  });
});

module.exports = router;
