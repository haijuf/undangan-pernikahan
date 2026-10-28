// Edit isi undangan dari file ini tanpa mengubah komponen tampilan.
export const weddingData = {
  couple: {
    bride: {
      name: 'Salma Afidah',
      shortName: 'Salma',
      role: 'Mempelai Wanita',
      parents: 'Putri Terbaik Dari Keluarga',
      initial: 'S',
    },
    groom: {
      name: 'Jalaludin Shofa Mufti',
      shortName: 'Jalal',
      role: 'Mempelai Pria',
      parents: 'Putra Terbaik Dari Keluarga',
      initial: 'J',
    },
    date: 'Jumat, 30 Oktober 2026',
    shortNames: 'Jalal & Salma',
  },
  prewedding: [
    {
      src: '/foto-1.jpg',
      alt: 'Foto prewedding pertama',
      orientation: 'portrait',
    },
    {
      src: '/foto-2.jpg',
      alt: 'Foto prewedding kedua',
      orientation: 'portrait',
    },
    {
      src: '/foto-3.jpg',
      alt: 'Foto prewedding ketiga',
      orientation: 'portrait',
    },
    {
      src: '/foto-4.jpg',
      alt: 'Foto prewedding keempat',
      orientation: 'portrait',
    },
  ],
  event: {
    akad: {
      title: 'Akad Nikah',
      date: 'Jumat, 30 Oktober 2026',
      time: '15.30 WIB - selesai',
    },
    reception: {
      title: 'Makan bersama',
      date: 'Jumat, 30 Oktober 2026',
      time: '20.00 WIB - selesai',
      venueName: 'Aroem Bandung Resto & Cafe',
      mapUrl: 'https://maps.app.goo.gl/NTAmXY3t1T8m7w1v9',
    },
  },
  venue: {
    name: 'KUA Kecamatan Sukasari',
    address: 'Bandung, Jawa Barat',
    mapUrl: 'https://maps.google.com/?q=KUA+Kecamatan+Sukasari+Bandung',
    embedUrl: 'https://maps.google.com/maps?q=KUA+Kecamatan+Sukasari+Bandung&output=embed',
  },
  story: {
    title: 'Menyatukan Dua Langkah',
    subtitle: 'Kisah kami',
    copy: 'Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami. Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.',
    quote: 'Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu agar kamu merasa tenteram kepadanya.',
    quoteSource: 'QS. Ar-Rum: 21',
  },
  contact: {
    name: 'Konfirmasi Kehadiran',
    copy: 'Mohon konfirmasi kehadiran sebelum 20 Oktober 2026. Kehadiran dan doa baik Anda adalah kebahagiaan bagi kami.',
    whatsappUrl: 'https://wa.me/6281809637587',
  },
  music: {
    // Letakkan file mp3 di public/audio/lagu-pernikahan.mp3.
    src: '/audio/lagu-pernikahan.mp3',
    title: 'Lagu pernikahan',
  },
  rundown: [
    { title: 'Akad Nikah', description: 'Prosesi ijab kabul sebagai awal perjalanan suci kami.' },
    { title: 'Dokumentasi', description: 'Dokumentasi bersama keluarga, mengabadikan momen-momen indah.' },
    { title: 'Makan bersama', description: 'Syukuran dan silaturahmi berbagi kebahagiaan bersama keluarga.' },
  ],
  concept: [
    { title: 'Putih', description: 'Kesucian niat dalam memulai perjalanan baru.' },
    { title: 'Sederhana', description: 'Merayakan cinta dengan hangat dan penuh makna.' },
    { title: 'Bersyukur', description: 'Mengabadikan momen bersama orang-orang terkasih.' },
  ],
  wishes: [
    { id: 1, name: 'Keluarga Besar', message: 'Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.', createdAt: '2026-09-01T08:00:00.000Z' },
    { id: 2, name: 'Sahabat', message: 'Selamat menempuh hidup baru. Semoga selalu bahagia dan saling menguatkan.', createdAt: '2026-09-02T08:00:00.000Z' },
  ],
}
