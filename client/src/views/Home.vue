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
    <div class="text-2xl mt-8" v-if="!surveys.length && loaded == true">
      No surveys found, Let's create a new Survey
    </div>
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
        this.loaded = true;
      })
      .catch((e) => (this.error = e));
  },
};
</script>
