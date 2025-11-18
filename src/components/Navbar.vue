<template>
  <nav class="relative bg-[#003366]/90 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Tombol menu mobile -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon buka -->
            <svg
              v-if="!isMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!-- Icon tutup -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
            mnvda  fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Logo dan link desktop -->
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <img
              src="../assets/icons/logo.svg"
              alt="Your Company"
              class="h-13 w-auto"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link
                to="/"
                class="rounded-md px-3 py-2 text-sm font-medium text-blue-100 hover:bg-blue-500/20 hover:text-white"
                active-class="bg-gray-900/50 text-white"
                exact-active-class="bg-gray-900/50 text-white"
              >
                Home
              </router-link>
              <router-link
                to="/contact"
                class="rounded-md px-3 py-2 text-sm font-medium text-blue-100 hover:bg-blue-500/20 hover:text-white"
                active-class="bg-gray-900/50 text-white"
                exact-active-class="bg-gray-900/50 text-white"
              >
                Contact
              </router-link>
            </div>
          </div>
        </div>

        <!-- Profil -->
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            class="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
          >
            <span class="sr-only">View notifications</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="size-6"
            >
              <path
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <img
            src="https://i.pinimg.com/736x/f0/72/5b/f0725b7c078a3ec5b7b582894b9f7fba.jpg"
            alt="profile"
            class="size-8 rounded-full ml-3"
          />
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-show="isMenuOpen" class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3 text-center">
        <router-link
          to="/"class="block rounded-md px-3 py-2 text-sm font-medium text-blue-100 hover:bg-blue-500/20 hover:text-white"active-class="text-white">Home
        </router-link>
        <router-link
          to="/contact"class="block rounded-md px-3 py-2 text-sm font-medium text-blue-100 hover:bg-blue-500/20 hover:text-white"active-class="text-white">Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>
