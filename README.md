# 📚 BANK SOAL UTUL UGM FISIKA

## 🎯 Tentang Proyek Ini

**Bank Soal UTUL UGM Fisika** adalah web pembelajaran interaktif yang berisi kumpulan soal asli UTUL UGM tahun 2016, 2017, 2018, serta latihan soal per topik (Mekanika, Listrik & Magnet, Zat & Kalor, Gelombang & Bunyi, Fisika Modern). Web ini dilengkapi dengan **pembahasan detail** yang tidak hanya memberikan rumus, tetapi juga **penjelasan konsep dan langkah penyelesaian** agar siswa benar-benar memahami materi, bukan sekadar menghafal.

Web ini **100% GRATIS** dan dapat diakses oleh siapa saja, kapan saja, dari perangkat apapun (HP, tablet, laptop).

---

## 🌐 Akses Online

🔗 **Klik tautan berikut untuk mengakses web:**

https://burhanudinera2018.github.io/utul-ugm-fisika/


- **Atau scan QR Code di bawah ini:**

<p align="center">
  <img src="https_burhanudinera2018_github_io_utul-ugm-fisika_.png" alt="QR Code UTUL UGM Fisika" width="250" height="250">
  <br>
  <em>Scan QR Code untuk akses cepat ke web</em>
</p>


---

## ✨ Fitur Unggulan

| Fitur | Deskripsi |
|-------|-----------|
| 📝 **133+ Soal** | Soal asli UTUL UGM + latihan per topik |
| 💡 **Pembahasan Detail** | Konsep + langkah penyelesaian (bukan sekadar rumus) |
| 🎯 **Mode Tryout** | Uji kemampuan dengan menyembunyikan pembahasan hingga selesai |
| 📊 **Progress Tracking** | Pantau jumlah soal yang dikerjakan dan yang benar |
| ⏰ **Countdown Timer** | Hitung mundur menuju jadwal ujian UTUL UGM (6 Juni 2026) |
| 📱 **Mobile Friendly** | Tampilan responsif, nyaman diakses dari HP |
| 🌍 **Akses 24/7** | Tidak perlu login, cukup buka tautan |

---

## 📊 Daftar Soal

| No | Topik | Jumlah Soal | Sumber |
|----|-------|-------------|--------|
| 1 | 🏆 UTUL UGM 2018 | 20 soal | Soal Asli Zenius |
| 2 | 🏆 UTUL UGM 2017 | 11 soal | Soal Asli Zenius |
| 3 | 🏆 UTUL UGM 2016 | 20 soal | Soal Asli Zenius |
| 4 | ⚡ Mekanika | 16 soal | Latihan Topik |
| 5 | 🔌 Listrik & Magnet | 18 soal | Latihan Topik |
| 6 | 🌡 Zat & Kalor | 16 soal | Latihan Topik |
| 7 | 🔊 Gelombang & Bunyi | 16 soal | Latihan Topik |
| 8 | ☢ Fisika Modern | 16 soal | Latihan Topik |

**Total: 133 soal + pembahasan detail!**

---

## 🗂️ Struktur Folder
```
UTUL_Web/
├── index.html # Halaman utama web
├── README.md # Dokumentasi proyek
├── DISCLAIMER.md # Pernyataan disclaimer
├── LICENSE # Lisensi penggunaan
└── js/
├── soal-2018.js # Soal UTUL UGM 2018
├── soal-2017.js # Soal UTUL UGM 2017
├── soal-2016.js # Soal UTUL UGM 2016
├── soal-mekanika.js # Latihan Mekanika
├── soal-listrik.js # Latihan Listrik & Magnet
├── soal-zatkalor.js # Latihan Zat & Kalor
├── soal-gelombang.js # Latihan Gelombang & Bunyi
└── soal-fismod.js # Latihan Fisika Modern
```

---

## 🖥️ Cara Menjalankan di Lokal (Opsional)

Jika ingin menjalankan web ini secara offline atau mengeditnya:

```bash
# Clone repository (jika sudah di-push ke GitHub)
git clone https://github.com/[USERNAME]/utul-ugm-fisika.git

# Masuk ke folder
cd utul-ugm-fisika

# Jalankan server lokal (Python 3)
python -m http.server 8000
```
# Buka browser dan akses
# http://localhost:8000

> ⚠️ Catatan: Web ini membutuhkan server HTTP (tidak cukup hanya double-click index.html) agar file JS dapat dimuat dengan benar. Gunakan perintah di atas.

## 📝 Contoh Pembahasan Soal
Berikut adalah contoh pembahasan detail yang tersedia untuk setiap soal:

### Contoh Soal Zat & Kalor:
"400 g air pada 40°C dicampur dengan 100 g air pada 30°C. Suhu akhir adalah ..."

#### Pembahasan:
💡 KONSEP DASAR: Asas Black menyatakan bahwa kalor yang dilepas = kalor yang diterima. Kalor (Q) = massa × kalor jenis × perubahan suhu (ΔT). Karena zat-nya sama (air), kalor jenisnya sama, jadi bisa dicoret.

### 🔍 LANGKAH PENYELESAIAN:
```
Air panas (40°C) akan melepas kalor karena suhunya lebih tinggi.

Air dingin (30°C) akan menerima kalor.

Misalkan suhu akhir campuran = T_f.

Kalor lepas = m₁ × c × (T₁ - T_f) = 400 × (40 - T_f)

Kalor terima = m₂ × c × (T_f - T₂) = 100 × (T_f - 30)

Karena kalor lepas = kalor terima:
400(40 - T_f) = 100(T_f - 30)
16000 - 400T_f = 100T_f - 3000
16000 + 3000 = 100T_f + 400T_f
19000 = 500T_f
T_f = 19000 ÷ 500 = 38°C
```
✅ JAWABAN: D (38°C)

---

## 🎯 Target Pengguna
Web ini diperuntukkan bagi:

- 🎓 Siswa SMA/MA kelas 12 yang akan menghadapi UTUL UGM 2026

- 📚 Siswa yang ingin memperdalam pemahaman Fisika secara mandiri

- 👨‍🏫 Guru yang membutuhkan bank soal untuk bahan ajar

- 👨‍👩‍👧 Orang tua yang ingin mendampingi anak belajar

## ⚠️ DISCLAIMER
Materi soal yang disajikan dalam web ini bersumber dari Zenius Education (https://www.zenius.net) dan dibagikan secara GRATIS dengan tujuan mulia:

✅ Membantu para pelajar yang sedang mempersiapkan diri menghadapi ujian UTUL UGM 2026
✅ Memberikan akses belajar yang mudah dan murah bagi semua kalangan
✅ Meningkatkan kualitas pendidikan Indonesia melalui berbagi ilmu

Penulis tidak bermaksud untuk mengkomersialkan materi ini.
Penulis tidak mengambil royalty, keuntungan, atau bentuk kompensasi finansial apapun dari web ini.

Jika Anda adalah pemilik hak cipta (Zenius Education) dan keberatan dengan penggunaan materi ini, silakan hubungi penulis untuk segera dilakukan tindakan yang diperlukan (penghapusan atau penyesuaian konten).

Terima kasih yang sebesar-besarnya kepada Zenius Education atas kontribusi luar biasanya dalam dunia pendidikan Indonesia. 🙏

## 📄 Lisensi
Web ini dilisensikan di bawah Creative Commons Attribution-NonCommercial 4.0 International License.

Anda diperbolehkan:

✅ Berbagi — menyalin, mendistribusikan materi

✅ Adaptasi — memodifikasi, membangun di atas materi

**Dengan ketentuan:**

- 📌 Atribusi — Harus mencantumkan sumber (Zenius Education dan pembuat web)

- 🚫 NonKomersial — Tidak boleh digunakan untuk tujuan komersial

https://creativecommons.org/licenses/by-nc/4.0/

## 🤝 Kontribusi
Jika Anda ingin berkontribusi mengembangkan web ini (misalnya: menambah soal, memperbaiki pembahasan, atau menambah fitur), silakan:

- Fork repository ini

- Buat branch baru (git checkout -b fitur-anda)

- Commit perubahan (git commit -m 'Menambahkan fitur X')

- Push ke branch (git push origin fitur-anda)

- Buka Pull Request

Atau laporkan isu/saran melalui Issues di repository GitHub.

📧 Kontak Penulis
Jika ada pertanyaan, saran, atau jika Anda adalah pemilik hak cipta yang ingin menghubungi penulis, silakan kirim pesan melalui:

- 📱 WhatsApp: [Nomor WhatsApp Anda]

- 📧 Email: [Alamat email Anda]

- 💬 GitHub Issues: [Link repository Anda]


⚠️ Catatan: Penulis tidak menerima sponsor atau tawaran komersial apapun terkait web ini.

## 🙏 Ucapan Terima Kasih
Web ini tidak akan terwujud tanpa dukungan dari:

- 🏫 Zenius Education — atas kumpulan soal dan pembahasan yang luar biasa

- 🎓 Universitas Gadjah Mada — sebagai inspirasi kampus impian

- 👨‍👩‍👧 Keluarga — atas dukungan dan doa

- 🌍 Semua pelajar Indonesia — semangat kalian adalah motivasi

## 🕋 Doa untuk Para Pejuang UGM 2026
"Ya Allah, mudahkanlah langkah kami dalam menuntut ilmu. Bukakanlah pintu-pintu pemahaman di hati kami. Karuniakanlah kami keberkahan dalam setiap usaha. Jadikanlah kami generasi yang cerdas, berakhlak mulia, dan bermanfaat bagi agama, bangsa, dan tanah air. Aamiin Ya Rabbal 'Alamin." 🤲

## 📅 Informasi Ujian
Keterangan	Detail
- 🗓️ Jadwal UTUL UGM 2026	6 Juni 2026
- ⏰ Countdown	Tersedia di halaman utama web
- 📍 Lokasi	Tergantung rayon masing-masing

## ⭐ Dukung Web Ini
Jika web ini bermanfaat untuk Anda atau adik-adik Anda, silakan:

- 📲 Share tautan ini ke grup belajar, medsos, atau teman-teman

- ⭐ Star repository ini di GitHub (jika Anda memiliki akun GitHub)

- 💬 Berikan testimoni atau saran melalui kontak yang tersedia

Selamat belajar dan sukses UTUL UGM 2026! 🎓🚀

Dibuat dengan niat tulus untuk membantu adik-adik pejuang kampus impian. 💙

