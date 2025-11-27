<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div 
      class="absolute inset-0 bg-black/40 backdrop-blur-sm"
      @click="$emit('close')"
    ></div>

    <div class="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-[90%] max-w-md max-h-[90vh] overflow-y-auto z-50 animate-[fadeIn_.25s_ease]">

      <!-- button tutup -->
      <button 
        @click="$emit('close')" 
        class="absolute right-4 top-4 text-gray-600 hover:text-black text-xl">
        ✕
      </button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- bagian kiri -->
        <div>
          <img :src="food.image" class="rounded-xl w-full h-40 sm:h-56 object-cover shadow-md"/>
          <div class="text-center mt-3 text-sm text-gray-600">
            ⭐⭐⭐⭐⭐ <span class="font-semibold">(4.8/5)</span>
          </div>
        </div>

        <!-- bagian kanan -->
        <div class="flex flex-col items-center text-center">
          <h2 class="text-2xl font-bold text-[#5B3A29]">{{ food.name }}</h2>
          <p class="mt-1 text-[#E17B34] font-semibold text-lg">{{ food.price }}</p>
          <p class="mt-4 text-gray-700 text-sm leading-relaxed px-2">
            {{ food.description || 'Tidak ada deskripsi.' }}
          </p>

          <!-- isi paket -->
          <div class="mt-6 w-full">
            <h3 class="text-[#5B3A29] font-bold mb-2 text-lg">Isi Paket:</h3>

            <div class="max-h-40 overflow-y-auto px-2">
              <div 
                v-for="(item, index) in food.items"
                :key="index"
                class="flex items-center gap-2 justify-start">
                <span class="text-sm">●</span>
                <span class="text-gray-800 text-sm">{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- tombol order -->
          <button 
            class="mt-6 px-5 py-2 rounded-xl bg-[#E17B34] text-white font-semibold hover:bg-[#cf6f2f] transition">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupMenuDetail",
  props: {
    food: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
