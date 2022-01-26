const knex = require('./knex')

function createAnswer(answer) {
  return knex('answers').insert(answer);
}

function getAllAnswers(question_id) {
  return knex('answers').where('question_id', question_id).select();
}


module.exports = {
  createAnswer,
  getAllAnswers
}