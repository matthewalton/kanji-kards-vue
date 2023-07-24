<script setup lang="ts">
import KanjiCardDTO from "../../types/KanjiCardDTO";

defineProps({
  card: {
    type: Object as () => KanjiCardDTO,
    required: true,
  },
  animate: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    role="button"
    class="card w-max border-4 transition ease-in-out hover:shadow border-zinc-200 dark:border-gray-700 bg-zinc-50 dark:bg-gray-800 text-zinc-800 dark:text-gray-400"
    :class="{ 'hover:-translate-y-1': animate }"
  >
    <div class="text-center text-4xl">
      {{ card.kanji }}
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: box-shadow 0.2s ease-in-out;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  z-index: 2;
}
</style>
