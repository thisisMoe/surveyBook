const knex = require('./knex')

function createQuestion(qst) {
  return knex('questions').insert(qst);
}

function getAllQuestions(survey_id) {
  return knex('questions').where('survey_id', survey_id).select();
}

function getQuestion(id) {
  return knex('questions').where('id', id).select();
}

function deleteQuestion(id) {
  return knex('questions').where('id', id).del();
}

function updateQuestion(id, qst) {
  return knex('questions').where('id', id).update(qst);
}


module.exports = {
  createQuestion,
  getAllQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion
}