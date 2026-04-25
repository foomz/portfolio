<template>
  <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
    <div class="flex flex-col items-center space-y-6">
      <!-- Animated Spinner -->
      <div class="relative w-16 h-16">
        <!-- Outer ring -->
        <div class="absolute inset-0 rounded-full border-4 border-gray-700/30"></div>
        <!-- Inner rotating ring -->
        <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>
        <!-- Center dot -->
        <div class="absolute inset-0 rounded-full flex items-center justify-center">
          <div class="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>
      </div>
      
      <!-- Loading Text -->
      <div class="text-center">
        <p class="text-white text-lg font-semibold">Loading Portfolio</p>
        <p class="text-gray-400 text-sm mt-2">{{ loadingText }}</p>
      </div>

      <!-- Progress Bar -->
      <div class="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  isLoading: {
    type: Boolean,
    default: true
  }
})

const progress = ref(0)
const loadingText = ref('Initializing...')

const loadingMessages = [
  'Loading my profile...',
  'Preparing components...',
  'Rendering sections...',
  'Almost there...',
  'Finalizing...'
]

onMounted(() => {
  let messageIndex = 0
  let progressValue = 0

  const progressInterval = setInterval(() => {
    progressValue += Math.random() * 30
    if (progressValue > 90) progressValue = 90
    progress.value = Math.floor(progressValue)

    if (messageIndex < loadingMessages.length && progressValue > (messageIndex + 1) * 18) {
      loadingText.value = loadingMessages[messageIndex]
      messageIndex++
    }
  }, 400)

  return () => clearInterval(progressInterval)
})
</script>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 2s linear infinite;
}
</style>
