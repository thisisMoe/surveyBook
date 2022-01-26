const express = require('express');
const Survey = require('../../db/Survey')

const router = express.Router();

router.post('/', async (req, res) => {
  const results = await Survey.createSurvey(req.body);
  res.status(201).json({id: results[0]})
});

router.get('/', async (req, res) => {
  const results = await Survey.getAllSurveys();
  res.status(200).json(results);
});

router.get('/:id', async (req, res) => {
  const result = await Survey.getSurvey(req.params.id);
  res.status(200).json(result);
});

router.patch('/:id', async (req, res) => {
  const result = await Survey.updateSurvey(req.params.id, req.body);
  res.status(204).json(result);
});

router.delete('/:id', async (req, res) => {
  const result = await Survey.deleteSurvey(req.params.id);
  res.status(204).json(result);
});

module.exports = router;