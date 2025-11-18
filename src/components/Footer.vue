<template>
  <footer class="px-4 divide-y bg-[#003366]/90 text-blue-100">
    <div class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
      
      <!-- Logo -->
      <div class="lg:w-1/3">
        <router-link to="/" class="flex justify-center space-x-3 lg:justify-start">
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/30">
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" class="h-8 w-auto" />
          </div>
          <span class="self-center text-2xl font-semibold text-white">Ly</span>
        </router-link>
      </div>

      <div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
        
        <div class="space-y-3"><h3 class="tracking-wide uppercase text-blue-200"><router-link to="/">HOME</router-link></h3></div>
        <div class="space-y-3"><h3 class="uppercase text-blue-200"><router-link to="/contact">CONTACT</router-link></h3></div>
        <div class="space-y-3"><h3 class="tracking-wide uppercase text-blue-200">FAQ</h3></div>
        <div class="space-y-3"><h3 class="uppercase text-blue-200">Social media</h3><div class="flex justify-start space-x-3">

            <!-- facebook -->
            <a href="https://facebook.com/" target="_blank" class="flex items-center p-1 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                <path d="M32 16c0-8.839-7.167-16-16-16s-16 7.161-16 16c0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177C26.145 30.604 32 23.984 32 16z"></path>
              </svg>
            </a>

            <!-- twitter -->
            <a href="https://twitter.com/" target="_blank" class="flex items-center p-1 hover:text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path d="M23.954 4.569a10 10 0 01-2.825.775A4.958 4.958 0 0023.292 2.62c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482c-3.09-.402-6.715-2.366-9.141-5.335a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827A4.996 4.996 0 012.188 18a4.937 4.937 0 004.604 3.417A9.868 9.868 0 011.5 23.52a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548z"></path>
              </svg>
            </a>

            <!-- instagram -->
            <a href="https://instagram.com/lisa.lwy/" target="_blank" class="flex items-center p-1 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                <path d="M16 0C11.651 0 11.109.021 9.407.093c-1.709.084-2.865.349-3.885.745C4.47 1.25 3.573 1.797 2.688 2.687.829 4.546.829 7.562.829 16s0 11.454 1.859 13.313c.885.891 1.781 1.443 2.833 1.849 1.02.391 2.181.661 3.885.745 1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745 1.052-.412 1.948-.959 2.833-1.849.891-.885 1.443-1.776 1.849-2.833.391-1.02.661-2.181.745-3.885.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885-.412-1.052-.959-1.948-1.849-2.833-.885-.891-1.776-1.443-2.833-1.849-1.02-.396-2.181-.661-3.885-.745C20.891.021 20.349 0 16 0zM16 7.787a8.213 8.213 0 110 16.426 8.213 8.213 0 010-16.426z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="py-6 text-sm text-center text-blue-200 bg-[#002855]/90">© 2025 Lisa Sapitri. All rights reserved.</div>
  </footer>
</template>
