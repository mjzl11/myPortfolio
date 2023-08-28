<script setup>
import { ref, inject } from "vue";

let showPhone = ref(false);

const handlerShowPhone = () => {
  showPhone.value = !showPhone.value;
};

</script>

<template>
      <div id="cardContainerCard">
        <div class="card">
          <div style="display: block">
            <div class="img"></div>
            <h3> Javier Zamora Lorente </h3>
            <p class="job">Web Developer</p>
            <div id="cardContact">
              <span class="hover" style="padding: 20px"
                ><a href="https://github.com/mjzl11" target="_blank"
                  ><img
                    style="height: 25px; width: 25px; cursor: pointer"
                    src="../assets/github.svg" /></a
              ></span>
              <span
                class="hover"
                href="https://github.com/mjzl11"
                style="padding: 20px"
                ><a
                  href="https://www.linkedin.com/in/javier-zamora-lorente-5b6786287/"
                  target="_blank"
                  ><img
                    style="height: 25px; width: 25px; cursor: pointer"
                    src="../assets/linkedin.svg" /></a
              ></span>
              <span class="hover" style="padding: 20px"><img
                  style="height: 25px; width: 25px; cursor: pointer"
                  src="../assets/phone-solid.svg"
                  @click="handlerShowPhone"
              /></span>
            </div>
                        <h3 v-if="showPhone">+34 610 45 27 64</h3>
            </div>
          </div>
        </div>
</template>

<style>
#cardContainerCard {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#cardContact {
  display: flex;
  justify-content: center;
  margin-top: 2vh;
}

.card {
  width: 30vw;
  height: 74vh;
  background-image: linear-gradient(
    144deg,
    green,
    rgb(145, 235, 145),
    #bdf496 60%
  );
  border-radius: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 4vh rgb(237, 254, 2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.card h3 {
  font-weight: 600;
  color: black;
  text-align: center;
  display: block;
  font-size: 1.1em;
}

.card .job {
  font-weight: 600;
  color: black;
  display: block;
  text-align: center;
  font-size: 1.1em;
}

.card .img {
  width: 110px;
  height: 110px;
  background-image: url("../assets/i2.jpg");
  background-size: contain;
  background-position: center;
  border-radius: 100%;
  margin: auto;
  margin-top: 4vh;
  margin-bottom: 4vh;
}

@media (min-height: 768px) {
  .card .img {
    width: 240px;
    height: 240px;
  }
}

@media (min-width: 1000px) {
  .card .img {
    width: 240px;
    height: 240px;
  }
}

h4 {
  margin-top: 2vh;
  text-align: center;
  color: rgb(255, 255, 255);
}

#routerDiv {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>