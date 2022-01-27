import axios from 'axios';

const url = '/api/surveys';

class QuestionService {
  //Create Questions
  static createQuestions(survey_id, questions) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/${survey_id}/questions/multiple`,{questions}).then(result => {
        resolve(result.data);
      }).catch(e => reject(e))
    })
  }

  //Get Questions
  static getQuestions(survey_id) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/${survey_id}/questions`).then(result => {
        resolve(result.data);
      }).catch(e => reject(e))
    })
  }
}

export default QuestionService