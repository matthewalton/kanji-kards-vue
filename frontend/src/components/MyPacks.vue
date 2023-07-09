<script setup lang="ts">
import { usePacksStore } from "../stores/packsStore.ts";
import Pack from "./Pack.vue";

const packsStore = usePacksStore();
const packs = packsStore.$state;
</script>

<template>
  <div class="row align-items-stretch">
    <div v-for="pack in packs" class="col-sm-6 col-md-4 mb-4">
      <Pack :pack="pack" />
    </div>
  </div>
</template>

<style scoped></style>
