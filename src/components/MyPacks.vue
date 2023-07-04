<script setup lang="ts">
import {ref} from "vue";
import Pack from "./Pack.vue";

const packs = ref<{title: string, description: string, kanji: string, pronunciation: string }[]>([
  { title: 'Nature', description: 'Explore Kanji characters representing elements of nature and deepen your connection with the natural world.', kanji: '自然', pronunciation: 'Shizen' },
  { title: 'Numbers', description: 'Learn Kanji characters for numbers and confidently comprehend numerical values.', kanji: '数字', pronunciation: 'Sūji' },
  { title: 'Colors', description: 'Unlock the vibrant world of Kanji characters for colors and expand your Kanji vocabulary.', kanji: '色', pronunciation: 'Iro' },
  { title: 'Body Parts', description: 'Enhance your Kanji proficiency by studying characters representing body parts and organs.', kanji: '身体の部位', pronunciation: 'Shintai no bui' },
  { title: 'Animals', description: 'Embark on a Kanji adventure through the animal kingdom and recognize characters for various animals.', kanji: '動物', pronunciation: 'Dōbutsu' },
  { title: 'Time and Seasons', description: 'Dive into Kanji characters for time, months, seasons, and special occasions.', kanji: '時間と季節', pronunciation: 'Jikan to kisetsu' },
  { title: 'Directions and Locations', description: 'Navigate through Kanji characters for directions, places, and improve your ability to give and understand directions.', kanji: '方向と場所', pronunciation: 'Hōkō to basho' },
])
</script>

<template>
  <div class="row align-items-stretch">
    <div v-for="pack in packs" class="col-sm-6 col-md-4 mb-4">
      <Pack :pack="pack" />
    </div>
  </div>
</template>

<style scoped>

</style>