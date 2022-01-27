<template>
  <div
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
      <div class="bg-green-400 h-full" :style="{ width: `${(answers.yes / (answers.yes+answers.no))*100}%` }"></div>
    </div>
    <div class="flex justify-between">
      <div class="text-green-500">Yes ({{ answers.yes }})</div>
      <div class="text-red-500">No ({{answers.no}})</div>
    </div>
  </div>
</template>

<script>
import AnswerService from '../AnswerService'
export default {
  props: ["question"],
  data() {
    return {
      answers: {},
    };
  },
  created() {
    var newAnswer = { yes: 0, no: 0 };
    AnswerService.getAnswers(1, this.question.id).then((result) => {
      result.forEach((answer) => {
        if (answer.answer == 1) {
          newAnswer.yes++;
        } else if (answer.answer == 0) {
          newAnswer.no++;
        }
      });
      this.answers = {...newAnswer}
    });
  },
  methods: {},
};
</script>

<style>
</style>