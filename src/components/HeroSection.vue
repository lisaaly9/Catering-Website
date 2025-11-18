<template>
	<section class="dark:bg-gray-100 dark:text-gray-800">
		<div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
			<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
				<h1 class="text-5xl font-bold leading-none sm:text-6xl">Our Dream
					<span class="dark:text-indigo-600">Guild's</span> Idol Character
				</h1>
				<p class="mt-6 mb-8 text-lg sm:mb-12">Step into a world where every face tells a story.
					<br class="hidden md:inline lg:hidden"> Discover the charm, style, and soul of each idol in our guild
				</p>
				<div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
					<router-link to="/contact"class="px-8 py-3 text-lg font-semibold rounded dark:bg-indigo-600 dark:text-gray-50">Tertarik !!</router-link>
					<router-link to="/contact"class="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Tertarik Banget !!!</router-link>
				</div>
			</div>
            <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				<img src="https://i.pinimg.com/1200x/47/75/c2/4775c2132556ae02f9f81854f26b0aed.jpg" alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			</div>
		</div>
	</section>
</template>