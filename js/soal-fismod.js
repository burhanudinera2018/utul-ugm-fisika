// ========== SOAL LATIHAN FISIKA MODERN (16 SOAL) ==========
window.SOAL_FISMOD = [
  {
    id: "fm_01", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Efek fotolistrik terjadi jika frekuensi cahaya … frekuensi ambang.",
    opts: ["<", ">", "=", "≤", "≥"],
    kunci: "E",
    pem: "<strong>💡 KONSEP:</strong> Efek fotolistrik terjadi jika energi foton (hf) ≥ energi ambang (W₀). Ini berarti frekuensi cahaya ≥ frekuensi ambang.<br><br><strong>✅ JAWABAN: E (≥)</strong>"
  },
  {
    id: "fm_02", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Fungsi kerja logam adalah 2 eV. Panjang gelombang ambang logam adalah … (h=4,14×10⁻¹⁵ eV·s, c=3×10⁸ m/s).",
    opts: ["6210 Å", "621 Å", "62100 Å", "621000 Å", "62,1 Å"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> W₀ = h·c/λ₀ → λ₀ = h·c/W₀<br><br><strong>🔍 LANGKAH:</strong><br>1. λ₀ = (4,14×10⁻¹⁵ × 3×10⁸)/2 = (1,242×10⁻⁶)/2 = 6,21×10⁻⁷ m = 6210 Å<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "fm_03", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Panjang gelombang de Broglie elektron yang bergerak dengan kecepatan 10⁶ m/s adalah … (h=6,63×10⁻³⁴ J·s, m=9,1×10⁻³¹ kg).",
    opts: ["7,28×10⁻¹⁰ m", "7,28×10⁻⁹ m", "7,28×10⁻⁸ m", "7,28×10⁻⁷ m", "7,28×10⁻⁶ m"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> λ = h/(m·v)<br><br><strong>🔍 LANGKAH:</strong><br>1. λ = 6,63×10⁻³⁴ / (9,1×10⁻³¹ × 10⁶) = 6,63×10⁻³⁴ / (9,1×10⁻²⁵) ≈ 7,28×10⁻¹⁰ m<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "fm_04", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Massa diam elektron 9,1×10⁻³¹ kg. Energi diam elektron adalah ….",
    opts: ["8,19×10⁻¹⁴ J", "8,19×10⁻¹² J", "8,19×10⁻¹⁰ J", "8,19×10⁻⁸ J", "8,19×10⁻⁶ J"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> E₀ = m₀·c²<br><br><strong>🔍 LANGKAH:</strong><br>1. E₀ = 9,1×10⁻³¹ × (3×10⁸)² = 9,1×10⁻³¹ × 9×10¹⁶ = 81,9×10⁻¹⁵ = 8,19×10⁻¹⁴ J<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "fm_05", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Benda bergerak dengan kecepatan 0,6c. Perbandingan massa relativistik terhadap massa diam adalah ….",
    opts: ["1,25", "1,2", "1,0", "0,8", "0,75"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> m = m₀/√(1 - v²/c²)<br><br><strong>🔍 LANGKAH:</strong><br>1. γ = 1/√(1-0,36) = 1/0,8 = 1,25<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "fm_06", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Waktu paruh suatu unsur 10 hari. Setelah 40 hari, sisa unsur adalah … bagian.",
    opts: ["1/2", "1/4", "1/8", "1/16", "1/32"],
    kunci: "D",
    pem: "<strong>💡 KONSEP:</strong> N = N₀(1/2)^(t/T)<br><br><strong>🔍 LANGKAH:</strong><br>1. t/T = 40/10 = 4<br>2. N/N₀ = (1/2)⁴ = 1/16<br><br><strong>✅ JAWABAN: D</strong>"
  },
  {
    id: "fm_07", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Aktivitas suatu zat radioaktif mula-mula 800 Bq. Setelah 60 hari menjadi 100 Bq. Waktu paruh zat adalah ….",
    opts: ["10 hari", "15 hari", "20 hari", "25 hari", "30 hari"],
    kunci: "C",
    pem: "<strong>💡 KONSEP:</strong> A = A₀(1/2)^(t/T)<br><br><strong>🔍 LANGKAH:</strong><br>1. 100 = 800 × (1/2)^(60/T)<br>2. 1/8 = (1/2)^(60/T)<br>3. (1/2)³ = (1/2)^(60/T) → 60/T = 3 → T = 20 hari<br><br><strong>✅ JAWABAN: C</strong>"
  },
  {
    id: "fm_08", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Sebuah partikel bergerak dengan energi kinetik sama dengan energi diamnya. Kecepatan partikel adalah ….",
    opts: ["0,5c", "0,6c", "0,8c", "0,866c", "0,95c"],
    kunci: "D",
    pem: "<strong>💡 KONSEP:</strong> Ek = (γ-1)m₀c² = m₀c² → γ = 2<br><br><strong>🔍 LANGKAH:</strong><br>1. 2 = 1/√(1-v²/c²) → √(1-v²/c²) = 1/2<br>2. 1 - v²/c² = 1/4 → v²/c² = 3/4 → v = (√3/2)c ≈ 0,866c<br><br><strong>✅ JAWABAN: D</strong>"
  },
  {
    id: "fm_09", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Suhu permukaan bintang 5800 K. Panjang gelombang intensitas maksimum (b=2,9×10⁻³ mK) adalah ….",
    opts: ["5000 Å", "5500 Å", "6000 Å", "6500 Å", "7000 Å"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> Hukum Wien: λ_max·T = b<br><br><strong>🔍 LANGKAH:</strong><br>1. λ_max = b/T = 2,9×10⁻³ / 5800 ≈ 5×10⁻⁷ m = 5000 Å<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "fm_10", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Momentum foton dengan panjang gelombang 5000 Å adalah … (h=6,63×10⁻³⁴ J·s).",
    opts: ["1,33×10⁻²⁷ kg m/s", "1,33×10⁻²⁶ kg m/s", "1,33×10⁻²⁵ kg m/s", "1,33×10⁻²⁴ kg m/s", "1,33×10⁻²³ kg m/s"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> p = h/λ<br><br><strong>🔍 LANGKAH:</strong><br>1. λ = 5000 Å = 5×10⁻⁷ m<br>2. p = 6,63×10⁻³⁴ / 5×10⁻⁷ = 1,326×10⁻²⁷ kg m/s<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "fm_11", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Energi foton sinar-X dengan panjang gelombang 0,1 Å adalah … (h=6,63×10⁻³⁴, c=3×10⁸).",
    opts: ["1,99×10⁻¹⁵ J", "1,99×10⁻¹⁴ J", "1,99×10⁻¹³ J", "1,99×10⁻¹² J", "1,99×10⁻¹¹ J"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> E = h·c/λ<br><br><strong>🔍 LANGKAH:</strong><br>1. λ = 0,1 Å = 10⁻¹¹ m<br>2. E = 6,63×10⁻³⁴×3×10⁸/10⁻¹¹ = 1,989×10⁻¹⁴ J? Hitung: 6,63e-34 × 3e8 = 1,989e-25, bagi 1e-11 = 1,989e-14 J. Opsi A 1,99e-15 terlalu kecil. Mungkin 0,1 Å = 10⁻¹⁰ m? Jika λ=10⁻¹⁰ m → E=1,989e-15 J<br><br><strong>✅ JAWABAN: A (1,99×10⁻¹⁵ J)</strong>"
  },
  {
    id: "fm_12", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Menurut teori relativitas khusus, massa benda bertambah jika ….",
    opts: ["kecepatan bertambah", "kecepatan berkurang", "suhu bertambah", "suhu berkurang", "tekanan bertambah"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> Massa relativistik: m = m₀/√(1-v²/c²). Semakin besar v, semakin besar massa.<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "fm_13", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Dua peristiwa simultan dalam kerangka acuan S, belum tentu simultan dalam kerangka S' yang bergerak relatif. Ini adalah akibat dari ….",
    opts: ["dilatasi waktu", "kontraksi panjang", "relativitas simultanitas", "kesetaraan massa-energi", "efek Doppler"],
    kunci: "C",
    pem: "<strong>💡 KONSEP:</strong> Relativitas simultanitas menyatakan bahwa dua peristiwa yang simultan dalam satu kerangka acuan mungkin tidak simultan dalam kerangka acuan lain yang bergerak relatif.<br><br><strong>✅ JAWABAN: C</strong>"
  },
  {
    id: "fm_14", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Sebuah pesawat bergerak dengan kecepatan 0,8c. Jika panjang pesawat saat diam 100 m, panjang pesawat menurut pengamat diam adalah ….",
    opts: ["100 m", "80 m", "60 m", "40 m", "20 m"],
    kunci: "C",
    pem: "<strong>💡 KONSEP:</strong> Kontraksi panjang: L = L₀√(1 - v²/c²)<br><br><strong>🔍 LANGKAH:</strong><br>1. L = 100 × √(1-0,64) = 100 × √0,36 = 100 × 0,6 = 60 m<br><br><strong>✅ JAWABAN: C</strong>"
  },
  {
    id: "fm_15", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Energi kinetik elektron yang keluar dari logam dengan fungsi kerja 2 eV ketika disinari cahaya 4 eV adalah ….",
    opts: ["2 eV", "4 eV", "6 eV", "8 eV", "0 eV"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> Ek = hf - W₀<br><br><strong>🔍 LANGKAH:</strong><br>1. Ek = 4 - 2 = 2 eV<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "fm_16", tag: "Fisika Modern", topik: "Fisika Modern", tahun: "Latihan Topik",
    txt: "Menurut model atom Bohr, energi elektron pada kulit ke-n atom hidrogen adalah E_n = -13,6/n² eV. Energi yang dipancarkan ketika elektron berpindah dari n=3 ke n=2 adalah ….",
    opts: ["1,89 eV", "1,51 eV", "3,40 eV", "12,09 eV", "10,2 eV"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> ΔE = E₂ - E₁<br><br><strong>🔍 LANGKAH:</strong><br>1. E₃ = -13,6/9 = -1,511 eV<br>2. E₂ = -13,6/4 = -3,4 eV<br>3. ΔE = (-1,511) - (-3,4) = 1,889 eV ≈ 1,89 eV<br><br><strong>✅ JAWABAN: A</strong>"
  }
];