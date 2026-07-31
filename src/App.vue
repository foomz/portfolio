<template>
  <div class="min-h-screen w-full min-w-0 overflow-x-clip bg-gray-200 text-gray-900 antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100" @contextmenu.prevent>
    <!-- Loading Spinner -->
    <Spinner :isLoading="isLoading" />

    <!-- Navigation with scroll effect -->
    <nav class="fixed top-0 z-10 w-full bg-white/95 shadow-lg backdrop-blur transition-all duration-300 dark:bg-gray-800/95"
          :class="{ 'py-2': scrolled }"
          ref="navbar">
      <div class="mx-auto w-full max-w-screen-2xl px-3 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div class="flex h-14 items-center justify-between gap-3 sm:h-16 lg:h-[4.5rem] xl:h-20">
          <div class="flex min-w-0 items-center space-x-2 sm:space-x-3">
            <img src="https://i.imgur.com/Ap9Seoc.png" alt="Profile" class="h-8 w-8 flex-none rounded-full object-cover sm:h-10 sm:w-10 lg:h-11 lg:w-11 xl:h-12 xl:w-12">
            <h1 class="truncate text-base font-bold dark:text-white sm:text-xl lg:text-2xl">Portfolio</h1>
          </div>
          <!-- Desktop/Tablet Navigation -->
          <div class="hidden lg:flex items-center justify-end gap-1 xl:gap-2 2xl:gap-3">
            <button @click="toggleDarkMode" 
                    class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 xl:h-11 xl:w-11">
              <SunIcon v-if="isDark" class="h-5 w-5 xl:h-6 xl:w-6 text-yellow-500" />
              <MoonIcon v-else class="h-5 w-5 xl:h-6 xl:w-6 text-gray-600" />
            </button>
            <a href="#profile" class="rounded-md px-2 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 xl:px-3 xl:text-base 2xl:px-4" @click.prevent="navigateToSection('profile')">Profile</a>
            <a href="#experience" class="rounded-md px-2 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 xl:px-3 xl:text-base 2xl:px-4" @click.prevent="navigateToSection('experience')">Experience</a>
            <a href="#gallery" class="rounded-md px-2 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 xl:px-3 xl:text-base 2xl:px-4" @click.prevent="navigateToSection('gallery')">Gallery</a>
            <a href="#skills" class="rounded-md px-2 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 xl:px-3 xl:text-base 2xl:px-4" @click.prevent="navigateToSection('skills')">Skills</a>
            <a href="#projects" class="rounded-md px-2 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 xl:px-3 xl:text-base 2xl:px-4" @click.prevent="navigateToSection('projects')">Projects</a>
          </div>
          <!-- Tablet Navigation -->
          <div class="hidden md:flex lg:hidden items-center justify-end gap-1">
            <button @click="toggleDarkMode" 
                    class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              <SunIcon v-if="isDark" class="h-5 w-5 text-yellow-500" />
              <MoonIcon v-else class="h-5 w-5 text-gray-600" />
            </button>
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="flex h-10 w-10 items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <svg v-if="!mobileMenuOpen" class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <!-- Mobile Hamburger -->
          <div class="flex items-center gap-1.5 md:hidden">
            <button @click="toggleDarkMode" 
                    class="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              <SunIcon v-if="isDark" class="h-5 w-5 text-yellow-500" />
              <MoonIcon v-else class="h-5 w-5 text-gray-600" />
            </button>
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="flex h-9 w-9 items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <svg v-if="!mobileMenuOpen" class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <!-- Mobile/Tablet Menu -->
        <transition name="slide-fade">
          <div v-if="mobileMenuOpen" class="absolute right-0 top-14 z-20 w-[min(20rem,calc(100vw-1rem))] rounded-bl-lg bg-white shadow-xl dark:bg-gray-800 sm:top-16 sm:w-80 lg:hidden">
            <div class="flex flex-col items-end space-y-1 px-3 py-4 sm:px-4">
              <a href="#profile" class="w-full rounded-md px-4 py-3 text-right text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400 md:text-lg" @click.prevent="navigateToSection('profile')">Profile</a>
              <a href="#experience" class="w-full rounded-md px-4 py-3 text-right text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400 md:text-lg" @click.prevent="navigateToSection('experience')">Work Experience</a>
              <a href="#gallery" class="w-full rounded-md px-4 py-3 text-right text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400 md:text-lg" @click.prevent="navigateToSection('gallery')">Work Gallery</a>
              <a href="#skills" class="w-full rounded-md px-4 py-3 text-right text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400 md:text-lg" @click.prevent="navigateToSection('skills')">Skills</a>
              <a href="#projects" class="w-full rounded-md px-4 py-3 text-right text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400 md:text-lg" @click.prevent="navigateToSection('projects')">Projects</a>
            </div>
          </div>
        </transition>
      </div>
    </nav>

    <main class="w-full min-w-0 overflow-x-clip pt-14 sm:pt-16 lg:pt-[4.5rem] xl:pt-20">
        <!-- Hero Profile Section -->
        <Profile data-nav-section="profile" /> <!-- Render the Profile Component -->

        <!-- Work Experience Section -->
        <section id="experience" data-nav-section="experience" class="scroll-mt-14 sm:scroll-mt-16 lg:scroll-mt-[4.5rem] xl:scroll-mt-20">
          <WorkExperience /> <!-- Render the Work Experience Component with experience prop -->
        </section>

        <!-- Work Gallery Section -->
        <section id="gallery" data-nav-section="gallery" class="scroll-mt-14 sm:scroll-mt-16 lg:scroll-mt-[4.5rem] xl:scroll-mt-20">
          <WorkGallery /> <!-- Render the Work Gallery Component -->
        </section>

        <!-- Projects Section -->
        <section id="projects" data-nav-section="projects" class="scroll-mt-14 sm:scroll-mt-16 lg:scroll-mt-[4.5rem] xl:scroll-mt-20">
          <Projects /> <!-- Render the Projects Component -->
        </section>

        <!-- Skills Section -->
        <section id="skills" data-nav-section="skills" class="scroll-mt-14 sm:scroll-mt-16 lg:scroll-mt-[4.5rem] xl:scroll-mt-20">
          <Skills /> <!-- Render the Skills Component -->
        </section>
    </main>

    <!-- Footer Using now at Skills.vue Component--> 
   <!-- <footer class="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <div class="flex justify-center space-x-6 mb-4">
          <a href="mailto:jdeluna@nbi.gov.ph" class="flex items-center space-x-2 hover:text-blue-400 transition-colors">
            <EnvelopeIcon class="h-5 w-5" />
            <span>Email</span>
          </a>
          <a href="https://facebook.com/Foomz.Cuteness" target="_blank" class="flex items-center space-x-2 hover:text-blue-400 transition-colors">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>
          <a href="https://github.com/foomz" target="_blank" class="flex items-center space-x-2 hover:text-blue-400 transition-colors">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/johnraydeluna" target="_blank" class="flex items-center space-x-2 hover:text-blue-400 transition-colors">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
        <p class="text-gray-300">© {{ new Date().getFullYear() }} Johnray M. De Luna. All rights reserved.</p>
      </div>
    </footer> -->

  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue' // Importing necessary Vue functions
// Mobile menu state
const mobileMenuOpen = ref(false)
const isLoading = ref(true)
import { EnvelopeIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline' // Importing icons
import { trackVisitor } from './utils/geolocation' // Importing geolocation tracking utility
import WorkExperience from './components/Work-Experience.vue' // Experience for work-experiences from components
import WorkGallery from './components/Work-Gallery.vue' // Work Gallery from components
import Projects from './components/Projects.vue' // Projects from components
import Skills from './components/Skills.vue' // Skills from components
import Profile from './components/Profile.vue' // Profile from components
import Spinner from './components/ui/Spinner.vue' // Spinner for loading state

const scrolled = ref(false)
const isDark = ref(true)
const navbar = ref(null)
let loadingTimer = null

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const navigateToSection = async (sectionId) => {
  mobileMenuOpen.value = false
  await nextTick()

  const section = document.querySelector(`[data-nav-section="${sectionId}"]`) || document.getElementById(sectionId)

  if (!section) return

  const navHeight = navbar.value?.getBoundingClientRect().height || 0
  const targetTop = section.getBoundingClientRect().top + window.scrollY - navHeight - 8

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: 'smooth'
  })

  window.history.replaceState(null, '', `#${sectionId}`)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Set initial dark mode state (default to dark)
  document.documentElement.classList.add('dark');

  // Track Geolocation logging
  trackVisitor().catch(console.error);

  // Hide loading spinner after components are rendered (2.5 seconds)
  loadingTimer = setTimeout(() => {
    isLoading.value = false
  }, 2500)
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)

  if (loadingTimer) {
    clearTimeout(loadingTimer)
  }
});

// projects array moved to Projects.vue
</script>

<style>
html {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

@keyframes rotate-360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.hover\:rotate-360:hover {
  animation: rotate-360 1s linear;
}

.transform {
  transition-property: transform;
}

.transition-all {
  transition-property: all;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.hover\:translate-x-2:hover {
  transform: translateX(0.5rem);
}
</style>
