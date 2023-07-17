<script setup lang="ts">
import KanjiCardDTO from "../../types/KanjiCardDTO";

defineProps({
  card: {
    type: Object as () => KanjiCardDTO,
    required: true,
  },
});
</script>

<template>
  <div
    role="button"
    class="card shadow-sm border rounded-4 text-bg-tertiary h-100 text-nowrap"
  >
    <div class="card-body text-center">
      <div class="d-flex flex-column">
        <span class="fs-1">{{ card.kanji }}</span>
      </div>
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
