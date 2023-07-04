<script setup lang="ts">
import { ref } from 'vue';
import { sendMessage } from '../assets/js/chatService';

const userMessage = ref('');
const messages = ref<{id: number, sender: string, content: string}[]>([]);

async function search() {
  if (userMessage.value.trim() === '') return;

  // Send user message to ChatGPT
  const botMessage = await sendMessage(userMessage.value);

  // Add user and bot messages to the conversation
  messages.value.push({ id: Date.now(), sender: 'user', content: userMessage.value });
  messages.value.push({ id: Date.now() + 1, sender: 'bot', content: botMessage });

  // Clear the input field
  userMessage.value = '';
}
</script>

<template>
  <div>
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
      <input v-model="userMessage" @keydown.enter="search" placeholder="Type a message..." />
    </div>
  </div>
</template>

<style scoped>

</style>