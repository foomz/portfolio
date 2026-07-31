<template>
  <section class="experience-section py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Video Background -->
    <div class="video-background" aria-hidden="true">
      <iframe
        src="https://streamable.com/e/zdat7d?autoplay=1&muted=1"
        title="Work experience background video"
        allow="fullscreen;autoplay"
        allowfullscreen
        tabindex="-1"
        class="video-background__frame"
      ></iframe>
    </div>

    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 z-5 opacity-85"></div>
    
    <!-- Animated Background Elements -->
    <div class="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse z-5"></div>
    <div class="absolute top-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000 z-5"></div>
    <div class="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000 z-5"></div>

    <div class="relative z-10">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent px-4 sm:px-0"
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :visible="{ y: 0, opacity: 1, transition: { duration: 800 } }">
        Professional Experience Timeline
      </h2>

      <!-- Timeline Container -->
      <div class="experience-timeline max-w-6xl mx-auto relative px-4 sm:px-6 lg:px-8">
        <!-- Vertical Timeline Line -->
        <div class="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 via-blue-500 to-indigo-600"></div>

        <!-- Company Experience Cards -->
        
        <!-- Department of Health - Current Position -->
        <div class="experience-item relative flex items-center mb-8 sm:mb-12 lg:mb-16"
             v-motion
             :initial="{ x: -100, opacity: 0 }"
             :visible="{ x: 0, opacity: 1, transition: { duration: 800, delay: 200 } }">
          
          <!-- Timeline Dot -->
          <div class="absolute left-6 sm:left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg z-10 animate-pulse"></div>
          
          <!-- Current Badge -->
          <div class="absolute left-10 sm:left-12 -top-6 sm:-top-8 md:left-1/2 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-bounce whitespace-nowrap">
            CURRENT
          </div>

          <!-- Content Card -->
          <div class="experience-card-shell experience-card-shell--left w-full md:w-5/12 ml-12 sm:ml-16 md:ml-0 md:mr-8">
            <div class="experience-card bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 transform">
              <!-- Company Header -->
              <div class="mb-6">
                <div class="company-header flex items-center mb-4">
                  <div class="company-logo w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 overflow-hidden">
                    <img src="https://i.imgur.com/DWLi59S.png" alt="Department of Health" class="w-full h-full object-cover" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white leading-tight">DEPARTMENT OF HEALTH</h3>
                    <p class="text-sm sm:text-base lg:text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent leading-tight">Information Systems Analyst / Full Stack Engineer</p>
                  </div>
                </div>
                
                <div class="meta-badges flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span class="meta-pill flex items-center bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                    </svg>
                    Sta Cruz, Manila
                  </span>
                  <span class="meta-pill flex items-center bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                    </svg>
                    Present - Since March 2025
                  </span>
                </div>

                <p class="text-gray-600 dark:text-gray-400 italic">eHealth Systems Division, KMITS (Knowledge Management and Information Technology Service)</p>
              </div>

              <!-- Key Responsibilities -->
              <div class="mb-6">
                <h5 class="font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <span class="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></span>
                  Key Responsibilities & Achievements
                </h5>
                <div class="space-y-3">
                  <div class="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                       v-motion
                       :initial="{ x: -20, opacity: 0 }"
                       :visible="{ x: 0, opacity: 1, transition: { duration: 600, delay: 400 } }">
                    <span class="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Designed and operated large-scale AI-driven eHealth systems to provide secure operations, workflow automation, analytics dashboards and operational reporting.</span>
                  </div>
                  
                  <div class="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                       v-motion
                       :initial="{ x: -20, opacity: 0 }"
                       :visible="{ x: 0, opacity: 1, transition: { duration: 600, delay: 500 } }">
                    <span class="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Architected, developed and optimized RESTful API integrations that enabled secure web application-to-web application communications between DOH devices and partner agencies, regional offices, and health facilities.</span>
                  </div>
                  
                  <div class="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                       v-motion
                       :initial="{ x: -20, opacity: 0 }"
                       :visible="{ x: 0, opacity: 1, transition: { duration: 600, delay: 600 } }">
                    <span class="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Developed microservice-based architectures with Django REST Framework, Laravel API routes, Next.js API handlers, and Node.js middleware to ensure interoperability across various platforms.</span>
                  </div>
                  
                  <div class="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                       v-motion
                       :initial="{ x: -20, opacity: 0 }"
                       :visible="{ x: 0, opacity: 1, transition: { duration: 600, delay: 700 } }">
                    <span class="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Created ICD10/11 module for iClinicSys , an LLM-powered application using Django, Next.js, TensorFlow, Keras, and Scikit-Learn for automatic ICD-10/11 code prediction and clinical decision support with Google Gemini AI integration.</span>
                  </div>
                  
                  <div class="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                       v-motion
                       :initial="{ x: -20, opacity: 0 }"
                       :visible="{ x: 0, opacity: 1, transition: { duration: 600, delay: 800 } }">
                    <span class="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Implemented comprehensive security measures including RBAC, audit trails, JWT authentication, API token systems and encryption protocols (SSL/TLS) to protect distributed application communications.</span>
                  </div>
                  
                  <div class="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                       v-motion
                       :initial="{ x: -20, opacity: 0 }"
                       :visible="{ x: 0, opacity: 1, transition: { duration: 600, delay: 900 } }">
                    <span class="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Developed automated background services and API consumers to synchronize patient profiles, lab records, facility reports, and statistical indicators across different DOH systems.</span>
                  </div>

                  <div class="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                       v-motion
                       :initial="{ x: -20, opacity: 0 }"
                       :visible="{ x: 0, opacity: 1, transition: { duration: 600, delay: 900 } }">
                    <span class="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Developed and integrated FastAPI facial recognition into IDTOMIS, enabling real-time face matching and registration with deep learning face encodings.</span>
                  </div>
                </div>
              </div>

              <!-- Technologies -->
              <div class="mb-6">
                <h5 class="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <span class="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></span>
                  Technologies & Tools
                </h5>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-200 rounded-full border border-green-200 dark:border-green-700">Django</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-200 rounded-full border border-green-200 dark:border-green-700">FastAPI</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-200 rounded-full border border-green-200 dark:border-green-700">Next.js</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-200 rounded-full border border-green-200 dark:border-green-700">TensorFlow</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-200 rounded-full border border-green-200 dark:border-green-700">Google Gemini AI</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-200 rounded-full border border-green-200 dark:border-green-700">Laravel</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-200 rounded-full border border-green-200 dark:border-green-700">REST APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- End of Department of Health Work Experience Card -->
        
        <!-- National Bureau of Investigation - Previous Position -->
        <div class="experience-item relative flex items-center md:flex-row-reverse mb-8 sm:mb-12 lg:mb-16"
             v-motion
             :initial="{ x: 100, opacity: 0 }"
             :visible="{ x: 0, opacity: 1, transition: { duration: 800, delay: 400 } }">
          
          <!-- Timeline Dot -->
          <div class="absolute left-6 sm:left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

          <!-- Content Card -->
          <div class="experience-card-shell experience-card-shell--right w-full md:w-5/12 ml-12 sm:ml-16 md:ml-8 md:mr-0 relative">
            <div class="experience-card bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 transform">
              
              <!-- Right Side Image - Positioned at outside right top of card -->
              <div class="floating-gallery z-30">
                <img src="/WorkExperienceImages/Me1.jpg" alt="NBI Work Experience" width="150" height="150" class="floating-gallery__image rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform" />
                <img src="/WorkExperienceImages/Me2.jpg" alt="NBI Work Experience" width="120" height="120" class="floating-gallery__image rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform" />
                <img src="/WorkExperienceImages/Me3.jpg" alt="NBI Work Experience" width="120" height="120" class="floating-gallery__image rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform" />
                <img src="/WorkExperienceImages/Me4.jpg" alt="NBI Work Experience" width="120" height="120" class="floating-gallery__image rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform" />
                <img src="/WorkExperienceImages/Me5.jpg" alt="NBI Work Experience" width="120" height="120" class="floating-gallery__image rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform" />
                <img src="/WorkExperienceImages/Me6.jpg" alt="NBI Work Experience" width="120" height="120" class="floating-gallery__image rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform" />
              </div>

              <!-- Company Header -->
              <div class="mb-6">
                <div class="company-header flex items-center mb-4">
                  <div class="company-logo company-logo--nbi w-15 h-20 sm:w-15 sm:h-20 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 overflow-hidden">
                    <img src="https://i.imgur.com/xl5tD04.png" alt="National Bureau of Investigation" class="w-full h-full object-cover" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white leading-tight">NATIONAL BUREAU OF INVESTIGATION</h3>
                    <p class="text-sm sm:text-base lg:text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">Project Worker / Cyber Investigator</p>
                  </div>
                </div>
                
                <div class="meta-badges flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span class="meta-pill flex items-center bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                    </svg>
                    Main Building, Manila
                  </span>
                  <span class="meta-pill flex items-center bg-indigo-100 dark:bg-indigo-900 px-3 py-1 rounded-full">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                    </svg>
                    March 2018 – December 2024
                  </span>
                  <span class="meta-pill bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-medium">
                    7 Years Experience
                  </span>
                </div>

                <p class="text-gray-600 dark:text-gray-400">
                  <span class="italic block mb-2">Career progression from On-The-Job Trainee to Full Project Worker</span>
                  <span class="text-sm text-blue-600 dark:text-blue-400 font-medium">Digital Forensics Laboratory → Cybercrime Division → Technology Infrastructure Division → Regional District Offices</span>
                </p>
              </div>

              <!-- Career Progression -->
              <div class="mb-6">
                <h5 class="font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <span class="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></span>
                  Career Progression & Key Achievements
                </h5>
                <div class="space-y-3">
                  <div class="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                       v-motion
                       :initial="{ x: -20, opacity: 0 }"
                       :visible="{ x: 0, opacity: 1, transition: { duration: 600, delay: 600 } }">
                    <span class="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Started as OJT at NBI Digital Forensics Laboratory performing forensic imaging, evidence extraction, and technical documentation for court proceedings with 100% evidence chain custody.</span>
                  </div>

                  <div class="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                       v-motion
                       :initial="{ x: -20, opacity: 0 }"
                       :visible="{ x: 0, opacity: 1, transition: { duration: 600, delay: 700 } }">
                    <span class="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Progressed through Cybercrime Division conducting cyber incident investigations, data breach assessments, and digital evidence validation for criminal cases.</span>
                  </div>

                  <div class="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                       v-motion
                       :initial="{ x: -20, opacity: 0 }"
                       :visible="{ x: 0, opacity: 1, transition: { duration: 600, delay: 1100 } }">
                    <span class="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Integrated Lampyre for advanced data analysis and OSINT investigations, establishing actionable leads and resource links to support cyber offender identification and tracking.</span>
                  </div>

                  <div class="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                       v-motion
                       :initial="{ x: -20, opacity: 0 }"
                       :visible="{ x: 0, opacity: 1, transition: { duration: 600, delay: 1000 } }">
                    <span class="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Built Django IP tracking framework for digital forensics operations, identifying investigative leads and enhancing traceability protocols for law enforcement investigations.</span>
                  </div>
                  
                  <div class="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                       v-motion
                       :initial="{ x: -20, opacity: 0 }"
                       :visible="{ x: 0, opacity: 1, transition: { duration: 600, delay: 800 } }">
                    <span class="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Maintained platforms including NBI Information System, Clearance Biometric System, Human Resource Information System and the Criminal History Information System in Technology Infrastructure Division ensuring 99.9% uptime and data integrity for nationwide operations.</span>
                  </div>
                  
                  <div class="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                       v-motion
                       :initial="{ x: -20, opacity: 0 }"
                       :visible="{ x: 0, opacity: 1, transition: { duration: 600, delay: 900 } }">
                    <span class="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Managed data center infrastructure and provided technical support for regional offices while strengthening IT security through network diagnostics and system monitoring.</span>
                  </div>

                </div>
              </div>

              <!-- Departments Timeline -->
              <div class="mb-6">
                <h5 class="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <span class="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></span>
                  Department Assignments
                </h5>
                <div class="space-y-2 text-sm">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg gap-1 sm:gap-0">
                    <span class="font-medium text-gray-800 dark:text-white">Regional District Offices</span>
                    <span class="text-blue-600 dark:text-blue-400 text-xs sm:text-sm">Mar 2024 - Dec 2024</span>
                  </div>
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg gap-1 sm:gap-0">
                    <span class="font-medium text-gray-800 dark:text-white">Technology Infrastructure Division</span>
                    <span class="text-blue-600 dark:text-blue-400 text-xs sm:text-sm">Oct 2022 - Feb 2024</span>
                  </div>
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg gap-1 sm:gap-0">
                    <span class="font-medium text-gray-800 dark:text-white">Cybercrime Division</span>
                    <span class="text-blue-600 dark:text-blue-400 text-xs sm:text-sm">Jul 2018 - Sep 2022</span>
                  </div>
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg gap-1 sm:gap-0">
                    <span class="font-medium text-gray-800 dark:text-white">Digital Forensics Laboratory</span>
                    <span class="text-blue-600 dark:text-blue-400 text-xs sm:text-sm">Mar 2018 - Jun 2018</span>
                  </div>
                </div>
              </div>

              <!-- Technologies -->
              <div class="mb-6">
                <h5 class="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <span class="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></span>
                  Specializations
                </h5>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-700">Digital Forensics</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-700">Cybercrime Investigation</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-700">Network Security</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-700">System Administration</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-700">Evidence Management</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-700">OSINT Analysis</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-700">Incident Response</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-700">Malware Analysis</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-700">Threat Intelligence</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-700">Full Stack Development</span>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- End of National Bureau of Investigation Card -->

      </div> <!-- End of Timeline Container -->
    </div>
  </section>
</template>

<script setup>
/* No additional script logic needed for this component */
</script>

<style scoped>

/* Video Background */
.video-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  container-type: size;
}

.video-background__frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: max(100vw, 56.25vh);
  height: max(100vh, 177.778vw);
  border: 0;
  transform: translate(-50%, -50%);
}

@supports (width: 100cqw) {
  .video-background__frame {
    width: max(100cqw, 56.25cqh);
    height: max(100cqh, 177.778cqw);
  }
}

/* Responsive experience cards */
.experience-section {
  container-type: inline-size;
}

.experience-timeline {
  width: min(100%, 92rem);
}

.experience-item {
  min-width: 0;
}

.experience-card-shell {
  min-width: 0;
}

.experience-card {
  width: 100%;
  max-width: 100%;
  overflow-wrap: anywhere;
}

.company-header {
  min-width: 0;
  gap: 0.75rem;
}

.company-logo {
  width: clamp(3rem, 8vw, 3.75rem);
  height: clamp(3rem, 8vw, 3.75rem);
  margin-right: 0;
}

.company-logo--nbi {
  width: clamp(3rem, 8vw, 3.75rem);
  height: clamp(4rem, 11vw, 5rem);
}

.meta-badges {
  gap: 0.5rem;
}

.meta-pill {
  max-width: 100%;
  min-width: 0;
  line-height: 1.35;
}

.floating-gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.floating-gallery__image {
  width: 100%;
  aspect-ratio: 1;
  min-width: 0;
}

@media (max-width: 420px) {
  .experience-timeline {
    padding-left: 0.75rem;
    padding-right: 0;
  }

  .experience-card-shell {
    margin-left: 2.75rem;
  }

  .experience-card {
    padding: 1rem;
  }

  .company-header {
    align-items: flex-start;
  }

  .meta-pill {
    width: 100%;
    align-items: flex-start;
    border-radius: 0.75rem;
  }
}

@media (min-width: 768px) {
  .experience-timeline {
    max-width: min(72rem, calc(100vw - 3rem));
  }

  .experience-card-shell {
    width: min(48%, 38rem);
  }

  .experience-card-shell--left {
    margin-right: clamp(1.5rem, 3vw, 3rem);
  }

  .experience-card-shell--right {
    margin-left: clamp(1.5rem, 3vw, 3rem);
  }

  .floating-gallery {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .experience-card {
    padding: clamp(1.5rem, 2vw, 2rem);
  }
}

@media (min-width: 1280px) {
  .experience-timeline {
    max-width: min(78rem, calc(100vw - 5rem));
  }

  .experience-card-shell {
    width: min(46%, 42rem);
  }
}

@media (min-width: 1440px) {
  .floating-gallery {
    position: absolute;
    top: 0;
    right: clamp(-10rem, -8vw, -7rem);
    width: clamp(5.5rem, 6vw, 7.5rem);
    grid-template-columns: 1fr;
    gap: clamp(0.75rem, 1.2vw, 1.25rem);
    margin-bottom: 0;
  }
}

@media (min-width: 1536px) {
  .floating-gallery {
    right: clamp(-11rem, -8vw, -8rem);
  }
}

@media (min-width: 1720px) {
  .experience-timeline {
    max-width: min(86rem, calc(100vw - 10rem));
  }

  .experience-card-shell {
    width: min(44%, 46rem);
  }
}

/* Animation delays for staggered effects */
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Custom shadow for enhanced depth */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Smooth hover transitions */
.hover\:shadow-3xl:hover {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Timeline line gradient enhancement */
.bg-gradient-to-b {
  background: linear-gradient(to bottom, 
    rgba(168, 85, 247, 0.8) 0%, 
    rgba(59, 130, 246, 0.8) 50%, 
    rgba(79, 70, 229, 0.8) 100%);
}

/* Backdrop blur enhancement */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Enhanced pulse animation */
@keyframes enhanced-pulse {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.05);
  }
}

.animate-pulse {
  animation: enhanced-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Bounce animation for current position badge */
@keyframes gentle-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-bounce {
  animation: gentle-bounce 2s ease-in-out infinite;
}

/* Aspect ratio utility */
.aspect-w-16 {
  position: relative;
  padding-bottom: calc(12 / 16 * 100%);
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
