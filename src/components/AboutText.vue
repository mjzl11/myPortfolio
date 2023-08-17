<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue"

let data = ref([{ title: "Error...", description: "No data" }]);
let currentIndex = ref(0);

const handlerNext = () => {
  if (currentIndex.value < data.value[1].length - 1) currentIndex.value++;
  else currentIndex.value = 0;
};

const handlerBack = () => {
  if (currentIndex.value > 0) currentIndex.value--;
  else currentIndex.value = data.value[1].length - 1;
};

fetch("/aboutMe.JSON")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((jsonData) => {
    if (jsonData.length !== 0) data.value.push(jsonData);
  })
  .catch((error) => {
    data.value.push({ title: "Error", description: "error loading the data." });
  });
</script>

<template>
  <div id="containerAboutText">
    <Card />
        <div style="display: block; width: 40%">
      <div v-if="data.length === 1">
        <h3 class="titleAbout">{{ data[0].title }}</h3>
        <p class="textAbout">{{ data[0].description }}</p>
      </div>
      <div v-else-if="data.length > 1">
        <h3 class="titleAbout">{{ data[1][currentIndex].title }}</h3>
        <p class="textAbout">{{ data[1][currentIndex].description }}</p>
      </div>
      <div id="arrowsAboutText">
        <img
          src="../assets/left.png"
          style="height: 4.5vh; width: 4.5vh; cursor: pointer; margin-right: 2vw"
          @click="handlerBack"
        />
        <div
          style="
            width: 16vw;
            height: 3vh;
            background-color: green;
            border-radius: 20px;
          "
          class="light"
        ></div>
        <img
          src="../assets/right.png"
          style="height: 4.5vh; width: 4.5vh; cursor: pointer; margin-left: 2vw"
          @click="handlerNext"
        />
        </div>
    </div>
  </div>
</template>

<style scoped>
.titleAbout {
  color: white;
  font-weight: bold;
  margin-bottom: 3vh;
  font-size: 14px;
}
.textAbout {
  color: white;
  border-top: 2px solid green;
  border-bottom: 2px solid green;
  font-size: 12px;
}

@media (min-height: 768px) {
  .titleAbout {
    font-size: 24px;
  }

  .textAbout {
    font-size: 20px;
  }
}

@media (min-width: 1000px) {
  .titleAbout {
    font-size: 24px;
  }

  .textAbout {
    font-size: 20px;
  }
}

#containerAboutText {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
  height: 100vh;
}

#arrowsAboutText {
  text-align: center;
  margin-top: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.light {
  background: linear-gradient(to right, rgb(165, 255, 153), rgb(7, 235, 60));
  animation: colorTransition 2s infinite;
  background-position: 0% 0%;
  background-size: 300% 100%;
}

@keyframes colorTransition {
  0% { background-position: 0% 0%; } 
  20% { background-position: 50% 0%; } 
  40% { background-position: 100% 0%; } 
  60% { background-position: 100% 100%; } 
  80% { background-position: 50% 0%; } 

}
</style>