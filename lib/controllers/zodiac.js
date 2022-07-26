const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()
  .get('/', (req, res) => {
    const data = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    res.json(data);
  })

  .get('/:id', (req, res) => {
    const id = req.params.id;
    const dataZodiac = zodiacs.find((zodiac) => zodiac.id === id);
    res.json(dataZodiac);
  });
