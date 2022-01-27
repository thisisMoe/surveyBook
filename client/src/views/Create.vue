<template>
  <div class="about w-full">
    <div
      class="
        w-full
        md:max-w-4xl
        mx-auto
        py-2
        px-4
        bg-white
        shadow-lg
        rounded-lg
        my-10
      "
    >
      <div class="block mb-2">
        <div class="text-2xl mb-3 mt-2 text-gray-500">Create Survey</div>
        <textarea
          type="text"
          placeholder="Survey Title (Think something catchy!!)"
          maxlength="200"
          v-model="surveyTitle"
          class="
            w-full
            text-xl
            md:w-10/12
            px-2
            pt-4
            rounded-lg
            border-2 border-blue-200
            shadow-md
            focus:outline-none focus:border-blue-400
          "
        ></textarea>
      </div>

      <div class="block mb-2">
        <textarea
          type="text"
          placeholder="Optional Description"
          maxlength="200"
          v-model="description"
          class="
            w-full
            text-md
            md:w-10/12
            px-2
            pt-4
            rounded-lg
            border-2 border-blue-200
            shadow-md
            focus:outline-none focus:border-blue-400
          "
        ></textarea>
      </div>

      <div class="block mb-2 mt-10">
        <div class="text-xl mb-6 mt-2 text-gray-500">Questions</div>
        <div
          v-for="(question, index) in questionsInput"
          :key="question.index"
          class="flex items-center md:w-10/12 mx-auto gap-2 mb-12"
        >
          <textarea
            type="text"
            :placeholder="`Question ${index + 1}`"
            maxlength="200"
            v-model="question.text"
            class="
              w-full
              text-lg
              px-2
              pt-4
              rounded-lg
              border-2 border-blue-200
              shadow-md
              focus:outline-none focus:border-blue-400
            "
          ></textarea>
          <svg
            @click="deleteQuestion(index)"
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block h-8 w-8 cursor-pointer text-red-500"
            viewBox="0 0 512 512"
          >
            <title>Remove</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </div>
      </div>
      <div class="mt-10 mb-5 flex justify-end md:w-10/12 mx-auto">
        <button
          @click="addQuestion"
          class="
            bg-white
            text-gray-800
            font-bold
            rounded
            text-lg
            border-b-2 border-blue-400
            hover:border-blue-400 hover:bg-blue-400 hover:text-white
            shadow-md
            py-2
            px-6
            inline-flex
            items-center
          "
        >
          <span class="mr-2">Add</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block h-6 w-6"
            viewBox="0 0 512 512"
          >
            <title>Add</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M256 112v288M400 256H112"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="my-8">
      <button
        @click="createSurvey"
        class="
          bg-white
          text-gray-800
          font-bold
          rounded
          w-10/12
          text-2xl
          border-b-2 border-green-400
          hover:border-green-400 hover:bg-green-400 hover:text-white
          shadow-md
          justify-center
          py-4
          px-6
          inline-flex
          items-center
        "
      >
        <span class="mr-2">Save</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6"
          viewBox="0 0 512 512"
        >
          <title>Save</title>
          <path
            d="M380.93 57.37A32 32 0 00358.3 48H94.22A46.21 46.21 0 0048 94.22v323.56A46.21 46.21 0 0094.22 464h323.56A46.36 46.36 0 00464 417.78V153.7a32 32 0 00-9.37-22.63zM256 416a64 64 0 1164-64 63.92 63.92 0 01-64 64zm48-224H112a16 16 0 01-16-16v-64a16 16 0 0116-16h192a16 16 0 0116 16v64a16 16 0 01-16 16z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import SurveyService from "../SurveyService";
import QuestionService from "../QuestionService";
import router from "../router/index";

export default {
  data() {
    return {
      surveyTitle: "",
      description: "",
      questionsInput: [{ text: "" }],
    };
  },
  methods: {
    deleteQuestion(index) {
      if (index > -1) {
        this.questionsInput.splice(index, 1);
      }
    },
    addQuestion() {
      this.questionsInput.push({ text: "" });
    },
    createSurvey() {
      SurveyService.createSurvey(this.surveyTitle, this.description)
        .then((result) => {
          QuestionService.createQuestions(result.id, this.questionsList)
            .then(() => {
              router.push({ path: "/" });
            })
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    },
  },
  computed: {
    questionsList() {
      return this.questionsInput.map((e) => {
        return e.text;
      });
    },
  },
};
</script>