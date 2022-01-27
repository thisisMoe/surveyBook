import axios from 'axios';

const url = '/api/surveys';

class SurveyService {
  //Get surveys
  static getSurveys() {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => resolve(res.data)).catch(e => reject(e));
    })
  }

  static getSurvey(id) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/${id}`).then(res => resolve(res.data[0])).catch(e => reject(e));
    })
  }

  //Create survey
  static createSurvey(title, description) {
    return new Promise((resolve, reject) => {
      axios.post(url, {
        title,
        description
      }).then(result => {
        resolve(result.data);
      }).catch(e => reject(e))
    })
  }

  //submit survey answers
  static submitAnswers(answers) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/submit`, {
        answers
      }).then(result => {
        resolve(result.data);
      }).catch(e => reject(e))
    })
  }
}

export default SurveyService