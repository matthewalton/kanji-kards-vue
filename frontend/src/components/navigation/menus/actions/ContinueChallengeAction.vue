<script setup lang="ts"></script>

<template>
  <div
    class="card shadow-sm border-4 rounded-4 dark:border-gray-600 bg-zinc-50 dark:bg-gray-800"
  >
    You have a challenge against the AI in progress.

    <div class="mt-5">
      <router-link
        to="/challenge"
        class="rounded px-4 py-2 transition ease-in-out text-gray-200 bg-yellow-600 hover:bg-yellow-700"
        >Continue Challenge</router-link
      >
    </div>
  </div>
</template>
