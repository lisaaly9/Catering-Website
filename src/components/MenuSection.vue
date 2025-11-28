<template>
  <section class="w-full bg-[#FBF2D8] pb-20">
    <div class="text-center pt-10 mb-6">
      <h1 class="text-3xl md:text-4xl font-bold text-[#5B3A29]">MENU</h1>
      <p class="mt-2 text-[#7B5F47]">
        “Pilih menu pilihanmu, semuanya dimasak segar setiap hari.”
      </p>
    </div>

    <div class="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
      <div class="flex gap-3">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="px-5 py-2 rounded-full font-semibold border transition"
          :class="selectedCategory === cat ? 'bg-[#E6A34A] text-white border-[#E6A34A]' : 'bg-white text-[#5B3A29] border-[#C9A982]'" > 
          {{ cat }}
        </button>
      </div>

      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari menu favoritmu…"
          class="px-4 py-2 rounded-full border border-[#C9A982] w-64"
        />
        <span class="absolute right-3 top-2.5 text-gray-400"> </span>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">
        <div
            v-for="item in filteredMenu"
            :key="item.id"
            class="p-6 max-w-xs rounded-2xl bg-white/20 backdrop-blur-md border border-white/30shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 transition flex flex-col items-center mx-auto" >
            <img :src="item.image" class="rounded-xl shadow-md w-full  object-cover" />
            <div class="mt-4 text-center">
              <h4 class="font-bold text-xl text-[#5B3A29]">{{ item.name }}</h4>
              <p class="mt-2 text-[#5B3A29]/80">{{ item.price }}</p>
              <button
                @click="lihatDetail(item)"
                class="mt-4 rounded-xl bg-[#E17B34] px-4 py-2 text-sm text-white shadow-md hover:bg-[#cf6f2f] transition" >
                Lihat Detail
              </button>
            </div>
        </div>
    </div>

    <PopupMenuDetail
      v-if="showModal"
      :food="selectedFood"
      @close="showModal = false"
    />
  </section>

  <section class="bg-gradient-to-t from-[#E17B34] to-[#E17B34] text-[#FFF8E1] py-9 px-6 text-center">
      <h1 class="text-3xl font-bold leading-tight mb-4">"Sudah menemukan menu favoritmu?"</h1>
      <p class="text-lg text-[#FFFFFF] mb-8">"Pesan sekarang dan kami siap antar ke lokasi Anda!"</p>
      <div class="flex justify-center">
					<router-link 
					to="/order"
					class="bg-white hover:bg-[#c56c2e] text-[#5B3A29] hover:text-white px-6 py-3 rounded-lg w-fit font-semibold shadow-md">
					Pesan Sekarang
				</router-link>
				</div>
    </section>
</template>

<script>
import PopupMenuDetail from "@/components/PopupMenuDetail.vue";
import { makanan } from "@/data/makanan.js";
import { snack } from "@/data/snack.js";
import { parsel } from "@/data/parsel.js";


export default {
  components: { PopupMenuDetail },
  data() {
    return {
      categories: ["Makanan", "Parsel", "Snack"],
      selectedCategory: "Makanan",
      searchQuery: "",
      showModal: false,
      selectedFood: null
    };
  },

  computed: {
    activeList() {
        if (this.selectedCategory === "Makanan") return makanan;
        if (this.selectedCategory === "Snack") return snack;
        if (this.selectedCategory === "Parsel") return parsel;
        return [];
    },

    filteredMenu() {
      return this.activeList
        .filter(item =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    }
  },
  
  methods: {
    lihatDetail(item) {
      this.selectedFood = item;
      this.showModal = true;
    }
  }
};
</script>
