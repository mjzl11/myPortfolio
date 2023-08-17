<script setup>
import { ref, inject } from "vue";
import { RouterLink, RouterView, } from "vue-router";
import Card from "../src/components/Card.vue"

let showPhone = ref(false);

const handlerShowPhone = () => {
  showPhone.value = !showPhone.value;
};

</script>

<template>
  <div id="app">
    <nav>
      <div>
        <h3 class="white" style="margin-left: 2vw">Portfolio</h3>
      </div>
      <div>
        <RouterLink to="/" class="white"
          >Home</RouterLink
        >
        <RouterLink
          to="/repositories"
          class="white"
          >Repositories</RouterLink
        >
        <RouterLink to="/about" class="white"
          >About Me</RouterLink
        >
      </div>
    </nav>
    <div
      id="panel"
      class="panel-center"
    >
      <div id="routerDiv">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
/*  Page */
body {
  overflow: hidden;
  background-color: black;
  font-family: "Edu SA Beginner", cursive;
}

#app {
  display: block;
  max-width: 100%;
  width: 100%;
  padding: 0;
}

.hover img:hover {
  transform: scale(1.2);
}

/*  Nav */
nav {
  display: flex;
  justify-content: space-between;
  background-color: green;
  width: 100%;
}
.white {
  color: white;
  margin-right: 8vh;
}

.panel-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>