<template>
  <div class="app">
    <HomeView />
  </div>
  
</template>

<script>
import HomeView from "./components/HomeView.vue";



export default {
    name: "App",
    components: { HomeView },
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app{
    display: flex;
    justify-content: center;
    background: rgb(81, 81, 163);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
  }
</style>



