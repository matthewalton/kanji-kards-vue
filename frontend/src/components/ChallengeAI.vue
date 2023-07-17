<script setup lang="ts">
import { ref } from "vue";
import { sendMessage } from "../assets/js/chatService";

const userMessage = ref<string>("");
const errorMessage = ref<string>("");
const messages = ref<{ id: number; sender: string; content: string }[]>([]);

const loading = ref<boolean>(false);

function search() {
  if (userMessage.value === "") return;

  loading.value = true;
  errorMessage.value = "";

  // Send user message to ChatGPT
  sendMessage(userMessage.value)
    .then((response) => {
      // Add user and bot messages to the conversation
      messages.value.push({
        id: Date.now(),
        sender: "user",
        content: userMessage.value,
      });
      messages.value.push({
        id: Date.now() + 1,
        sender: "bot",
        content: response,
      });
    })
    .catch((error) => {
      errorMessage.value = error.message;
    })
    .finally(() => {
      userMessage.value = "";
      loading.value = false;
    });
}
</script>

<template>
  <div id="ai-card" class="card rounded bg-body-tertiary w-100">
    <div
      class="card-body d-flex gap-2 align-items-center justify-content-center flex-column"
    >
      <div class="chat-history">
        <div v-for="message in messages" :key="message.id">
          <div v-if="message.sender === 'user'" class="user-message">
            {{ message.content }}
          </div>
          <div v-else class="bot-message">
            {{ message.content }}
          </div>
        </div>
      </div>

      <div class="input-area">
        <input
          v-model.trim="userMessage"
          @keydown.enter="search"
          placeholder="Type a message..."
        />
      </div>

      <div v-if="errorMessage" class="text-danger">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<style scoped>
div#ai-card {
  min-height: 50vh;
}
</style>
