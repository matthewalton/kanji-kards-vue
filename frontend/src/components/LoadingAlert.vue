<script setup lang="ts"></script>

<template>
  <div class="my-2">
    <div class="dot-typing"></div>
  </div>
</template>

<style scoped>
.dot-typing {
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  color: primary;
  box-shadow: 9984px 0 0 0 #ffffff, 9999px 0 0 0 #ffffff, 10014px 0 0 0 #ffffff;
  animation: dot-typing 1.5s infinite linear;
}

@keyframes dot-typing {
  0% {
    box-shadow: 9984px 0 0 0 #ffffff, 9999px 0 0 0 #ffffff,
      10014px 0 0 0 #ffffff;
  }
  16.667% {
    box-shadow: 9984px -10px 0 0 #ffffff, 9999px 0 0 0 #ffffff,
      10014px 0 0 0 #ffffff;
  }
  33.333% {
    box-shadow: 9984px 0 0 0 #ffffff, 9999px 0 0 0 #ffffff,
      10014px 0 0 0 #ffffff;
  }
  50% {
    box-shadow: 9984px 0 0 0 #ffffff, 9999px -10px 0 0 #ffffff,
      10014px 0 0 0 #ffffff;
  }
  66.667% {
    box-shadow: 9984px 0 0 0 #ffffff, 9999px 0 0 0 #ffffff,
      10014px 0 0 0 #ffffff;
  }
  83.333% {
    box-shadow: 9984px 0 0 0 #ffffff, 9999px 0 0 0 #ffffff,
      10014px -10px 0 0 #ffffff;
  }
  100% {
    box-shadow: 9984px 0 0 0 #ffffff, 9999px 0 0 0 #ffffff,
      10014px 0 0 0 #ffffff;
  }
}
</style>
