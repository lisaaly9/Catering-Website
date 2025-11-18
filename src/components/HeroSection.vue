<template>
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
</template>