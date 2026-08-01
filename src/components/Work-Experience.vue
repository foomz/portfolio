<template>
  <div ref="sequenceEl" class="work-sequence relative bg-slate-950 text-white">
    <div class="sequence-sticky sticky top-0 overflow-hidden bg-slate-950">
      <canvas
        ref="canvasEl"
        class="absolute inset-0 block h-full w-full"
        role="img"
        :aria-label="`Work experience animation, frame ${displayFrame} of ${FRAME_COUNT}`"
      />

      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/75" />

      <!-- Header content Display within frames 2-9 with Transition Effect-->
      <Transition name="career-heading">
        <div
          v-if="displayFrame >= 2 && displayFrame <= 9"
          class="pointer-events-none absolute inset-x-0 top-0 mx-auto w-full max-w-screen-2xl px-5 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pt-16"
        >
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300 sm:text-sm">
            Career journey
          </p>
          <h2 class="mt-2 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Work Experience
          </h2>
          <p class="mt-3 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Scroll through the story behind the systems, services, and solutions I build.
          </p>
        </div>
      </Transition>

      <!-- Left Corner Doh Display frame 8-21 with Transition Effect-->
      <Transition name="left-corner">
        <article
          v-if="displayFrame >= 8 && displayFrame <= 21"
          class="pointer-events-none absolute bottom-4 left-4 w-[calc(100%_-_2rem)] max-w-xl sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10"
          aria-labelledby="doh-position-title"
        >
          <div class="relative pl-5 sm:pl-7">
            <div class="absolute inset-y-2 left-0 w-px bg-gradient-to-b from-emerald-300 via-emerald-400/70 to-transparent" />
            <div class="absolute left-0 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-slate-950 bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />

            <div class="rounded-2xl border border-white/15 bg-slate-950/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-5">
              <div class="flex items-start gap-3">
                <img
                  src="https://i.imgur.com/DWLi59S.png"
                  alt="Department of Health logo"
                  class="h-10 w-10 flex-none rounded-full bg-white object-cover ring-2 ring-emerald-300/60 sm:h-12 sm:w-12"
                />
                <div class="min-w-0 flex-1">
                  <div class="flex flex-wrap items-center gap-2">
                    <p class="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-emerald-300 sm:text-xs">Department of Health</p>
                    <span class="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-emerald-200 ring-1 ring-inset ring-emerald-300/30">Current</span>
                  </div>
                  <h3 id="doh-position-title" class="mt-1 text-base font-bold leading-tight text-white sm:text-xl">
                    Information Systems Analyst / Full Stack Engineer
                  </h3>
                  <p class="mt-1 text-[0.7rem] text-slate-300 sm:text-xs">March 2025–Present · Sta. Cruz, Manila</p>
                </div>
              </div>

              <p class="mt-3 text-[0.68rem] leading-relaxed text-slate-300 sm:text-xs">
                eHealth Systems Division, Knowledge Management and Information Technology Service
              </p>

              <div class="mt-3 border-t border-white/10 pt-3">
                <p class="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-300 sm:text-xs">Responsibilities & achievements</p>
                <ul class="mt-2 grid gap-1.5 text-[0.68rem] leading-snug text-slate-200 sm:grid-cols-2 sm:gap-x-4 sm:text-xs">
                  <li v-for="responsibility in dohResponsibilities" :key="responsibility" class="flex items-start gap-2">
                    <span class="mt-[0.4em] h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                    <span>{{ responsibility }}</span>
                  </li>
                </ul>
              </div>

              <div class="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies and tools">
                <span
                  v-for="technology in dohTechnologies"
                  :key="technology"
                  class="rounded-full bg-white/5 px-2 py-1 text-[0.6rem] font-medium text-slate-200 ring-1 ring-inset ring-white/10 sm:text-[0.68rem]"
                >
                  {{ technology }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </Transition>

      <!-- Right Corner NBI Display frame 27-48 with Transition Effect-->
      <Transition name="right-corner">
        <article
          v-if="displayFrame >= 27 && displayFrame <= 48"
          class="pointer-events-none absolute bottom-4 right-4 w-[calc(100%_-_2rem)] max-w-xl sm:bottom-6 sm:right-6 lg:bottom-10 lg:right-10"
          aria-labelledby="nbi-position-title"
        >
          <div class="relative pr-5 sm:pr-7">
            <div class="absolute inset-y-2 right-0 w-px bg-gradient-to-b from-sky-300 via-sky-400/70 to-transparent" />
            <div class="absolute right-0 top-2 h-3 w-3 translate-x-1/2 rounded-full border-2 border-slate-950 bg-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />

            <div class="rounded-2xl border border-white/15 bg-slate-950/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-5">
              <div class="flex items-start gap-3">
                <img
                  src="https://i.imgur.com/xl5tD04.png"
                  alt="National Bureau of Investigation logo"
                  class="h-12 w-10 flex-none rounded-full bg-white object-cover ring-2 ring-sky-300/60 sm:h-14 sm:w-12"
                />
                <div class="min-w-0 flex-1">
                  <div class="flex flex-wrap items-center gap-2">
                    <p class="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-sky-300 sm:text-xs">National Bureau of Investigation</p>
                    <span class="rounded-full bg-sky-400/15 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-sky-200 ring-1 ring-inset ring-sky-300/30">7 years</span>
                  </div>
                  <h3 id="nbi-position-title" class="mt-1 text-base font-bold leading-tight text-white sm:text-xl">
                    Project Worker / Cyber Investigator
                  </h3>
                  <p class="mt-1 text-[0.7rem] text-slate-300 sm:text-xs">March 2018–December 2024 · Main Building, Manila</p>
                </div>
              </div>

              <p class="mt-3 text-[0.68rem] leading-relaxed text-slate-300 sm:text-xs">
                Progressed from on-the-job trainee to full project worker across digital forensics, cybercrime, infrastructure, and regional operations.
              </p>

              <div class="mt-3 border-t border-white/10 pt-3">
                <p class="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sky-300 sm:text-xs">Responsibilities & achievements</p>
                <ul class="mt-2 grid gap-1.5 text-[0.68rem] leading-snug text-slate-200 sm:grid-cols-2 sm:gap-x-4 sm:text-xs">
                  <li v-for="responsibility in nbiResponsibilities" :key="responsibility" class="flex items-start gap-2">
                    <span class="mt-[0.4em] h-1.5 w-1.5 flex-none rounded-full bg-sky-300" />
                    <span>{{ responsibility }}</span>
                  </li>
                </ul>
              </div>

              <div class="mt-3 flex flex-wrap gap-1.5" aria-label="NBI department assignments">
                <span
                  v-for="assignment in nbiAssignments"
                  :key="assignment"
                  class="rounded-full bg-sky-400/10 px-2 py-1 text-[0.6rem] font-medium text-sky-100 ring-1 ring-inset ring-sky-300/20 sm:text-[0.68rem]"
                >
                  {{ assignment }}
                </span>
              </div>

              <div class="mt-2 flex flex-wrap gap-1.5" aria-label="NBI specializations">
                <span
                  v-for="technology in nbiTechnologies"
                  :key="technology"
                  class="rounded-full bg-white/5 px-2 py-1 text-[0.6rem] font-medium text-slate-200 ring-1 ring-inset ring-white/10 sm:text-[0.68rem]"
                >
                  {{ technology }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </Transition>

      <div
        v-if="loadedFrames < FRAME_COUNT"
        class="absolute inset-0 z-10 grid place-items-center bg-slate-950"
        aria-live="polite"
      >
        <div class="w-56 text-center">
          <p class="text-sm font-medium text-slate-200">Loading work experience</p>
          <div class="mt-3 h-1 overflow-hidden rounded-full bg-white/15">
            <div class="h-full rounded-full bg-cyan-300 transition-[width] duration-200" :style="{ width: `${loadPercent}%` }" />
          </div>
          <p class="mt-2 text-xs tabular-nums text-slate-400">{{ loadPercent }}%</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const FRAME_COUNT = 48
const sequenceEl = ref(null)
const canvasEl = ref(null)
const loadedFrames = ref(0)
const displayFrame = ref(1)
const frames = Array.from({ length: FRAME_COUNT }, () => null)
const dohResponsibilities = [ // Call this array to display the responsibilities in the template of Div left corner
  'Design and operate secure, AI-driven eHealth systems, workflow automation, analytics, and reporting.',
  'Architect REST API integrations across DOH, partner agencies, regional offices, and health facilities.',
  'Build interoperable microservices with Django REST Framework, Laravel, Next.js, and Node.js.',
  'Develop an AI-assisted ICD-10/11 clinical coding module for iClinicSys using Gemini and machine learning.',
  'Implement RBAC, audit trails, JWT and token authentication, encryption, and SSL/TLS controls.',
  'Automate synchronization of patient, laboratory, facility, and statistical records across DOH systems.',
  'Integrate FastAPI facial recognition into IDTOMIS for real-time face registration and matching.'
]
const dohTechnologies = ['Django', 'FastAPI', 'Next.js', 'TensorFlow', 'Gemini AI', 'Laravel', 'REST APIs'] // Call this array to display the technologies in the template of Div left corner
const nbiResponsibilities = [
  'Performed forensic imaging, evidence extraction, and court-ready documentation while preserving chain of custody.',
  'Investigated cyber incidents, assessed data breaches, and validated digital evidence for criminal cases.',
  'Used Lampyre and OSINT analysis to identify, connect, and track actionable investigative leads.',
  'Built a Django IP-tracking framework to strengthen traceability in digital-forensics investigations.',
  'Maintained nationwide NBI, clearance biometric, HR, and criminal-history platforms with 99.9% uptime.',
  'Managed data-center infrastructure, regional technical support, network diagnostics, and security monitoring.'
]
const nbiAssignments = [
  'Digital Forensics Laboratory · 2018',
  'Cybercrime Division· 2018–2022',
  'Technology Infrastructure Division · 2022–2024',
  'Regional District Offices · 2024'
]
const nbiTechnologies = ['Digital Forensics', 'Cybercrime', 'OSINT', 'Network Security', 'System Administration', 'Incident Response']
let context = null
let rafId = 0
let resizeObserver = null
let destroyed = false

const loadPercent = computed(() => Math.round((loadedFrames.value / FRAME_COUNT) * 100))
const frameSource = (index) => `${import.meta.env.BASE_URL}WorkExperienceFrames/ezgif-frame-${String(index + 1).padStart(3, '0')}.png`

function resizeCanvas() {
  if (!canvasEl.value) return

  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
  const width = Math.max(1, Math.round(canvasEl.value.clientWidth * pixelRatio))
  const height = Math.max(1, Math.round(canvasEl.value.clientHeight * pixelRatio))

  if (canvasEl.value.width !== width || canvasEl.value.height !== height) {
    canvasEl.value.width = width
    canvasEl.value.height = height
  }
}

function drawCover(image, opacity = 1) {
  if (!image?.complete || !image.naturalWidth || !context || !canvasEl.value) return

  const canvasWidth = canvasEl.value.width
  const canvasHeight = canvasEl.value.height
  const scale = Math.max(canvasWidth / image.naturalWidth, canvasHeight / image.naturalHeight)
  const width = image.naturalWidth * scale
  const height = image.naturalHeight * scale

  context.globalAlpha = opacity
  context.drawImage(image, (canvasWidth - width) / 2, (canvasHeight - height) / 2, width, height)
}

function renderFrame(position) {
  if (!context || !canvasEl.value) return

  const firstIndex = Math.min(Math.floor(position), FRAME_COUNT - 1)
  const secondIndex = Math.min(firstIndex + 1, FRAME_COUNT - 1)
  const blend = position - firstIndex

  context.globalAlpha = 1
  context.fillStyle = '#020617'
  context.fillRect(0, 0, canvasEl.value.width, canvasEl.value.height)
  drawCover(frames[firstIndex])

  if (secondIndex !== firstIndex && frames[secondIndex]?.complete) {
    drawCover(frames[secondIndex], blend)
  }

  context.globalAlpha = 1
}

function updateFromScroll() {
  rafId = 0
  if (!sequenceEl.value) return

  const bounds = sequenceEl.value.getBoundingClientRect()
  const scrollDistance = Math.max(sequenceEl.value.offsetHeight - window.innerHeight, 1)
  const progress = Math.min(Math.max(-bounds.top / scrollDistance, 0), 1)
  const framePosition = progress * (FRAME_COUNT - 1)

  displayFrame.value = Math.min(Math.floor(framePosition) + 1, FRAME_COUNT)
  renderFrame(framePosition)
}

function scheduleUpdate() {
  if (!rafId) rafId = window.requestAnimationFrame(updateFromScroll)
}

function preloadFrames() {
  for (let index = 0; index < FRAME_COUNT; index += 1) {
    const image = new Image()
    image.decoding = 'async'
    frames[index] = image

    image.onload = () => {
      if (destroyed) return
      loadedFrames.value += 1
      scheduleUpdate()
    }

    image.onerror = () => {
      if (!destroyed) loadedFrames.value += 1
    }

    image.src = frameSource(index)
  }
}

onMounted(async () => {
  await nextTick()
  context = canvasEl.value.getContext('2d', { alpha: false, desynchronized: true })
  resizeCanvas()
  preloadFrames()

  resizeObserver = new ResizeObserver(() => {
    resizeCanvas()
    scheduleUpdate()
  })
  resizeObserver.observe(canvasEl.value)

  window.addEventListener('scroll', scheduleUpdate, { passive: true })
  scheduleUpdate()
})

onBeforeUnmount(() => {
  destroyed = true
  window.removeEventListener('scroll', scheduleUpdate)
  resizeObserver?.disconnect()
  if (rafId) window.cancelAnimationFrame(rafId)

  frames.forEach((image) => {
    if (!image) return
    image.onload = null
    image.onerror = null
  })
})
</script>

<style scoped>
.work-sequence {
  height: 500vh;
  height: 500svh;
  isolation: isolate;
}

.sequence-sticky {
  height: 100vh;
  height: 100svh;
}

.career-heading-enter-active,
.career-heading-leave-active {
  transition: opacity 500ms ease, transform 500ms ease;
}

.career-heading-enter-from,
.career-heading-leave-to {
  opacity: 0;
  transform: translateY(-1.5rem);
}

.left-corner-enter-active,
.left-corner-leave-active {
  transition: opacity 600ms ease, transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

.left-corner-enter-from,
.left-corner-leave-to {
  opacity: 0;
  transform: translate(-2rem, 1rem);
}

.right-corner-enter-active,
.right-corner-leave-active {
  transition: opacity 600ms ease, transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

.right-corner-enter-from,
.right-corner-leave-to {
  opacity: 0;
  transform: translate(2rem, 1rem);
}

@media (prefers-reduced-motion: reduce) {
  .work-sequence {
    height: 100svh;
  }

  .career-heading-enter-active,
  .career-heading-leave-active,
  .left-corner-enter-active,
  .left-corner-leave-active,
  .right-corner-enter-active,
  .right-corner-leave-active {
    transition: none;
  }
}
</style>
