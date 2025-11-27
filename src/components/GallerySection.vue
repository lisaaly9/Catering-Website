<template>
    <section class="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden py-16 lg:py-24">
        <div class="absolute inset-0">
            <img src="../assets/images/makanan/gudeg.jpeg" alt="Background Image" class="object-cover object-center w-full h-full" />
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <p class="text-3xl text-[#FFD447] mb-8">Pesan Secara Online</p>
            <h1 class="text-5xl font-bold leading-tight mb-4">Catering untuk Acara Spesialmu</h1>
            <p class="text-lg text-[#FFFFFF] mb-8">Setiap hidangan adalah karya cinta dari dapur kami</p>
            <p class="text-lg text-[#FFD447]">10.00 - 22.00 WITA</p>
        </div>
    </section>

    <section class="px-4 py-10">
        <h2 class="text-3xl font-bold text-[#5B3A29] mb-2 text-left">Gallery</h2>
        <p class="text-lg text-[#5B3A29]/80 mb-6 text-left">Menampilkan hasil kreasi kuliner dengan kualitas premium dan penyajian sederhana</p>
        <div class="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div
            v-for="(img, index) in foto"
            :key="index"
            class="snap center shrink-0 w-50 h-64"
          >
            <img :src="img" class="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
    </section>

    <section class="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden py-16 lg:py-24">
        <div class="absolute inset-0">
            <img src="../assets/images/galeri/9.png" alt="Background Image" class="object-cover object-center w-full h-full" />
        </div>
    </section>
    <section class="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden py-16 lg:py-24">
        <div class="absolute inset-0">
            <img src="../assets/images/galeri/10.png" alt="Background Image" class="object-cover object-center w-full h-full" />
        </div>
    </section>
    <section class="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden py-16 lg:py-24">
        <div class="absolute inset-0">
            <img src="../assets/images/galeri/11.jpeg" alt="Background Image" class="object-cover object-center w-full h-full" />
            <div class="absolute inset-0 bg-black opacity-50"></div>

        </div>
    </section>

    <section class="bg-gradient-to-t from-[#FFF8E1] to-[#FFF8E1] text-[#FFF8E1] py-9 px-6 text-center">
        <h2 class="text-3xl font-bold text-[#5B3A29] mb-2 text-center">Apa Kata Mereka</h2>
        <p class="text-lg text-[#5B3A29]/80 mb-6 text-center">Mereka yang sudah merasakan pelayanan dan cita rasa masakan</p>
    </section>

    <section class="py-20 bg-[#FFF3D6] flex justify-center">
    <div class="w-full max-w-3xl text-center">
      <h2 class="text-3xl md:text-4xl font-semibold text-[#5B3A29] mb-3"> Testimonial </h2>
      <p class="text-[#7D5F4B] mb-10"> Apa kata mereka yang sudah mencoba layanan kami </p>

    <div class="space-y-8">
      <div
        v-for="(item, index) in testimoni"
        :key="index"
        class="bg-[#F5E3C2] rounded-2xl p-6 shadow-sm border border-[#E5CDA3]"
      >
        <div class="text-yellow-500 text-xl mb-2">
        {{ '★★★★★'.slice(0, item.bintang) }}
        </div>
        <p class="text-[#5B3A29] italic mb-4"> "{{  item.pesan }}"" </p>
        <p class="font-semibold text-[#4A1C4F]"> {{  item.nama }} </p>
        <p class="text-[#7D5F4B] text-sm"> {{ item.lokasi }} </p>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import { foto } from '@/data/foto'
import { testimoni } from '@/data/testimoni'
</script>