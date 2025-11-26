<template>
  <nav class="relative bg-[#5B3A29] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">

        <!-- Tombol menu mobile -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
            <span class="sr-only">Open main menu</span>

            <!-- Icon buka -->
            <svg
              v-if="!isMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5">
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
              stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Menu desktop -->
        <div class="flex flex-1 items-center justify-center sm:justify-between">
          <div class="flex shrink-0 items-center">
            <img
              src="../assets/icons/logo.svg"
              alt="Gudeg"
              class="h-12 w-auto"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block ml-auto mt-1">
            <div class="flex space-x-4">
              <router-link
                to="/"
                class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                active-class="bg-gray-900/50 text-white"
                exact-active-class="bg-gray-900/50 text-white">Home
              </router-link>
              <router-link
                to="/about"
                class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                active-class="bg-gray-900/50 text-white"
                exact-active-class="bg-gray-900/50 text-white">About
              </router-link>
              <router-link
                to="/menu"
                class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                active-class="bg-gray-900/50 text-white"
                exact-active-class="bg-gray-900/50 text-white">Menu
              </router-link>
              <router-link
                to="/gallery"
                class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                active-class="bg-gray-900/50 text-white"
                exact-active-class="bg-gray-900/50 text-white">Gallery
              </router-link>
              <router-link
                to="/order"
                class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                active-class="bg-gray-900/50 text-white"
                exact-active-class="bg-gray-900/50 text-white">Order
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-show="isMenuOpen" class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3 text-center">
        <router-link
          to="/"
          class="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
          active-class="text-white">Home
        </router-link>
        <router-link
          to="/about"
          class="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
          active-class="text-white">About
        </router-link>
        <router-link
          to="/menu"
          class="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
          active-class="text-white">Menu
        </router-link>
        <router-link
          to="/gallery"
          class="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
          active-class="text-white">Gallery
        </router-link>
        <router-link
          to="/order"
          class="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
          active-class="text-white">Order
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>
