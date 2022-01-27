<template>
  <div
    class="
      w-100
      sm:max-w-md
      py-4
      px-4
      bg-white
      shadow-lg
      rounded-lg
      my-12
      flex flex-col
      justify-between
    "
  >
    <div>
      <h2 class="text-gray-800 text-xl font-semibold my-6">{{ title }}</h2>
      <p class="mt-2 text-gray-500">
        {{ description }}
      </p>
    </div>
    <div class="flex justify-between mt-6">
      <router-link :to="{ path: `/result/${id}` }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6 text-green-600"
          viewBox="0 0 512 512"
        >
          <title>Results</title>
          <rect
            x="64"
            y="320"
            width="48"
            height="160"
            rx="8"
            ry="8"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <rect
            x="288"
            y="224"
            width="48"
            height="256"
            rx="8"
            ry="8"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <rect
            x="400"
            y="112"
            width="48"
            height="368"
            rx="8"
            ry="8"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <rect
            x="176"
            y="32"
            width="48"
            height="448"
            rx="8"
            ry="8"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
        </svg>
      </router-link>
      <router-link
        :to="{ path: `/survey/${id}` }"
        class="text-lg font-medium text-blue-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-8 w-8"
          viewBox="0 0 512 512"
        >
          <title>Start Survey</title>
          <path
            d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          />
        </svg>
      </router-link>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6 text-red-500"
          viewBox="0 0 512 512"
        >
          <title>Trash</title>
          <path
            d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M80 112h352"
          />
          <path
            d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
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
export default {
  name: "SurveyCardComponent",
  props: ["id", "title", "description"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
