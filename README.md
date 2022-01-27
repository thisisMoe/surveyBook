# surveyBook

### How To run locally
1. Clone repo: `git clone git@github.com:thisisMoe/surveyBook.git`

API:
```
cd surveyBook
npm install
npm run dev
```

Client(VueJS)
```
cd client
npm install
npm run serve
```

### VueJS / ExpressJs / SQlite3 / Knex / Tailwindcss

### Api endpoints
| Endpoint      | method    | return         |
| ------------- | --------- | --------- |
| /api/surveys  | GET   | Fetch all surveys     |
| /api/surveys  | POST  | Create survey         |
| /api/surveys/:id  | GET  | Get Survey by id   |
| /api/surveys/:id  | PATCH  | Update survey    |
| /api/surveys/:id  | DELETE  | Delete survey   |
| /api/surveys/submit  | POST  | Submit survey data  |
| /api/surveys/:survey_id/questions/:id/answers  | GET  | Get all question answers     |
| /api/surveys/:survey_id/questions/  | GET  | Get all question by survey_id     |
| /api/surveys/:survey_id/questions/multiple  | POST  | Create questions  |
| /api/surveys/:survey_id/questions/:id  | GET  | Get question by id     |
| /api/surveys/:survey_id/questions/:id  | DELETE  | Delete Question     |
| /api/surveys/:survey_id/questions/:id  | PATCH  | Update Question     |
