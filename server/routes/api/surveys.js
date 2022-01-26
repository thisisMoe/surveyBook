const express = require('express');
const Survey = require('../../db/Survey')
const Question = require('../../db/Question')
const Answer = require('../../db/Answer')

const router = express.Router();

router.post('/', async (req, res) => {
  const results = await Survey.createSurvey(req.body);
  res.status(201).json({
    id: results[0]
  })
});

router.get('/', async (req, res) => {
  const results = await Survey.getAllSurveys();
  res.status(200).json(results);
});

router.get('/:id', async (req, res) => {
  const result = await Survey.getSurvey(req.params.id)
  if (!result.length) {
    return res.sendStatus(404);
  }
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

//Get all Questions by survey_id
router.get('/:survey_id/questions', async (req, res) => {
  const results = await Question.getAllQuestions(req.params.survey_id);
  res.status(200).json(results)
});

//Get Questions by id
router.get('/:survey_id/questions/:id', async (req, res) => {
  const result = await Question.getQuestion(req.params.id);
  res.status(200).json(result)
});

//Create question
router.post('/:survey_id/questions', async (req, res) => {
  Survey.getSurvey(req.params.survey_id).then((result) => {
    if (!result.length) {
      return res.sendStatus(404)
    }
    Question.createQuestion({
      text: req.body.text,
      yes: 0,
      no: 0,
      survey_id: result[0].id
    }).then(result => {
      return res.sendStatus(201)
    })
  })
});

//Create questions
router.post('/:survey_id/questions/multiple', async (req, res) => {
  const questions = req.body.questions;
  // return res.json(questions)
  Survey.getSurvey(req.params.survey_id).then((result) => {
    if (!result.length) {
      return res.sendStatus(404)
    }
    const data = questions.map(qst => {
      return {
        text: qst,
        yes: 0,
        no: 0,
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

//Submit Answers
router.patch('/:id/submit', (req, res) => {
  Survey.getSurvey(req.params.id).then(async result => {
    if (!result.length) {
      return res.sendStatus(404);
    }
    result[0].passed++
    const survey = await Survey.updateSurvey(result[0].id, result[0]);

    Answer.createAnswer(req.body.answers).then(result => {
      res.sendStatus(201);
    });

  })
})

router.get('/:survey_id/questions/:id/answers',async (req,res)=> {
  const results = await Answer.getAllAnswers(req.params.id);
  res.json(results);
})

module.exports = router;