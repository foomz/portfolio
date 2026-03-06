<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 overflow-hidden" id="profile">
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -inset-10 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Profile Section -->
      <div class="mb-8 sm:mb-12 lg:mb-16"
           v-motion
           :initial="{ y: 100, opacity: 0 }"
           :visible="{ y: 0, opacity: 1 }"
           :delay="200">
        
        <!-- Profile Image -->
        <div class="relative mb-8 inline-block">
          <div class="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm hover:scale-105 transition-all duration-500"
               v-motion
               :initial="{ scale: 0, opacity: 0 }"
               :visible="{ scale: 1, opacity: 1 }"
               :delay="400">
            <img src="https://i.imgur.com/2o0jZY6.jpeg" alt="Johnray M. De Luna" class="w-full h-full object-cover">
          </div>
          <!-- Status Indicator -->
          <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <!-- Name and Title -->
        <div class="space-y-4 mb-8">
          <TypeWriter
            :texts="['Johnray M. De Luna']"
            tag="h1"
            class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
          />
          <div class="space-y-2">
            <TypeWriter
              :texts="['Full Stack Developer & DevOps Professional', '7+ Years Experience in Government Systems & AI Solutions']"
              tag="p"
              class="text-2xl md:text-3xl font-semibold text-blue-200"
              :repeat="false"
            />
          </div>
        </div>

        <!-- Professional Summary -->
        <div class="max-w-4xl mx-auto mb-12 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
             v-motion
             :initial="{ y: 50, opacity: 0 }"
             :visible="{ y: 0, opacity: 1 }"
             :delay="600">
          <h3 class="text-xl font-bold mb-4 text-blue-300">Professional Summary</h3>
          <p class="text-gray-200 leading-relaxed text-left">
            Full Stack Developer and DevOps Professional with 7+ years of progressive experience creating secure and scalable systems 
            along with AI-powered solutions in large government organizations such as the Department of Health (DOH) and National 
            Bureau of Investigation (NBI). Specialized in Laravel, Django, React, Next.js, Docker, CI/CD, AWS, TensorFlow, and modern DevOps practices.
          </p>
        </div>

        <!-- Key Highlights -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div v-for="(highlight, index) in highlights" 
               :key="highlight.title"
               class="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
               v-motion
               :initial="{ y: 30, opacity: 0 }"
               :visible="{ y: 0, opacity: 1 }"
               :delay="800 + index * 100">
            <div class="text-3xl mb-3">{{ highlight.icon }}</div>
            <h4 class="text-lg font-semibold text-blue-300 mb-2">{{ highlight.title }}</h4>
            <p class="text-sm text-gray-300">{{ highlight.description }}</p>
          </div>
        </div>
      </div>

      <!-- Social Links -->
      <div class="flex flex-wrap justify-center gap-4"
           v-motion
           :initial="{ y: 50, opacity: 0 }"
           :visible="{ y: 0, opacity: 1 }"
           :delay="1000">
        <a v-for="social in socialLinks" 
           :key="social.name"
           :href="social.url" 
           :target="social.name === 'Email' ? '_self' : '_blank'"
           class="flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
          <EnvelopeIcon v-if="social.name === 'Email'" class="h-5 w-5 text-white group-hover:text-blue-300 transition-colors" />
          <div v-else v-html="social.icon" class="text-white group-hover:text-blue-300 transition-colors"></div>
          <span class="text-white group-hover:text-blue-300 transition-colors">{{ social.name }}</span>
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import TypeWriter from './ui/TypeWriter.vue'

const highlights = ref([
  {
    icon: '🏥',
    title: 'Healthcare Systems',
    description: 'AI-driven eHealth systems for DOH including ICNCDRS, IDTOMIS, and clinical decision support'
  },
  {
    icon: '🔐',
    title: 'Cybersecurity Expert',
    description: 'Digital forensics, cyber investigations, and secure system architecture for NBI operations'
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'AWS, Docker, CI/CD pipelines, and scalable microservice architectures'
  }
])

const socialLinks = ref([
  {
    name: 'Email',
    url: 'mailto:johnraydeluna28@gmail.com',
    icon: ''
  },
  {
    name: 'GitHub',
    url: 'https://github.com/foomz',
    icon: `<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>`
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/johnraydeluna',
    icon: `<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>`
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/Foomz.Cuteness',
    icon: `<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>`
  },
])

// Icon components as strings for dynamic rendering
const GitHubIcon = {
  template: `<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>`
}

const LinkedInIcon = {
  template: `<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>`
}

const FacebookIcon = {
  template: `<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>`
}

const GlobeIcon = {
  template: `<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
  </svg>`
}
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
