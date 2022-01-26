import axios from 'axios';

const url = 'http://localhost:5000/api/surveys';

class SurveyService {
  //Get surveys

  // static async getSurveys() {
  //   await axios.get(url)
  //     .then(res => {
  //       return res.data
  //     })
  //     .catch(e => console.log(e))
  // }

  static getSurveys() {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => resolve(res.data)).catch(e => reject(e));
    })
  }
}

export default SurveyService