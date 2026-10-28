# Undangan Pernikahan

Starter website undangan pernikahan menggunakan Vue 3 dan Vite. Template ini
memisahkan data undangan dari komponen tampilan supaya perubahan nama, jadwal,
lokasi, dan kontak tidak perlu menyentuh struktur UI.

## Menjalankan project

```bash
npm install
npm run dev
```

Untuk membuat build produksi:

```bash
npm run build
```

## Struktur folder

```text
src/
├── components/       # Bagian UI yang dapat dikembangkan terpisah
│   ├── CoupleSection.vue
│   ├── CountdownTimer.vue
│   ├── EventDetails.vue
│   ├── InvitationCover.vue
│   ├── RsvpSection.vue
│   ├── RundownSection.vue
│   ├── WishesSection.vue
│   └── WeddingFooter.vue
├── data/
│   └── wedding.js    # Seluruh isi/data undangan
├── App.vue           # Komposisi halaman dan state global ringan
├── main.js           # Entry point Vue
└── style.css         # Style global dan style komponen saat ini
```

## Mengubah isi undangan

Edit object `weddingData` di
[`src/data/wedding.js`](./src/data/wedding.js). Properti yang tersedia:

- `couple`: nama pasangan dan tanggal utama.
- `event`: jadwal akad dan resepsi.
- `venue`: nama, alamat, dan URL peta.
- `story`: judul, deskripsi, dan kutipan.
- `contact`: teks RSVP dan URL WhatsApp.

Komponen menerima data melalui props, sehingga bagian seperti galeri foto,
rekening hadiah, atau buku tamu dapat ditambahkan sebagai komponen baru tanpa
mencampur data ke dalam template halaman.

## Doa dan ucapan

Ucapan awal dapat diubah pada properti `wishes` di
[`src/data/wedding.js`](./src/data/wedding.js). Ucapan baru dari form disimpan
di `localStorage` browser dengan key `undangan-wishes`, sehingga tidak hilang
ketika halaman di-refresh pada perangkat/browser yang sama.

Karena project ini belum memakai database, ucapan belum tersinkron ke perangkat
pengunjung lain. Agar semua pengunjung melihat ucapan yang sama, tahap
berikutnya perlu API atau backend/database.

## Menambahkan lagu

1. Buat folder `public/audio`.
2. Salin file MP3 ke folder tersebut dengan nama `lagu-pernikahan.mp3`.
3. Jika nama file berbeda, ubah `music.src` di
   [`src/data/wedding.js`](./src/data/wedding.js), misalnya
   `'/audio/nama-file.mp3'`.
4. Jalankan `npm run dev`, buka undangan, lalu tekan tombol musik di kanan
   bawah.

Browser biasanya memblokir autoplay. Karena itu musik dimulai setelah aksi
pengunjung. Jika file belum ada, halaman akan menampilkan lokasi file yang
perlu ditambahkan. Pastikan lagu yang digunakan memiliki hak penggunaan.
## Menghubungkan doa ke Supabase

Package `@supabase/supabase-js` digunakan oleh
[`src/lib/supabase.js`](./src/lib/supabase.js) dan
[`WishesSection.vue`](./src/components/WishesSection.vue).

1. Salin `.env.example` menjadi `.env.local`.
2. Isi `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY` dari **Project
   Settings → API** di Supabase.
3. Pastikan tabel `wishes` sudah dibuat dan policy `select` serta `insert`
   untuk role `anon` sudah aktif.
4. Jalankan ulang `npm run dev` setelah mengubah `.env.local`.

Tanpa environment variable, halaman tetap menampilkan doa awal dari
`wedding.js`, tetapi form tidak mengirim data online. Setelah variable diisi,
doa dibaca dan disimpan di Supabase sehingga dapat dilihat semua pengunjung dan
tetap ada setelah refresh.

Tambahkan variable yang sama di **Vercel → Project Settings → Environment
Variables** untuk environment Production, Preview, dan Development, lalu
deploy ulang. Gunakan hanya publishable/anon key; jangan pernah memasukkan
`service_role` key ke frontend.
