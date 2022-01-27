<template>
  <div>
    <div v-if="survey" class="text-3xl text-gray-500 mt-8 mb-6">
      {{ survey.title }}
    </div>
    <!-- <div
      v-for="question in questions"
      :key="question.id"
      class="
        w-full
        md:max-w-4xl
        mx-auto
        mb-10
        py-2
        px-4
        bg-white
        shadow-lg
        rounded-lg
      "
    >
      <div class="text-xl my-8">{{ question.text }}</div>
      <div class="bg-red-400 w-full" style="height: 20px">
        <div class="bg-green-400 h-full" :style="{ width: `${60}%` }"></div>
      </div>
      <div class="flex justify-between">
        <div class="text-green-500">Yes</div>
        <div class="text-red-500">No</div>
      </div>
    </div> -->
    <question-result v-for="question in questions" :key="question.id" :question="question"></question-result>
  </div>
</template>

<script>
import QuestionService from "../QuestionService";
import SurveyService from "../SurveyService";
import QuestionResult from '../components/QuestionResult.vue';

export default {
  components: { QuestionResult },
  props: ["id"],
  data() {
    return {
      loaded: false,
      questions: [],
      survey: null,
      answersData: [],
    };
  },
  created() {
    SurveyService.getSurvey(this.id).then((result) => {
      this.survey = result;
      QuestionService.getQuestions(this.id).then((result) => {
        this.questions = result;
        // this.questions.forEach((question) => {
        //   var newAnswer = { yes: 0, no: 0 };

        //   AnswerService.getAnswers(this.id, question.id).then((result) => {
        //     result.forEach((answer) => {
        //       if (answer.answer == 1) {
        //         newAnswer.yes++;
        //       } else if (answer.answer == 0) {
        //         newAnswer.no++;
        //       }
        //     });
        //   });

        //   this.answersData.push({ ...newAnswer });
        // });
      });
    });
  },
};
</script>

<style>
</style>