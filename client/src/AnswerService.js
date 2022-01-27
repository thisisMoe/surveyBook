import axios from 'axios';

const url = 'http://localhost:5000/api/surveys';

class AnswerService {
  //Get answers
  static getAnswers(survey_id, question_id) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/${survey_id}/questions/${question_id}/answers`).then(result => {
        resolve(result.data);
      }).catch(e => reject(e))
    })
  }
}

export default AnswerService