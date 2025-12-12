<template>
    <section class="dark:bg-gray-100 dark:text-gray-800">
		<div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
			<a rel="noopener noreferrer" href="#" class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
				<div class="p-6 space-y-2 lg:col-span-5">
					<h1 class="text-2xl font-semibold sm:text-5xl group-hover:underline group-focus:underline text-left">Lisa Sapitri</h1>
                    <h3 class="text-2xl font-semibold sm:text-1xl text-left">11241041 - Informatika - ITK</h3>
					<p class="pt-4 text-left">Saya adalah mahasiswa Informatika Angkatan 2024 dari Institut Teknologi Kalimantan yang memiliki ambisi dan tekad yang tinggi serta bertanggung jawab dan dapat diandalkan. Mampu bekerja sama dalam tim maupun individu dengan sangat baik. Dan juga selalu mencoba hal hal yang baru  </p>
				</div>
                <img src="../assets/images/makanan/fotocv.jpg" alt="" class="object-cover w-full rounded-2xl sm:h-96 lg:col-span-7">
			</a>
		</div>
	</section>

    <section id="features" class="px-6 py-16 md:py-20 bg-[#E0CBA8]">
    <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <div 
        v-for="card in card" 
        :key="card.id" 
        class="bg-white/40 rounded-x1 shadow-md p-8 text-center" >
        <div class="mb-4 flex justify-center">
          <img :src="card.icon" class="w-30 h-30" />
        </div>
        <p class="text-[#5B3A29] font-semibold text-lg ">{{ card.title }}</p>
        <p class="text-[#5B3A29] gap-4 text-sm">{{ card.description }}</p>
      </div>
    </div>
    </section>
</template>

<script>
import { card } from "../data/card.js";

export default {
  name: "AboutMeSection",
  data() {
    return {
      card: card,
    };
  },
};
</script>