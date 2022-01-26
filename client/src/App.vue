<template>
  <div class="px-4 pt-4 h-screen">
    <h1 class="text-5xl mb-10">Survey Book</h1>
    <div class="border-b-2">
      <div class="flex cursor-pointer justify-center gap-4">
        <div class="py-2 px-6 bg-white rounded-t-lg">Surveys</div>
        <div class="py-2 px-6 rounded-t-lg text-gray-500">
          Create Survey
        </div>
      </div>
    </div>
    <SurveyCardComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import SurveyCardComponent from "./components/SurveyCardComponent.vue";

export default {
  name: "App",
  components: {
    SurveyCardComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f3f4f6;
}
</style>
