// ========== SOAL LATIHAN MEKANIKA (16 SOAL) ==========
window.SOAL_MEKANIKA = [
  {
    id: "mek_01", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Mobil bergerak lurus dengan kecepatan awal 10 m/s. Setelah 5 sekon, kecepatannya menjadi 30 m/s. Percepatan rata-rata mobil adalah ….",
    opts: ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²", "10 m/s²"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Percepatan rata-rata = perubahan kecepatan / waktu<br><br><strong>🔍 LANGKAH:</strong><br>1. Δv = 30 - 10 = 20 m/s<br>2. Δt = 5 s<br>3. a = Δv/Δt = 20/5 = 4 m/s²<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "mek_02", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Balok 2 kg ditarik gaya 10 N di lantai kasar (μ = 0,2, g = 10 m/s²). Percepatan balok adalah ….",
    opts: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
    kunci: "C",
    pem: "<strong>💡 KONSEP:</strong> Hukum II Newton dengan gaya gesek<br><br><strong>🔍 LANGKAH:</strong><br>1. Gaya gesek: f = μ·m·g = 0,2 × 2 × 10 = 4 N<br>2. Resultan gaya: F_net = 10 - 4 = 6 N<br>3. Percepatan: a = F_net/m = 6/2 = 3 m/s²<br><br><strong>✅ JAWABAN: C</strong>"
  },
  {
    id: "mek_03", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Benda 0,5 kg dilempar vertikal ke atas dengan kecepatan 20 m/s (g=10 m/s²). Energi kinetik saat ketinggian 15 m adalah ….",
    opts: ["25 J", "50 J", "75 J", "100 J", "125 J"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> Kekekalan energi mekanik: Ep + Ek = konstan<br><br><strong>🔍 LANGKAH:</strong><br>1. Di awal (h=0): Ek₁ = ½×0,5×400 = 100 J, Ep₁ = 0<br>2. Di h=15 m: Ep₂ = mgh = 0,5×10×15 = 75 J<br>3. Ek₂ = Ek₁ + Ep₁ - Ep₂ = 100 - 75 = 25 J<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "mek_04", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Benda 2 kg (v=4 m/s) menumbuk benda 3 kg diam. Tumbukan lenting sempurna. Kecepatan benda 2 kg setelah tumbukan ….",
    opts: ["-0,8 m/s", "-1,6 m/s", "1,6 m/s", "3,2 m/s", "4,0 m/s"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> Tumbukan lenting sempurna 1 dimensi<br><br><strong>🔍 LANGKAH:</strong><br>1. Rumus kecepatan setelah tumbukan: v₁' = (m₁-m₂)/(m₁+m₂) × v₁<br>2. v₁' = (2-3)/(2+3) × 4 = (-1/5) × 4 = -0,8 m/s<br>3. Tanda negatif menunjukkan arah berlawanan<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "mek_05", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Partikel melingkar beraturan r=2 m, ω=3 rad/s. Percepatan sentripetal = ….",
    opts: ["6 m/s²", "9 m/s²", "12 m/s²", "18 m/s²", "24 m/s²"],
    kunci: "D",
    pem: "<strong>💡 KONSEP:</strong> Percepatan sentripetal: a_s = ω²·r<br><br><strong>🔍 LANGKAH:</strong><br>1. a_s = (3)² × 2 = 9 × 2 = 18 m/s²<br><br><strong>✅ JAWABAN: D</strong>"
  },
  {
    id: "mek_06", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Pegas k=200 N/m diberi beban 0,5 kg (g=10 m/s²). Pertambahan panjang pegas = ….",
    opts: ["1 cm", "2,5 cm", "5 cm", "10 cm", "25 cm"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Hukum Hooke: F = k·Δx, dengan F = berat beban<br><br><strong>🔍 LANGKAH:</strong><br>1. Berat: F = m·g = 0,5 × 10 = 5 N<br>2. Δx = F/k = 5/200 = 0,025 m = 2,5 cm<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "mek_07", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Planet X (R, T=1 th). Planet Y jarak 4R. Periode Y = ….",
    opts: ["2 th", "4 th", "8 th", "16 th", "32 th"],
    kunci: "C",
    pem: "<strong>💡 KONSEP:</strong> Hukum III Kepler: T² ∝ R³<br><br><strong>🔍 LANGKAH:</strong><br>1. (T_Y/T_X)² = (R_Y/R_X)³ = (4R/R)³ = 64<br>2. T_Y/T_X = √64 = 8<br>3. T_Y = 8 × T_X = 8 × 1 = 8 tahun<br><br><strong>✅ JAWABAN: C</strong>"
  },
  {
    id: "mek_08", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Silinder pejal (I=½MR²) menggelinding v=4 m/s, M=2 kg. Energi kinetik total = ….",
    opts: ["8 J", "12 J", "16 J", "24 J", "32 J"],
    kunci: "D",
    pem: "<strong>💡 KONSEP:</strong> Energi kinetik menggelinding = Ek_translasi + Ek_rotasi<br><br><strong>🔍 LANGKAH:</strong><br>1. Ek_translasi = ½ M v² = ½ × 2 × 16 = 16 J<br>2. Ek_rotasi = ½ I ω² = ½ × (½ M R²) × (v/R)² = ¼ M v² = ¼ × 2 × 16 = 8 J<br>3. Ek_total = 16 + 8 = 24 J<br><br><strong>✅ JAWABAN: D</strong>"
  },
  {
    id: "mek_09", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Bola ditendang v₀=20 m/s, sudut 30°. Waktu ke titik tertinggi (g=10 m/s²) = ….",
    opts: ["0,5 s", "1 s", "1,5 s", "2 s", "2,5 s"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Gerak parabola: waktu ke puncak t = v₀ sinθ / g<br><br><strong>🔍 LANGKAH:</strong><br>1. v₀y = 20 × sin30° = 20 × 0,5 = 10 m/s<br>2. t = v₀y / g = 10/10 = 1 s<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "mek_10", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Balok 5 kg di bidang miring licin 37° (sin37=0,6). Percepatan = … (g=10 m/s²).",
    opts: ["3 m/s²", "4 m/s²", "5 m/s²", "6 m/s²", "10 m/s²"],
    kunci: "D",
    pem: "<strong>💡 KONSEP:</strong> Bidang miring licin: a = g sinθ<br><br><strong>🔍 LANGKAH:</strong><br>1. a = 10 × sin37° = 10 × 0,6 = 6 m/s²<br><br><strong>✅ JAWABAN: D</strong>"
  },
  {
    id: "mek_11", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Partikel 0,2 kg, r=0,5 m, ω=4 rad/s. Momentum sudut = … (kg m²/s).",
    opts: ["0,1", "0,2", "0,4", "0,8", "1,6"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Momentum sudut partikel: L = m r² ω<br><br><strong>🔍 LANGKAH:</strong><br>1. L = 0,2 × (0,5)² × 4 = 0,2 × 0,25 × 4 = 0,2 × 1 = 0,2 kg m²/s<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "mek_12", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Grafik F-x segitiga alas 4 m, tinggi 10 N. Usaha dari 0 ke 4 m = … J.",
    opts: ["10", "20", "30", "40", "80"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Usaha = luas di bawah grafik F-x<br><br><strong>🔍 LANGKAH:</strong><br>1. Luas segitiga = ½ × alas × tinggi<br>2. W = ½ × 4 × 10 = 20 J<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "mek_13", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Bandul panjang 1,6 m, g=10 m/s². Periode = … π s.",
    opts: ["0,4π", "0,8π", "1,2π", "1,6π", "2,0π"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Periode bandul sederhana: T = 2π√(L/g)<br><br><strong>🔍 LANGKAH:</strong><br>1. T = 2π√(1,6/10) = 2π√0,16 = 2π × 0,4 = 0,8π s<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "mek_14", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Piringan M=4 kg, R=0,2 m, ω=10 rad/s. Momen inersia I=½MR². Momentum sudut = … kg m²/s.",
    opts: ["0,4", "0,8", "1,6", "2,0", "4,0"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Momentum sudut: L = I·ω<br><br><strong>🔍 LANGKAH:</strong><br>1. I = ½ × 4 × (0,2)² = 2 × 0,04 = 0,08 kg m²<br>2. L = 0,08 × 10 = 0,8 kg m²/s<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "mek_15", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Dua pegas identik (k=100 N/m) disusun seri. k_total = … N/m.",
    opts: ["25", "50", "100", "150", "200"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Pegas seri: 1/k_total = 1/k₁ + 1/k₂<br><br><strong>🔍 LANGKAH:</strong><br>1. 1/k_total = 1/100 + 1/100 = 2/100 = 1/50<br>2. k_total = 50 N/m<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "mek_16", tag: "Mekanika", topik: "Mekanika", tahun: "Latihan Topik",
    txt: "Batang homogen 2 kg, panjang 1 m, diputar di ujung. Momen inersia = … kg m².",
    opts: ["1/3", "2/3", "1", "4/3", "2"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Momen inersia batang poros di ujung: I = ⅓ M L²<br><br><strong>🔍 LANGKAH:</strong><br>1. I = ⅓ × 2 × (1)² = ⅓ × 2 = ⅔ kg m²<br><br><strong>✅ JAWABAN: B</strong>"
  }
];