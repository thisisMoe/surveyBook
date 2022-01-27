<template>
  <div v-if="loaded">
    <div class="text-3xl text-gray-500 mt-8 mb-3">
      {{ survey.title }}
    </div>
    <div class="mb-6 text-gray-500">
      {{ survey.description }}
    </div>
    <div
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
      <div class="flex justify-center items-center mb-6">
        <div class="bg-gray-200 rounded-lg flex gap-8">
          <div class="inline-flex rounded-lg">
            <input
              type="radio"
              @change="onChange($event)"
              value="1"
              :name="`answer-${question.id}`"
              :id="`yes-${question.id}`"
              hidden
            />
            <label
              :for="`yes-${question.id}`"
              class="
                radio
                text-center text-lg
                self-center
                py-2
                px-4
                rounded-lg
                cursor-pointer
                hover:opacity-75
              "
              >Yes</label
            >
          </div>
          <div class="inline-flex rounded-lg">
            <input
              type="radio"
              @change="onChange($event)"
              value="0"
              :name="`answer-${question.id}`"
              :id="`no-${question.id}`"
              hidden
            />
            <label
              :for="`no-${question.id}`"
              class="
                radio
                text-center text-lg
                self-center
                py-2
                px-4
                rounded-lg
                cursor-pointer
                hover:opacity-80
              "
              >No</label
            >
          </div>
        </div>
      </div>
    </div>
    <button
      @click="submit"
      class="
        bg-white
        text-gray-800
        font-bold
        rounded
        mt-6
        w-10/12
        text-2xl
        border-b-4 border-green-400
        hover:border-green-400 hover:bg-green-400 hover:text-white
        shadow-md
        justify-center
        py-4
        px-6
        inline-flex
        items-center
      "
    >
      <span class="mr-2">Submit</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline-block h-6 w-6"
        viewBox="0 0 512 512"
      >
        <title>Cloud Upload</title>
        <path
          d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M320 255.79l-64-64-64 64M256 448.21V207.79"
        />
      </svg>
    </button>
  </div>
  <div v-else>
    <div
      class="
        fixed
        top-0
        right-0
        h-screen
        w-screen
        z-50
        flex
        justify-center
        items-center
      "
    >
      <div
        class="
          animate-spin
          rounded-full
          h-32
          w-32
          border-t-2 border-b-2 border-blue-500
        "
      ></div>
    </div>
  </div>
</template>

<script>
import QuestionService from "../QuestionService";
import router from "../router";
import SurveyService from "../SurveyService";
export default {
  props: ["id"],
  data() {
    return {
      survey: null,
      loaded: false,
      questions: [],
      answers: [],
      newArray: [],
    };
  },
  created() {
    SurveyService.getSurvey(this.id)
      .then((result) => {
        this.survey = result;
        QuestionService.getQuestions(this.survey.id)
          .then((result) => {
            this.questions = result;
            this.loaded = true;
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  },
  methods: {
    onChange(event) {
      var question_id = event.target.id.split("-")[1];
      var answerValue = event.target.value;

      var answer = {
        question_id: Number(question_id),
        answer: Number(answerValue),
      };
      //check if question already answered
      if (
        this.answers.filter((e) => {
          e.question_id == question_id;
        })
      ) {
        //if answered already, remove previous answer from answers
        //and add new answer instead
        this.newArray = this.answers.filter(
          (e) => e.question_id != question_id
        );
        this.answers = this.newArray;
        this.answers.push(answer);
      } else {
        //if not answered before add answer
        this.answers.push(answer);
      }
    },
    submit() {
      SurveyService.submitAnswers(this.answers).then(() => {
        router.push({ path: `/result/${this.id}` });
      });
    },
  },
};
</script>

<style>
input:checked ~ .radio {
  color: white;
  background-color: #10b981;
}
</style>