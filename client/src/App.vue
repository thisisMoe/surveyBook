<template>
  <div class="px-6 md:px-10 pb-10 pt-4 h-full">
    <h1 class="text-5xl mb-16 mt-8">Survey Book</h1>

    <div id="nav">
      <div class="border-b-2">
        <div class="flex cursor-pointer justify-center gap-4">
          <router-link active-class="bg-white text-gray-700" class="py-2 px-6 rounded-t-lg text-gray-500" to="/"
            >Surveys</router-link
          >
          <router-link active-class="bg-white text-gray-700" class="py-2 px-6 rounded-t-lg text-gray-500" to="/create"
            >Create Survey</router-link
          >
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f3f4f6;
  height: 100vh;
}
</style>
