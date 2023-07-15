<script setup lang="ts">
defineProps({
  cardId: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="card shadow-sm border rounded-4 text-bg-tertiary h-100">
    <div class="card-body text-center">
      <div class="d-flex flex-column mb-2">
        <span class="fs-1"></span>
        <span class="small"></span>
      </div>

      <h5 class="card-title fw-bold"></h5>
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
