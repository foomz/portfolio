<template>
  <component :is="tag" :class="customClass">
    <span>{{ displayText }}</span><span v-if="showCursor" class="typewriter-cursor">|</span>
  </component>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'

const props = defineProps({
  texts: {
    type: Array,
    required: true
  },
  tag: {
    type: String,
    default: 'span'
  },
  class: {
    type: String,
    default: ''
  },
  typingSpeed: {
    type: Number,
    default: 60 // ms per character
  },
  pause: {
    type: Number,
    default: 1200 // ms pause at end of word
  },
  repeat: {
    type: Boolean,
    default: true
  }
})

const customClass = computed(() => props.class)
const displayText = ref('')
const showCursor = ref(true)

let textIndex = 0
let charIndex = 0
let typing = true
let interval = null

function startTyping() {
  typing = true
  displayText.value = ''
  charIndex = 0
  typeChar()
}

function typeChar() {
  if (!typing) return
  const currentText = props.texts[textIndex]
  if (charIndex < currentText.length) {
    displayText.value += currentText[charIndex]
    charIndex++
    interval = setTimeout(typeChar, props.typingSpeed)
  } else {
    setTimeout(() => {
      if (props.texts.length > 1 && props.repeat) {
        eraseChar()
      } else if (textIndex < props.texts.length - 1) {
        textIndex++
        startTyping()
      }
    }, props.pause)
  }
}

function eraseChar() {
  if (!typing) return
  if (charIndex > 0) {
    displayText.value = displayText.value.slice(0, -1)
    charIndex--
    interval = setTimeout(eraseChar, props.typingSpeed / 2)
  } else {
    textIndex = (textIndex + 1) % props.texts.length
    setTimeout(startTyping, 300)
  }
}

onMounted(() => {
  startTyping()
  // Blinking cursor
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
})

watch(() => props.texts, () => {
  textIndex = 0
  startTyping()
})
</script>

<style scoped>
.typewriter-cursor {
  display: inline-block;
  width: 1ch;
  animation: blink 1s steps(1) infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
