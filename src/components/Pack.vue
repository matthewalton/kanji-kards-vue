<script setup lang="ts">
import PackDTO from "../types/PackDTO";

defineProps({
  pack: { type: Object as () => PackDTO, required: true },
});
</script>

<template>
  <div
    class="card shadow-sm border rounded-4 text-bg-tertiary h-100"
    role="button"
  >
    <div class="card-body text-center">
      <div class="d-flex flex-column mb-2">
        <span class="fs-1" v-html="pack.kanji"></span>
        <span class="small" v-html="`(${pack.pronunciation})`"></span>
      </div>

      <h5 class="card-title fw-bold" v-html="pack.title"></h5>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: box-shadow 0.2s ease-in-out;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>
