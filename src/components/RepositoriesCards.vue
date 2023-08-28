<script setup>
import { ref } from "vue";

let dataRepositories = ref([{ title: "Error...", description: "No data" }]);
let currentIndexRepos = ref(0);

fetch("/repositories.JSON")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((jsonData) => {
    if (jsonData.length !== 0) dataRepositories.value.push(jsonData);
  })
  .catch((error) => {
    data.value.push({ title: "Error", description: "error loading the data." });
  });

const shadowRef = ref(null);
const reposCardRef = ref(null);
const shadowBRef = ref(null);

let i = 0;
let j = 30;

const handlerNext = () => {
  const shadowElement = shadowRef.value;
  const reposCardElement = reposCardRef.value;
  const shadowBElement = shadowBRef.value;

  function moveElement() {
    if (i < 30 && j === 30) {
      reposCardElement.style.transform = `translateX(${i}vw) rotateY(${
        i * 6
      }deg)`;
      shadowElement.style.borderRadius = "20px";
      shadowBElement.style.borderRadius = "20px";
      shadowElement.style.transform = `translateX(${i}vw)`;
      i++;
      setTimeout(moveElement, 100);

      if (i === 29) {
        if (currentIndexRepos.value < dataRepositories.value[1].length - 1)
          currentIndexRepos.value = currentIndexRepos.value + 1;
        else currentIndexRepos.value = 0;
      }
    } else {
      reposCardElement.style.opacity = 0;
      reposCardElement.style.transform = "none";
      reposCardElement.style.opacity = 1;

      shadowElement.style.borderTopRightRadius = "0px";
      shadowElement.style.borderBottomRightRadius = "0px";
      shadowElement.style.transform = "none";

      shadowBElement.style.borderTopLeftRadius = "0px";
      shadowBElement.style.borderBottomLeftRadius = "0px";
      shadowBElement.style.transform = "none";
      i = 0;
      j = 30;
    }
  }
  moveElement();
};

const handlerBack = () => {
  const shadowElement = shadowRef.value;
  const reposCardElement = reposCardRef.value;
  const shadowBElement = shadowBRef.value;

  function moveElement() {
    if (j > 0 && i === 0) {
      reposCardElement.style.transform = `translateX(${j - 30}vw)  rotateY(${
        (j - 30) * 6
      }deg)`;
      shadowElement.style.borderRadius = "20px";
      shadowBElement.style.borderRadius = "20px";
      shadowBElement.style.transform = `translateX(${j - 30}vw)`;
      j--;
      setTimeout(moveElement, 100);

      if (j === 1) {
        if (currentIndexRepos.value > 0) currentIndexRepos.value--;
        else currentIndexRepos.value = dataRepositories.value[1].length - 1;
      }
    } else {
      reposCardElement.style.opacity = 0;
      reposCardElement.style.transform = "none";
      reposCardElement.style.opacity = 1;

      shadowElement.style.borderTopRightRadius = "0px";
      shadowElement.style.borderBottomRightRadius = "0px";
      shadowElement.style.transform = "none";

      shadowBElement.style.borderTopLeftRadius = "0px";
      shadowBElement.style.borderBottomLeftRadius = "0px";
      shadowBElement.style.transform = "none";
      i = 0;
      j = 30;
    }
  }
  moveElement();
};
</script>

<template>
  <div style="display: flex; align-items: center; justify-content: center; height: 95vh">
    <div class="shadow" style="display: flex; justify-content: center; align-items: center;" ref="shadowRef" @click="handlerNext">
      <h3 class="title" style="cursor: pointer">previous</h3>
    </div>
    <div class="reposCard" ref="reposCardRef">
      <div style="display: block">
        <div v-if="dataRepositories.length === 1" id="repoInfo">
          <span class="title">{{ dataRepositories[0].title }}</span>
          <h3 class="description">{{ dataRepositories[0].description }}</h3>
        </div>
        <div v-else-if="dataRepositories.length > 1" id="repoInfo">
            <img
              style="height: 20vh; width: 20vh;"
              :src="dataRepositories[1][currentIndexRepos].icon"
            />
          <div style="display: flex">
            <span
              ><a
                class="hover"
                href="https://github.com/mjzl11"
                target="_blank"
                ><img
                  style="
                    height: 25px;
                    width: 25px;
                    margin-bottom: 0.5vw;
                    cursor: pointer;
                  "
                  src="../assets/github.svg" /></a
            ></span>
            <span class="title" style="margin-left: 1vw;">{{
              dataRepositories[1][currentIndexRepos].title
            }}</span>
          </div>
          <h3 class="description" style="margin-left: 2vw; margin-right: 2vw">
            {{ dataRepositories[1][currentIndexRepos].description }}
          </h3>
        </div>
      </div>
    </div>
    <div class="shadowB" style="display: flex; justify-content: center; align-items: center;" ref="shadowBRef" @click="handlerBack">
      <h3 class="title" style="cursor: pointer">next</h3>
    </div>
  </div>
</template>

<style>
#repoInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.reposCard {
  width: 30vw;
  height: 74vh;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 4vh rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}

.shadow {
  width: 25vw;
  height: 70vh;
  background-color: #d9d9d9;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.shadowB {
  width: 25vw;
  height: 70vh;
  background-color: #d9d9d9;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.reposCard span {
  font-weight: 600;
  color: black;
  display: block;
  font-size: 1.1em;
}

.reposCard span img:hover {
  transform: scale(1.2);
}

.reposCard .job {
  font-weight: 600;
  color: black;
  display: block;
  font-size: 1.1em;
}

.title {
  font-size: 14px;
}
.description {
  font-size: 12px;
}

@media (min-height: 768px) {
  .title {
    font-size: 24px;
  }
  .description {
    font-size: 20px;
  }
}

@media (min-width: 1000px) {
  .title {
    font-size: 24px;
  }
  .description {
    font-size: 20px;
  }
}

h4 {
  margin-top: 2vh;
  color: rgb(255, 255, 255);
}

#routerDiv {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>