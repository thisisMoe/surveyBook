const express = require('express');
const Survey = require('../../db/Survey')
const Question = require('../../db/Question')

const router = express.Router();

//Get all Questions by survey_id
router.get('/:survey_id/questions', async (req, res) => {
  const results = await Question.getAllQuestions(req.params.survey_id);
  res.status(200).json(results)
});

//Get Question by id
router.get('/:survey_id/questions/:id', async (req, res) => {
  const result = await Question.getQuestion(req.params.id);
  res.status(200).json(result)
});

//Create questions
router.post('/:survey_id/questions/multiple', async (req, res) => {
  const questions = req.body.questions;
  Survey.getSurvey(req.params.survey_id).then((result) => {
    if (!result.length) {
      return res.sendStatus(404)
    }
    const data = questions.map(qst => {
      return {
        text: qst,
        survey_id: result[0].id
      }
    })
    Question.createQuestion(data).then(result => {
      return res.sendStatus(201);
    }).catch(e => res.json(e))
  })
});

//Delete question
router.delete('/:survey_id/questions/:id', (req, res) => {
  Question.deleteQuestion(req.params.id).then(result => {
    return res.sendStatus(204)
  }).catch(e => res.json(e))
});

//Update Question
router.patch('/:survey_id/questions/:id', async (req, res) => {
  const result = await Question.updateQuestion(req.params.id, req.body);
  res.status(204).json(result);
})

module.exports = router
