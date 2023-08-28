<script setup>
import Card from "../components/Card.vue";
</script>

<template>
  <div style="display: flex; justify-content: space-around; align-items: center; width: 90vw">
    <Card />
    <div id="containerWelcomeText">
      <h3 class="white">Welcome to my portfolio!</h3>
      <h3 class="typeWriter">{{ typedText }}</h3>
    </div>
  </div>
</template>

<style>
#containerWelcomeText {
  width: 30vw;
}

.white {
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.typeWriter {
  color: white;
  width: 90%;
  border-top: 2px solid green;
  border-bottom: 2px solid green;
  margin-top: 3vh;
  font-size: 14px;
}

@media (min-height: 660px) {
  .white {
    font-size: 24px;
  }

  .typeWriter {
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
</style>

<script>
export default {
  data() {
    return {
      text: "Hi, I'm Javier. This is my portfolio, you can navigate through the pages using the menu. The card is linked to my LinkedIn, Github and also has my phone, you can click on the icons. Let's navigate through the 'About Me' and 'Repositories' pages.",
      typedText: "",
      currentIndex: 0,
      typingSpeed: 5,
    };
  },
  mounted() {
    this.typeWriter();
  },
  methods: {
    typeWriter() {
      if (this.currentIndex < this.text.length) {
        this.typedText += this.text.charAt(this.currentIndex);
        this.currentIndex++;
        setTimeout(this.typeWriter, this.typingSpeed);
      }
    },
  },
};
</script>
