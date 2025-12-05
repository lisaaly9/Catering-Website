<template>
    <section class="bg-[#FFF8E1] text-[#FFF8E1] pt-17 py-9 px-6 text-center">
      <h1 class="text-4xl font-bold text-[#5B3A29] leading-tight mb-4">Hubungi dan Pesan Catering Sekarang </h1>
      <p class="text-lg text-[#5B3A29] mb-8">Isi data berikut untuk melakukan pemesanan atau konsultasi menu</p>
      <div class="w-12 h-1 bg-orange-400 rounded center mx-auto"></div>
    </section>

    <section id="contact" class="relative py-16 px-4">

        <div class="absolute inset-0">
            <img 
                src="@/assets/images/galeri/order.jpeg" 
                alt="Background Image" 
                class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-black/25"></div>
        </div>


        <div class="relative mx-auto max-w-7xl grid md:grid-cols-2 gap-10">


        <div class="backdrop-blur-ms bg-white/60 p-8 rounded-3xl shadow-xl">
            <h2 class="mt-30 text-5xl font-bold text-[#5B3A29] mb-4"> Gudeg Bu Wik </h2>
            <p class="text-[#5B3A29] leading-relaxed mb-6 font-bold">
                Halo! 👋 Terima kasih telah menghubungi kami ♡ <br>
                ♡ Open Order: Senin – Jumat (10.00 – 22.00 WITA) <br>
                ♡ Sabtu – Minggu: Libur (akan direspon hari Senin)
            </p>
            <p class="text-[#5B3A29] mb-6 font-bold">
                Untuk melakukan pemesanan catering, silahkan isi form disamping.
            </p>
            <ul class="space-y-3 text-[#5B3A29] text-lg font-bold">
                <li> Tepat waktu & higienis</li>
                <li> Menu variatif setiap hari</li>
                <li> Gratis ongkir area kota</li>
                <li> Bisa pre-order & custom</li>
            </ul>
        </div>

        <div class="backdrop-blur-ms bg-white/20 p-8 rounded-3xl shadow-xl border border-white/30">
            <h2 class="text-3xl font-bold text-white mb-6 text-center"> Order Sekarang </h2>
            <form class="space-y-4">
                <input v-model="nama" type="text" placeholder="Nama Lengkap"
                    class="w-full rounded-md bg-[#EBD2B2] text-[#5B3A29] px-4 py-3">
                <input v-model="email" type="email" placeholder="Email"
                    class="w-full rounded-md bg-[#EBD2B2] text-[#5B3A29] px-4 py-3">
                <input v-model="wa" type="text" placeholder="Nomor Telepon (WhatsApp)"
                    class="w-full rounded-md bg-[#EBD2B2] text-[#5B3A29] px-4 py-3">
                <input type="text" placeholder="Alamat Pengantaran"
                    class="w-full rounded-md bg-[#EBD2B2] text-[#5B3A29] px-4 py-3">
                <select class="w-full rounded-md bg-[#EBD2B2] text-[#5B3A29] px-4 py-3">
                    <option>Pilih Paket/Menu</option>
                    <option>Makanan</option>
                    <option>Parsel</option>
                    <option>Snack</option>
                </select>
                <input type="number" placeholder="Jumlah Porsi" 
                    class="w-full rounded-md bg-[#EBD2B2] text-[#5B3A29] px-4 py-3">
                <textarea rows="4" placeholder="*Catatan Tambahan" class="w-full rounded-md bg-[#EBD2B2] text-[#5B3A29] px-4 py-3"></textarea>
                <input type="date" :min="new Date().toISOString().split('T')[0]" 
                    class="w-full rounded-md bg-[#EBD2B2] text-[#5B3A29] px-4 py-3">
                <select class="w-full rounded-md bg-[#EBD2B2] text-[#5B3A29] px-4 py-3">
                    <option>Pilih Jenis Pembayaran</option>
                    <option>QRIS</option>
                    <option>Transfer Bank</option>
                    <option>Tunai</option>
                </select>
                <button @click="kirimWA"   class="w-full bg-[#5B3A29] text-white font-medium py-3 rounded-lg">
                    Kirim via WhatsApp
                </button>
            </form>
        </div>
        </div>
    </section>

    <section class="bg-[#3B3734] text-[#FFF8E1] py-9 px-6 text-center">
        <p class="mt-1 text-lg md:text-xl italic font-medium">"Kami tunggu pesanan milikmu!"</p>
    </section>


    <section class="relative">
        <div class="w-full">
            <div
                class="relative h-[380px] md:h-[450px] lg:h-[520px] rounded-xl overflow-hidden bg-cover bg-center"
                style="background-image: url('/src/assets/images/galeri/maps.png');">
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute inset-0 flex items-center justify-between px-6 md:px-10 lg:px-16">
            <div class="bg-black/50 text-white p-6 md:p-8 rounded-lg max-w-md">
            <h3 class="text-2xl font-semibold mb-3">Lokasi Kami</h3>
            <p class="leading-relaxed text-sm md:text-base">
                Institut Teknologi Kalimantan (ITK) <br />
                Jl. Soekarno Hatta Km 15, Balikpapan Utara <br />
                Buka: Senin–Jumat (08.00 – 17.00)
            </p>
            </div>
            <div class="hidden md:block w-[300px] h-[300px] lg:w-[360px] lg:h-[360px] rounded-xl overflow-hidden shadow-xl">
            <iframe
                class="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.328382456784!2d116.8615984!3d-1.191102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14f28b6a3bb8d%3A0x8e78dac827ad1d31!2sInstitut%20Teknologi%20Kalimantan!5e0!3m2!1sid!2sid!4v1732780000000"
                loading="lazy"
            ></iframe>
            </div>
            </div>
            </div>
        </div>
    </section>   
</template>


<script>
export default {
    data() {
        return {
            nama: "",
            email: "",
            wa: "",
        };
    },


    methods: {
        kirimWA() {
            if (!this.nama || !this.email || !this.wa) {
                alert("Semua data wajib diisi yaa!");
                return;
            }
            alert("Pesananmu sudah terkirim! tunggu balasannya yaa ^^");
        }
    }
}
</script>