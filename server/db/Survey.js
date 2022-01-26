const knex = require('./knex')

function createSurvey(survey) {
  return knex('surveys').insert(survey);
}

function getAllSurveys() {
  return knex('surveys').select('*');
}

function getSurvey(id) {
  return knex('surveys').where('id', id).select();
}

function deleteSurvey(id) {
  return knex('surveys').where('id', id).del();
}

function updateSurvey(id, survey) {
  return knex('surveys').where('id', id).update(survey);
}

module.exports = {
  createSurvey,
  getAllSurveys,
  getSurvey,
  updateSurvey,
  deleteSurvey
}