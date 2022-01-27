const express = require('express');
const Survey = require('../../db/Survey')
const Answer = require('../../db/Answer');

const router = express.Router();

//Create survey
router.post('/', async (req, res) => {
  const results = await Survey.createSurvey(req.body);
  res.status(201).json({
    id: results[0]
  })
});

//Get all surveys
router.get('/', async (req, res) => {
  const results = await Survey.getAllSurveys();
  res.status(200).json(results);
});

//Get survey by id
router.get('/:id', async (req, res) => {
  const result = await Survey.getSurvey(req.params.id)
  if (!result.length) {
    return res.sendStatus(404);
  }
  res.status(200).json(result);
});

//Update Survey
router.patch('/:id', async (req, res) => {
  const result = await Survey.updateSurvey(req.params.id, req.body);
  res.status(204).json(result);
});

//Delete Survey
router.delete('/:id', async (req, res) => {
  const result = await Survey.deleteSurvey(req.params.id);
  res.status(204).json(result);
});


//Submit Answers
router.post('/submit', (req, res) => {
  const answers = req.body.answers

  const data = answers.map(e => {
    return {
      question_id: e.question_id,
      answer: e.answer
    }
  })

  Answer.createAnswer(data).then(result => {
    res.sendStatus(201);
  });
});

//Get All Answers
router.get('/:survey_id/questions/:id/answers', async (req, res) => {
  const results = await Answer.getAllAnswers(req.params.id);
  res.json(results);
})

module.exports = router;