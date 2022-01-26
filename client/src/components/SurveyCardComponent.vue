<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
    <div
      v-for="survey in surveys"
      :key="survey.id"
      class="w-100 sm:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20"
    >
      <div>
        <h2 class="text-gray-800 text-3xl font-semibold">{{ survey.title }}</h2>
        <p class="mt-2 text-gray-600">
          {{survey.description}}
        </p>
      </div>
      <div class="flex justify-end mt-4">
        <a href="#" class="text-xl font-medium text-indigo-500">Pass Survey</a>
      </div>
    </div>
  </div>
</template>

<script>
import SurveyService from "../SurveyService";
export default {
  name: "SurveyCardComponent",
  data() {
    return {
      surveys: [],
      error: "",
    };
  },
  async created() {
    try {
      this.surveys = await SurveyService.getSurveys();
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
