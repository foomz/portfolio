<template>
  <section class="profile-section relative min-h-[calc(100svh-4rem)] scroll-mt-16 flex flex-col items-center justify-start lg:justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 overflow-x-hidden py-8 sm:py-10 md:py-12 lg:py-14" id="profile">
    <!-- Video Background -->
    <video 
      autoplay 
      loop 
      muted 
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/ProfileVid.mp4" type="video/mp4">
    </video>

    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -inset-10 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid min-h-[calc(100svh-11rem)] items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-12 xl:gap-16">
        <!-- Hero Copy -->
        <div class="order-2 text-center text-white lg:order-1 lg:text-left"
           v-motion
           :initial="{ y: 80, opacity: 0 }"
           :visible="{ y: 0, opacity: 1 }"
           :delay="200">
          <div class="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase text-white backdrop-blur-xsm sm:text-sm">
            Full Stack Developer & DevOps Professional
          </div>

          <TypeWriter
            :texts="['Johnray M. De Luna']"
            tag="h1"
            class="mx-auto max-w-4xl text-[clamp(2.4rem,10vw,4.75rem)] font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent leading-[1.05] break-words lg:mx-0"
          />

          <TypeWriter
            :texts="['8+ Years Experience in Government Systems & AI Solutions']"
            tag="p"
            class="mt-3 mx-auto max-w-3xl text-[clamp(1rem,3.8vw,1.65rem)] font-semibold text-blue-100 leading-snug lg:mx-0"
            :repeat="false"
          />

          <!-- Professional Summary -->
          <div class="mx-auto mt-6 max-w-3xl border-l-0 border-blue-300/60 text-left lg:mx-0 lg:border-l-4 lg:pl-5"
             v-motion
             :initial="{ y: 40, opacity: 0 }"
             :visible="{ y: 0, opacity: 1 }"
             :delay="600">
            <h3 class="mb-3 text-base font-bold uppercase text-white sm:text-lg">About Me</h3>
            <p class="about-text text-sm leading-relaxed text-white sm:text-base lg:text-[1.02rem]">
              Hi, I'm Johnray! I transitioned from a law enforcement background into technology, where I have built a solid career over the past 8+ years as a Full Stack Developer and DevOps Professional. I leverage my full stack development expertise combined with cybersecurity knowledge to investigate and solve complex security challenges. I have progressive experience creating secure, scalable systems and AI-powered solutions for major government organizations such as the Department of Health (DOH) and the National Bureau of Investigation (NBI). I specialize in Laravel, Django, React, Next.js, Docker, CI/CD, AWS, TensorFlow, and modern DevOps practices. Now, I am excited to explore new opportunities in the tech industry and expand my horizons by delivering innovative technology solutions.
            </p>
          </div>

          <!-- Social Links -->
          <div class="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start"
             v-motion
             :initial="{ y: 40, opacity: 0 }"
             :visible="{ y: 0, opacity: 1 }"
             :delay="1000">
            <a v-for="social in socialLinks" 
               :key="social.name"
               :href="social.url" 
               :target="social.name === 'Email' ? '_self' : '_blank'"
               class="flex min-h-10 items-center space-x-2 px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm md:px-5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
              <EnvelopeIcon v-if="social.name === 'Email'" class="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-blue-300 transition-colors" />
              <div v-else v-html="social.icon" class="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-blue-300 transition-colors"></div>
              <span class="text-white group-hover:text-blue-300 transition-colors hidden sm:inline">{{ social.name }}</span>
            </a>
          </div>
        </div>

        <!-- Hero Visual and Highlights -->
        <div class="order-1 flex flex-col items-center text-center text-white lg:order-2 lg:items-end"
           v-motion
           :initial="{ y: 80, opacity: 0 }"
           :visible="{ y: 0, opacity: 1 }"
           :delay="350">
          <div class="relative mb-5 inline-block sm:mb-6 lg:mr-6">
            <div class="profile-avatar w-32 h-32 min-[380px]:w-36 min-[380px]:h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden border-4 border-white/25 shadow-2xl backdrop-blur-sm transition-all duration-500"
               v-motion
               :initial="{ scale: 0, opacity: 0 }"
               :visible="{ scale: 1, opacity: 1 }"
               :delay="400">
              <img src="/public/YoungMe.png" alt="Johnray M. De Luna" class="w-full h-full object-cover">
              <!-- <img src="https://i.imgur.com/GLuFwKt.jpeg" alt="Johnray M. De Luna" class="w-full h-full object-cover"> --> <!-- Temporary Disabled  -->
            </div>
            <!-- Status Indicator -->
            <div class="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-7 sm:w-8 md:w-9 h-7 sm:h-8 md:h-9 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
              <div class="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-300 rounded-full animate-pulse"></div>
            </div>
          </div>

          <!-- Key Highlights -->
          <div class="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-3 lg:max-w-md lg:grid-cols-1">
            <div v-for="(highlight, index) in highlights" 
               :key="highlight.title"
               class="rounded-lg p-4 text-left backdrop-blur-xsm transition-all duration-300 hover:-translate-y-1"
               v-motion
               :initial="{ y: 30, opacity: 0 }"
               :visible="{ y: 0, opacity: 1 }"
               :delay="800 + index * 100">
              <div class="mb-2 text-2xl sm:text-3xl">{{ highlight.icon }}</div>
              <h4 class="mb-1 text-[clamp(0.875rem,2.5vw,1rem)] font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent sm:text-base">{{ highlight.title }}</h4>
              <p class="text-xs leading-relaxed bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent sm:text-sm">{{ highlight.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="hidden lg:block absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
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
<style scoped>
.profile-avatar{
  transition: transform 300ms ease, box-shadow 300ms ease;
}
.profile-avatar:hover{
  transform: translateY(-6px) scale(1.04);
  box-shadow: 0 20px 40px rgba(0,0,0,0.45);
}
.about-text{
  transition: color 250ms ease, transform 250ms ease;
}
.about-text:hover{
  color: #dbeafe; /* lighter blue on hover */
  transform: translateY(-4px);
}
</style>
