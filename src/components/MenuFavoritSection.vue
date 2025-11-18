<template>
  <section class="w-full bg-[#FBF2D8] flex flex-col items-center pb-20">
    <h2 class="text-2xl md:text-4xl font-bold text-[#5B3A29] mb-10 pt-10">MENU FAVORIT</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <!-- loop card -->
      <div 
        v-for="makanan in makananList"
        :key="makanan.id"
        class="p-6 max-w-xs rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 transition flex flex-col items-center">
        <img :src="makanan.image"
          class="rounded-xl shadow-md shadow-black/20 w-full h-auto object-cover"/>
        <div class="mt-4 text-center">
          <h4 class="font-bold text-xl text-[#5B3A29]">{{ makanan.name }}</h4>
          <p class="mt-2 text-[#5B3A29]/80">{{ makanan.price }}</p>

          <button
            @click="lihatDetail(makanan)"
            class="mt-4 rounded-xl bg-[#E17B34] px-4 py-2 text-sm text-white shadow-md hover:bg-[#cf6f2f] transition">Lihat Detail
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Detail -->
    <PopupMenuDetail 
      v-if="showModal"
      :food="selectedFood"
      @close="showModal = false"
    />
  </section>
</template>

<script>
import { makanan } from '../data/makanan';
import PopupMenuDetail from './PopupMenuDetail.vue';

export default {
  name: 'MenuFavoritSection',
  components: { PopupMenuDetail },

  data() {
    return {
      makananList: makanan.slice(0, 4), 
      selectedFood: null,
      showModal: false
    };
  },

  methods: {
    lihatDetail(food) {
      this.selectedFood = food;
      this.showModal = true;
    }
  }
};
</script>

