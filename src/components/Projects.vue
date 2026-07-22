<template>
  <section class="py-20 px-4 relative overflow-hidden transition-all duration-300">
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src="/ProjectsVid.mp4" type="video/mp4">
    </video>

    <div class="absolute inset-0 bg-gradient-to-br from-purple-50/90 via-pink-50/85 to-rose-100/85 dark:from-gray-900/90 dark:via-purple-900/85 dark:to-gray-900/90 z-[1]"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-16"
           v-motion
           :initial="{ y: 50, opacity: 0 }"
           :visible="{ y: 0, opacity: 1 }">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Recent Projects
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-2">
          Innovative solutions spanning healthcare systems, biometric identification, and secure government applications
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            In accordance with Non-Disclosure Agreements, project details have been abstracted to ensure no exposure of proprietary data. These entries serve only to showcase technical implementation and stack expertise.
        </p>
      </div>

      <!-- Featured Projects -->
      <div class="space-y-16 mb-20">
        <div v-for="(project, index) in featuredProjects"
             :key="project.title"
             class="relative"
             v-motion
             :initial="{ y: 80, opacity: 0 }"
             :visible="{ y: 0, opacity: 1 }"
             :delay="index * 200">
          
          <div class="bg-white/10 dark:bg-gray-900/40 rounded-3xl shadow-2xl overflow-hidden border border-white/10 dark:border-gray-700 hover:shadow-3xl transition-all duration-500 backdrop-blur-xl group">
            <div :class="['grid grid-cols-1 lg:grid-cols-2 gap-0', index % 2 === 1 ? 'lg:grid-flow-col-dense' : '']">
              
                <!-- Project Image/Demo -->
                <div :class="['relative overflow-hidden', index % 2 === 1 ? 'lg:col-start-2' : '']">

                <!-- Preview Video Background for Advanced Biometric Identification System -->
                <template v-if="project.title === 'Advanced Biometric Identification System'">
                  <ABIS />
                </template>
                <!-- Preview Video Background for ICNCDRS -->
                <template v-else-if="project.title === 'Integrated Chronic Non-Communicable Disease Registry System (ICNCDRS)'">
                  <ICNCDRS />
                </template>
                <!-- Preview Video Background for ONEISS -->
                <template v-else-if="project.title === 'Online National Electronic Injury Surveillance System (ONEISS)'">
                  <ONEISS />
                </template>
                <!-- Preview Video Background for DocTracker -->
                <template v-else-if="project.title === 'QR Based Document Tracker System (DocTracker)'">
                  <DocTracker />
                </template>
                <!-- Preview Video Background for IDTOMIS -->
                <template v-else-if="project.title === 'Integrated Drug Test Operation and Management Information System (IDTOMIS)'">
                  <IDTOMIS />
                </template>
                <!-- Preview Video Background for Manila Central University AI Chatbot Assistant -->
                <template v-else-if="project.title === 'Manila Central University AI Chatbot Assistant'">
                  <MCU />
                </template>
                <!-- Preview Video Background for CIAC Information System -->
                <template v-else-if="project.title === 'NBI Cybercrime Investigation and Assessment Center (CIAC) - Cybercrime Case Management'">
                  <CiacIS />
                </template>
                <!-- Preview Video Background for Face Recognition System -->
                <template v-else-if="project.title === 'FastAPI-based Face Recognition'">
                  <FaceRecognition />
                </template>
                <!-- Preview Video Background for Zero Balance Billing Dashboard -->
                <template v-else-if="project.title === 'Zero Balance Billing Dashboard'">
                  <ZBB />
                </template>
                <!-- Preview Video Background for eLMIS Dashboard -->
                <template v-else-if="project.title === 'eLMIS Dashboard - Electronic Logistics Management Information System'">
                  <ELMIS />
                </template>
                
                <!-- Default design for other projects -->
                <template v-else>
                  <div class="bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center h-full min-h-96">
                  <div class="relative z-10 text-center">
                    <div class="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span class="text-3xl">{{ project.icon }}</span>
                    </div>
                    <!-- Category overlay content removed -->
                    <div v-if="project.demo" class="mt-4">
                    <a :href="project.demo" 
                       target="_blank"
                       class="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-300">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      <span>Live Demo</span>
                    </a>
                    </div>
                  </div>
                  <!-- Background Pattern -->
                  <div class="absolute inset-0 opacity-10">
                    <div class="absolute top-4 left-4 w-32 h-32 border-2 border-white rounded-full"></div>
                    <div class="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-full"></div>
                  </div>
                  </div>
                </template>
                </div>

              <!-- Project Content -->
              <div :class="['p-8 lg:p-12 flex flex-col justify-center', index % 2 === 1 ? 'lg:col-start-1' : '']">
                <div class="mb-4">
                  <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {{ project.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {{ project.description }}
                  </p>
                </div>

                <!-- Technologies -->
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Technologies Used</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in project.technologies" 
                          :key="tech"
                          class="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-700">
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Action Button -->
                <div class="flex items-center space-x-4">
                  <a v-if="project.link" 
                     :href="project.link" 
                     target="_blank"
                     class="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    <span>View Project</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
                <p v-if="project.link" class="text-xs text-gray-500 dark:text-gray-400 mt-3">*Demo/test live at Railway Cloud backend may be deprecated</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Projects Grid -->
      <div class="text-center mb-12">
        <h3 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Other Projects</h3>
        <p class="text-gray-600 dark:text-gray-300">Additional projects and portfolio samples</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in otherProjects"
             :key="project.title"
             class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group hover:scale-105"
             v-motion
             :initial="{ y: 50, opacity: 0 }"
             :visible="{ y: 0, opacity: 1 }"
             :delay="600 + index * 150">
          
          <!-- Project Header -->
          <div class="p-6 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {{ project.title }}
              </h4>
              <div class="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {{ project.description }}
            </p>
          </div>

          <!-- Project Footer -->
          <div class="p-6">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ project.type }}</span>
              <a :href="project.link" 
                 target="_blank"
                 class="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors">
                <span>View</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Portfolio Link -->
      <div class="text-center mt-16"
           v-motion
           :initial="{ y: 30, opacity: 0 }"
           :visible="{ y: 0, opacity: 1 }"
           :delay="1200">
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          For additional projects and code samples, visit my GitHub
        </p>
        <div class="flex justify-center space-x-4">
          <a href="https://github.com/foomz" 
             target="_blank"
             class="inline-flex items-center space-x-2 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ABIS from './Videos/ABIS.vue' // Import the ABIS video component
import ICNCDRS from './Videos/ICNCDRS.vue' // Import the ICNCDRS video component
import ONEISS from './Videos/ONEISS.vue' // Import the ONEISS video component
import DocTracker from './Videos/DocTracker.vue' // Import the DocTracker video component
import IDTOMIS from './Videos/IDTOMIS.vue' // Import the IDTOMIS video component
import MCU from './Videos/MCU.vue' // Import the MCU video component
import CiacIS from './Videos/CiacIS.vue' // Import the CiacIS video component
import FaceRecognition from './Videos/Face-Recognition.vue' // Import the Face Recognition video component
import ZBB from './Videos/ZBB.vue' // ImpoZero Balance Billing Dashboardrt the ZBB video component
import ELMIS from './Videos/ELMIS.vue' // Import eLMIS video component

const featuredProjects = ref([
  {
    title: 'eLMIS Dashboard - Electronic Logistics Management Information System',
    category: 'Healthcare Analytics & Government Dashboard',
    icon: '🏥',
    description: 'Developed the eLMIS Dashboard, a responsive web-based analytics portal for monitoring national supply-chain data from Google Cloud BigQuery, including inventory, warehouses, facilities, stock levels, expiry risks, transactions, and user activity. It features interactive charts and live filters, plus a Gemini-powered reporting assistant that converts natural-language questions into validated, read-only BigQuery queries and presents results as metrics, charts, tables, or short-lived PDF reports.',
    technologies: ['Laravel 13', 'PHP 8.4', 'React 19', 'TypeScript', 'Inertia.js 3', 'Google Cloud BigQuery', 'Google Gemini API', 'Tailwind CSS 4', 'Radix UI', 'Lucide Icons', 'Motion', 'Recharts', 'Laravel Fortify', 'TOTP 2FA', 'WebAuthn Passkeys', 'DomPDF', 'Laravel Wayfinder', 'Vite 8'],
    link: null
  },
  {
    title: 'Zero Balance Billing Dashboard',
    category: 'Healthcare Analytics & Government Dashboard',
    icon: '🏥',
    description: 'Developed the ZBB Dashboard with a user-friendly responsive design that helps the Department of Health monitor and present the results of the Zero Balance Billing program. It shows hospital participation, patients served, healthcare costs, funding sources, common illnesses, and other useful information through charts and summary cards. Visitors can filter the information, generate PDF reports, and submit patient testimonials, while authorized staff can access protected information and administrators can manage users and approve testimonials.',
    technologies: ['Laravel 13', 'PHP 8.3+', 'React 19', 'TypeScript', 'Inertia.js', 'Google OAuth', 'Google Cloud BigQuery', 'Tailwind CSS', 'Vite', 'Laravel Fortify', 'DomPDF', 'Spatie Laravel Permission', 'Axios', 'Recharts'],
    link: null
  },
  {
    title: 'FastAPI-based Face Recognition',
    category: 'Biometric Identification & Computer Vision',
    icon: '🚔',
    description: 'Built a FastAPI-based facial recognition API for identity verification. Enables secure face registration and real-time face matching using deep-learning 128-dim face encodings stored in MySQL. Easy to integrate via simple JSON REST endpoints, supports CORS for web frontends, includes comprehensive error handling, configurable matching tolerance, and safe temporary file cleanup.',
    technologies: ['Python 3.8+', 'FastAPI', 'Uvicorn', 'face_recognition', 'SQLAlchemy', 'MySQL', 'NumPy', 'pymysql'],
    link: null
  },
  {
    title: 'NBI Cybercrime Investigation and Assessment Center (CIAC) - Cybercrime Case Management',
    category: 'Law Enforcement & Cybercrime Investigation',
    icon: '🚔',
    description: 'Engineered a comprehensive cybercrime case management system for law enforcement enabling registration, management, and analysis of cybercrime cases with advanced encryption for sensitive PII (names, contact numbers, email addresses). Features specialized case workflows (complaint info, cybercrime history, suspect details), bulk Excel import with validation, advanced search and filtering, interactive analytics dashboard with Philippine regional heatmap, role-based access control (Admin, Encoder), and secure data encryption using AES-256-CBC with SHA256 key derivation.',
    technologies: ['Laravel 13', 'PHP 8.3+', 'React 19', 'TypeScript', 'Inertia.js 2', 'MySQL 8.0', 'Tailwind CSS 4', 'Shadcn/ui', 'Recharts', 'AES-256 Encryption', 'Spatie RBAC', 'Maatwebsite Excel', 'Vite', 'Axios'],
    link: null
  },
  {
    title: 'Manila Central University AI Chatbot Assistant',
    category: 'AI-Powered Educational Technology',
    icon: '🤖',
    description: 'Built an AI-powered chatbot application for Manila Central University using Next.js frontend and Express.js backend, integrated with Google Gemini API. Features real-time chat interface, typewriter animations, MCU-specific knowledge base, responsive design with Tailwind CSS, and backend production deployment on Railway with cross-origin support while the frontend is hosted on Vercel.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Express.js', 'Node.js', 'Google Gemini API', 'Tailwind CSS', 'Axios', 'CORS', 'Railway', 'Vercel'],
    link: 'https://mcu-ai-chatbot.vercel.app/'
  },
  {
    title: 'Advanced Biometric Identification System',
    category: 'AI & Machine Learning',
    icon: '🔍',
    description: 'Engineered a comprehensive biometric identification SaaS integrating facial, fingerprint, and name-based recognition for law enforcement background checks. Enabled rapid, secure, and accurate record retrieval through advanced computer vision and AI-powered data matching.',
    technologies: ['Django', 'Python', 'React', 'Vite', 'TypeScript', 'Javascript', 'Axios', 'OpenCV', 'Face Recognition', 'NumPy', 'PIL'],
    link: null
  },
  {
    title: 'Integrated Chronic Non-Communicable Disease Registry System (ICNCDRS)',
    category: 'Healthcare Technology',
    icon: '🏥',
    description: 'Developed an AI-powered digital registry system for the Department of Health to centralize and manage chronic non-communicable disease data across the Philippines. Features include specialized registries (blindness, COPD, coronary, diabetes, stroke, cancer), master patient management, facility assignments, and robust role-based access control (admin, DOH, regional, facility). Integrated Google Gemini AI for intelligent data validation, predictive analytics, and an in-app chatbot for user assistance. Includes dashboards, geographic visualizations, CSV import/export, audit logging, and a secure RESTful API for external integrations.',
    technologies: ['Laravel 12', 'PHP', 'Inertia', 'React', 'Typescript', 'Javascript', 'MySQL', 'Google Gemini AI', 'RBAC', 'Audit Trail'],
    link: null
  },
  {
    title: 'Online National Electronic Injury Surveillance System (ONEISS)',
    category: 'Government Health Surveillance',
    icon: '🧪',
    description: `Built a national electronic injury surveillance system for the Department of Health, enabling secure patient management, injury registration, and multi-facility support. Integrated FHIR-compliant data exchange, audit trails, and role-based access. Leveraged Google Gemini AI for analytics, injury report generation, and predictive insights. Provided advanced reporting, CSV export, real-time dashboards, and ensured security, compliance, and maintainability with automated testing and documentation.`,
    technologies: [
      'Laravel 12', 'PHP', 'MySQL', 'L5-Swagger (OpenAPI 3.0)',
      'PestPHP', 'Audit Trail', 'FHIR Interoperability', 'Google Gemini AI',
      'Vue 3.5+', 'PrimeVue 4.3+', 'Tailwind CSS 3.1+', 'Alpine.js 3.4+',
      'Vite 6+', 'Axios', 'RBAC', 'CSV Export', 'Real-time Dashboard', 'Multi-language Support'
    ],
    link: null
  },
  {
    title: 'QR Based Document Tracker System (DocTracker)',
    category: 'Government Health Surveillance',
    icon: '🧪',
    description: 'Developed a QR-based document tracking system with Laravel 12 and React 19, reducing manual data entry by 85% for IT services offices. Features include real-time tracking, automated QR generation, PDF output, Spatie RBAC, audit trails, multi-office workflows, and reporting dashboards. Demonstrated expertise in API development, database design, responsive UI/UX, and DevOps automation.',
    technologies: [
      // Backend
      'Laravel 12', 'PHP 8.2+', 'Inertia.js', 'Spatie Permissions', 'Laravel Fortify', 'MySQL 8+',
      'Barryvdh DomPDF', 'LaraZeus Simple QRCode',
      // Frontend
      'React 19', 'TypeScript 5+', 'Tailwind CSS 4+', 'Radix UI', 'Framer Motion', 'Lucide React', 'jsQR',
      // Features
      'QR Code Integration', 'PDF Generation', 'Role-based Access Control', 'Multi-office Assignment',
      'Real-time Search', 'Audit Trail', 'Timeline Tracking', 'Status Indicators', 'Public Tracker',
      // DevOps & Tooling
      'Vite 7+', 'ESLint', 'Prettier', 'PestPHP'
    ],
    link: null
  },
    {
    title: 'Integrated Drug Test Operation and Management Information System (IDTOMIS)',
    category: 'Government Drug Testing Management',
    icon: '🧪',
    description: 'Architected and Built the Integrated Drug Test Operation and Management Information System (IDTOMIS) from the ground up, a microservice-based national digital health platform for the Philippine Department of Health supporting the full drug testing lifecycle—from public client registration via E-Gov PH SSO, biometric capture, and encrypted QR code generation to facility-based screening, laboratory workflows, accreditation management, and remote collection permit processing with geolocation and face verification. Architected three independently deployed yet tightly coordinated systems (Client Registry, Core Operations & Accreditation, and RCO Permit Management), each with its own database and bounded context, communicating securely through RESTful APIs. Implemented using Laravel, React, TypeScript, and MySQL, with RBAC, full audit trails, and data-privacy compliance, delivering a scalable, fault-isolated, and fully auditable nationwide platform aligned with government digital transformation standards.',
    technologies: [
      'PHP 8.2+', 'Laravel 12', 'FastAPI', 'Eloquent ORM', 'MySQL 8+', 'RESTful APIs', 'Spatie Laravel Permission', 'Laravel Fortify', 'Inertia.js 2.0', 'LaraZeus QR', 'Laravel Wayfinder', 'DomPDF', 'PestPHP', 'React 19', 'TypeScript', 'Tailwind CSS 4.0', 'Radix UI', 'Lucide React', 'face-api.js', 'jsQR', 'react-webcam', 'Axios', 'Vite 7+', 'ESLint', 'Prettier', 'TypeScript ESLint', 'Laravel Pint', 'Database Sessions', 'Queue System', 'Comprehensive Logging', 'SMTP Mail', 'RBAC', 'Audit Trail', 'Notifications', 'Activity Logs', 'Dashboard Stats'
    ],
    link: null
  },
])

const otherProjects = ref([
  {
    title: 'OCR Document Tracking',
    type: 'Document Management',
    description: 'Centralized document management system with OCR technology, trend analysis, and automated data extraction for efficient operations.',
    link: 'https://invs-ocr-document-tracking.vercel.app'
  },
  {
    title: 'Human Resource Management',
    type: 'Enterprise Application',
    description: 'Full-stack HR management system with employee tracking, attendance, recruiting, onboarding, and payroll management.',
    link: 'https://human-resource-management-alpha.vercel.app'
  },
  {
    title: 'Network Web Mapper',
    type: 'Cybersecurity Tool',
    description: 'Web-based network reconnaissance tool for gathering information on IP addresses and domains using React and Django.',
    link: 'https://network-web-mapper.vercel.app'
  },
  {
    title: 'Simple Currency App',
    type: 'Utility Application',
    description: 'Real-time currency converter application built with Svelte and TypeScript with live exchange rates.',
    link: 'https://foomz.github.io/simple-current-app/'
  }
])
</script>
