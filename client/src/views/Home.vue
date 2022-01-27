<template>
  <div class="home">
    <div v-if="loaded">
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
      >
        <SurveyCardComponent
          v-for="survey in surveys"
          :key="survey.id"
          :id="survey.id"
          :title="survey.title"
          :description="survey.description"
        />
      </div>
    </div>
    <div v-else>Loading...</div>
    <div class="text-2xl mt-8" v-if="!surveys.length">No surveys found, Let's create a new Survey</div>
  </div>
</template>

<script>
// @ is an alias to /src
import SurveyCardComponent from "@/components/SurveyCardComponent.vue";
import SurveyService from "../SurveyService";

export default {
  name: "Home",
  components: {
    SurveyCardComponent,
  },
  data() {
    return {
      surveys: [],
      error: "",
      loaded: false,
    };
  },
  created() {
    SurveyService.getSurveys()
      .then((result) => {
        this.surveys = result;
        console.log(this.surveys);
        this.loaded = true;
      })
      .catch((e) => (this.error = e));
  },
};
</script>
