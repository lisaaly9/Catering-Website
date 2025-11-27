<template>
    <!--Hero section-->
	<section class="bg-gradient-to-b from-[#FFD447] to-[#D0AE3B] text-[#5B3A29]">
		<div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
			<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
				<h1 class="text-5xl font-bold leading-none sm:text-5xl text-center">Masakan Rumahan Rasa Istimewa!</h1>
				<p class="mt-6 mb-8 text-lg text-[#5B3A29]/80 sm:mb-12 text-center">Catering harian, acara, dan prasmanan <br /> siap antar ke lokasi anda</p>
				<div class="flex justify-center">
					<router-link 
					to="/order"
					class="bg-[#E17B34] hover:bg-[#c56c2e] text-white px-6 py-3 rounded-lg w-fit font-semibold shadow-md">
					Pesan Sekarang
				</router-link>
				</div>
			</div>
            <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				<img src="../assets/images/makanan/heroimage.png" 
				alt="" 
				class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			</div>
		</div>
	</section>

    <!--Why Choose us-->
    <section id="features" class="px-6 py-16 md:py-20 bg-[#E0CBA8]">
    <div class="max-w-4xl mx-auto text-center mb-20">
        <h2 class="text-3xl md:text-4xl font-bold text-[#5B3A29]">“Kenapa Harus Pilih Catering Ini?”</h2>
    </div>
    <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <div 
        v-for="card in cards" 
        :key="card.id" 
        class="bg-white/40 rounded-x1 shadow-md p-8 text-center" >
        <div class="mb-4 flex justify-center">
          <img :src="card.icon" class="w-30 h-30" />
        </div>
        <p class="text-[#5B3A29] font-semibold text-lg">{{ card.title }}</p>
      </div>
    </div>
    </section>

    <!--Menu Favorit-->
    <section class="w-full bg-[#FBF2D8] flex flex-col items-center pb-20">
      <h2 class="text-2xl md:text-4xl font-bold text-[#5B3A29] mb-10 pt-10">
        MENU FAVORIT
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="item in makananList"
          :key="item.id"
          class="p-6 max-w-xs rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 transition flex flex-col items-center"
        >
          <img :src="item.image" class="rounded-xl shadow-md w-full object-cover" />
          <div class="mt-4 text-center">
            <h4 class="font-bold text-xl text-[#5B3A29]">{{ item.name }}</h4>
            <p class="mt-2 text-[#5B3A29]/80">{{ item.price }}</p>

            <button
              @click="lihatDetail(item)"
              class="mt-4 rounded-xl bg-[#E17B34] px-4 py-2 text-sm text-white shadow-md hover:bg-[#cf6f2f] transition"
            >
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



    <!--Statistik-->
    <section class="w-full bg-[#F6E7CE] py-12">
    <p class="text-center font-semibold text-xl md:text-2xl text-[#5B3A29]">Kepercayaan Pelanggan</p>
    <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-6xl px-5">

    <div
      v-for="s in stats"
      :key="s.id"
      class="flex flex-col justify-center items-center bg-white px-4 h-[140px] md:h-[190px] w-full md:w-[260px] rounded-lg shadow-sm">
      
      <div class="flex flex-row justify-center items-center">
        <img :src="s.icon" class="w-10 h-10 md:w-12 md:h-12 mr-3"/>
        <p class="font-bold text-3x1 md:text-4x1 text-[#5B3A29] ml-2">{{ s.value }}</p>
      </div>
      <p class="text-sm md:text-lg text-[#E17B34] mt-3 text-center">{{ s.label }}</p>
    </div>
  </div>
</section>

</template>

<script>
import { cards } from "../data/cards";
import { stats } from "../data/stats";
import { makanan } from "../data/makanan";
import PopupMenuDetail from "../components/PopupMenuDetail.vue";

export default {
  name: "HomeSection",
  data() {
    return {
      cards: cards,
      stats: stats,
      makananList: makanan.slice(0,4),
      showModal: false,
      selectedFood: null,
    };
  },
  methods: {
    lihatDetail(food) {
      this.selectedFood = food;
      this.showModal = true;
    },
  },
  components: {
    PopupMenuDetail,
  },
};
</script>