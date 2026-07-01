<template>
  <div ref="videoContainer" class="relative h-full min-h-96 pointer-events-none select-none">
    <iframe
      src="https://streamable.com/e/z0y5u4?autoplay=1&muted=1"
      allow="autoplay; encrypted-media"
      allowfullscreen
      frameborder="0"
      class="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      tabindex="-1"
    ></iframe>
    <button
      type="button"
      class="pointer-events-auto absolute left-3 top-3 z-20 inline-flex items-center gap-2 rounded-lg border border-white/30 bg-black/70 px-3 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white"
      :aria-label="isFullscreen ? 'Exit Zero Balance Billing Dashboard fullscreen video' : 'Open Zero Balance Billing Dashboard video in fullscreen'"
      :title="isFullscreen ? 'Exit full view' : 'Full view'"
      @click="toggleFullscreen"
    >
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path v-if="isFullscreen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8H3m0 0V3m0 5 5-5m8 5h5m0 0V3m0 5-5-5M8 16H3m0 0v5m0-5 5 5m8-5h5m0 0v5m0-5-5 5" />
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
      </svg>
      <span>{{ isFullscreen ? 'Exit full view' : 'Full view' }}</span>
    </button>
    <div class="absolute bottom-2 left-2 right-2 bg-black bg-opacity-60 text-white text-xs p-2 rounded pointer-events-auto select-text z-10">
      In accordance with appropriate Non-Disclosure Agreements, this demo video has been carefully edited to prevent any data exposure. Certain project details have been anonymized or abstracted to maintain confidentiality while demonstrating my expertise with relevant technologies and architectural patterns.
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const videoContainer = ref(null)
const isFullscreen = ref(false)

const getFullscreenElement = () => document.fullscreenElement || document.webkitFullscreenElement

const updateFullscreenState = () => {
  isFullscreen.value = getFullscreenElement() === videoContainer.value
}

const toggleFullscreen = async () => {
  const container = videoContainer.value

  if (getFullscreenElement()) {
    if (document.exitFullscreen) {
      await document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  } else if (container?.requestFullscreen) {
    await container.requestFullscreen()
  } else if (container?.webkitRequestFullscreen) {
    container.webkitRequestFullscreen()
  }
}

onMounted(() => {
  document.addEventListener('fullscreenchange', updateFullscreenState)
  document.addEventListener('webkitfullscreenchange', updateFullscreenState)
})

onBeforeUnmount(() => {
  document.removeEventListener('fullscreenchange', updateFullscreenState)
  document.removeEventListener('webkitfullscreenchange', updateFullscreenState)
})
</script>
