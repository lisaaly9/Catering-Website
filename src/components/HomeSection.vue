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

    <!-- Card 1 -->
    <div class="bg-white/40 rounded-xl shadow-md p-8 text-center">
        <div class="mb-4 flex justify-center">
        <img src="../assets/icons/jam.png" class="w-30 h-30" />
        </div>
        <p class="text-[#5B3A29] font-semibold text-lg">Tepat Waktu</p>
    </div>

    <!-- Card 2 -->
    <div class="bg-white/40 rounded-xl shadow-md p-8 text-center">
        <div class="mb-4 flex justify-center">
        <img src="../assets/icons/piring.png" class="w-30 h-30" />
        </div>
        <p class="text-[#5B3A29] font-semibold text-lg">Rasa Lezat</p>
    </div>

    <!-- Card 3 -->
    <div class="bg-white/40 rounded-xl shadow-md p-8 text-center">
        <div class="mb-4 flex justify-center">
        <img src="../assets/icons/uang.png" class="w-30 h-30" />
        </div>
        <p class="text-[#5B3A29] font-semibold text-lg">Harga Bersahabat</p>
    </div>
    </div>
    </section>

    <!--Statistik-->
    <section class="w-full bg-[#F6E7CE] py-12">
    <p class="text-center font-semibold text-xl md:text-2xl text-[#5B3A29]">Kepercayaan Pelanggan</p>
    <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-6xl px-5">

    <!-- 1 -->
    <div class="flex flex-col justify-center items-center bg-white px-4 h-[140px] md:h-[190px] w-full md:w-[260px] rounded-lg shadow-sm">
      <div class="flex flex-row justify-center items-center">
        <img src="../assets/icons/produk dibuat.png" class="w-[40px] h-[40px] md:w-[55px] md:h-[55px]" />
        <p class="font-bold text-3xl md:text-4xl text-[#5B3A29] ml-2">540</p>
      </div>
      <p class="text-sm md:text-lg text-[#E17B34] mt-3 text-center">Produk dibuat</p>
    </div>

    <!-- 2 -->
    <div class="flex flex-col justify-center items-center bg-white px-4 h-[140px] md:h-[190px] w-full md:w-[260px] rounded-lg shadow-sm">
      <div class="flex flex-row justify-center items-center">
        <img src="../assets/icons/pesanan tersampaikan.png" class="w-[40px] h-[40px] md:w-[55px] md:h-[55px]" />
        <p class="font-bold text-3xl md:text-4xl text-[#5B3A29] ml-2">2500</p>
      </div>
      <p class="text-sm md:text-lg text-[#E17B34] mt-3 text-center">Pesanan tersampaikan</p>
    </div>

    <!-- 3 -->
    <div class="flex flex-col justify-center items-center bg-white px-4 h-[140px] md:h-[190px] w-full md:w-[260px] rounded-lg shadow-sm">
      <div class="flex flex-row justify-center items-center">
        <img src="../assets/icons/rating pelanggan.png" class="w-[40px] h-[40px] md:w-[55px] md:h-[55px]" />
        <p class="font-bold text-3xl md:text-4xl text-[#5B3A29] ml-2">4.9</p>
      </div>
      <p class="text-sm md:text-lg text-[#E17B34] mt-3 text-center">Rating Pelanggan</p>
    </div>

    <!-- 4 -->
    <div class="flex flex-col justify-center items-center bg-white px-4 h-[140px] md:h-[190px] w-full md:w-[260px] rounded-lg shadow-sm">
      <div class="flex flex-row justify-center items-center">
        <img src="../assets/icons/pengalaman.png" class="w-[40px] h-[40px] md:w-[55px] md:h-[55px]" />
        <p class="font-bold text-3xl md:text-4xl text-[#5B3A29] ml-2">5</p>
      </div>
      <p class="text-sm md:text-lg text-[#E17B34] mt-3 text-center">Pengalaman (Tahun)</p>
    </div>
  </div>
</section>

</template>