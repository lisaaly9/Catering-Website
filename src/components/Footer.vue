<template>
  <footer class="w-full bg-[#5B3A29] pt-14 text-[#FFF8E1]">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div class="flex gap-6 items-start ">
        <img src="../assets/icons/logo.svg" alt="Gudeg Bu Wik" class="w-50 mt-1" />
        <p class="text-sm leading-relaxed w-64 mt-5 ">“Kami melayani catering harian, acara,dan prasmanan dengan cita rasa rumahan yang istimewa.”</p>
      </div>

      <div class="flex flex-col gap-1 text-sm font-semibold text-center mx-auto lg:text-right lg:mx-0">
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/about" class="hover:underline">About</router-link>
        <router-link to="/menu" class="hover:underline">Menu</router-link>
        <router-link to="/gallery" class="hover:underline">Gallery</router-link>
        <router-link to="/order" class="hover:underline">Order</router-link>
      </div>

      <!-- buat menghubungi  -->
      <div class="text-sm">
        <p class="font-semibold mb-3">Hubungi Kami</p>

        <p class="flex items-center gap-2">📞 <span>0812 3456 7890</span></p>
        <p class="flex items-center gap-2 mt-1">📧 <span>catering@gmail.com</span></p>
        <p class="flex items-center gap-2 mt-1">📍 <span>Jl. Mawar No. 7, Sangatta Utara</span></p>

        <div class="flex gap-4 mt-4 text-xl">
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
        </div>
      </div>

    </div>

    <!-- bagian copyright -->
    <div class="bg-[#4B2F21] py-4 text-center text-sm text-white mt-12">
      © 2025 Catering Nyemil Nyemil. All rights reserved.
      Designed with ❤️ by Lisa Sapitri.
    </div>
  </footer>
</template>
