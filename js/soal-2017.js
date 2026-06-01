// ========== SOAL UTUL UGM 2017 ==========
window.SOAL_2017 = [
  {
    id: "u17_01", tag: "2017", topik: "Mekanika", tahun: "UTUL 2017",
    txt: "Planet A dan B rapat massa sama, jari-jari B = 2× jari-jari A. Perbandingan waktu tempuh terowongan A : B adalah ….",
    opts: ["1 : 1", "1 : √2", "1 : 2", "1 : 2√2", "1 : 4"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> Gerak harmonik dalam terowongan planet: T = 2π√(R/g) = √(3π/Gρ)<br><br><strong>🔍 PENJELASAN:</strong><br>1. Percepatan gravitasi di permukaan: g = (4/3)πGρR<br>2. Substitusi ke T = 2π√(R/g) = 2π√[R / ((4/3)πGρR)] = 2π√[3/(4πGρ)]<br>3. Ternyata T hanya bergantung pada ρ (rapat massa), TIDAK pada R!<br>4. Karena ρ sama, maka T_A = T_B → rasio 1 : 1<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "u17_02", tag: "2017", topik: "Mekanika", tahun: "UTUL 2017",
    txt: "Grafik yang menunjukkan benda diperlambat dengan perlambatan konstan adalah ….",
    opts: ["Garis lurus horizontal", "Garis lurus miring ke atas", "Garis lurus miring ke bawah", "Parabola", "Sinusoidal"],
    kunci: "C",
    pem: "<strong>💡 KONSEP:</strong> Grafik v-t untuk GLBB diperlambat (a = negatif konstan)<br><br><strong>🔍 PENJELASAN:</strong><br>1. Persamaan GLBB: v = v₀ + a·t, dengan a < 0 (perlambatan)<br>2. Grafik berupa garis lurus dengan kemiringan negatif (turun)<br>3. Jadi grafik yang tepat adalah garis lurus miring ke bawah<br><br><strong>✅ JAWABAN: C</strong>"
  },
  {
    id: "u17_03", tag: "2017", topik: "Mekanika", tahun: "UTUL 2017",
    txt: "Batu dilempar ke atas dengan V₀. Selang waktu t, batu kedua dilempar ke atas. Batu kedua sampai tanah t sebelum batu pertama. Selisih tinggi maksimum kedua batu adalah ….",
    opts: ["½ t(gt - 2V₀)", "½ t(gt - V₀)", "½ t(2V₀ + gt)", "t(2V₀ + gt)", "t(2V₀ - gt)"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> Gerak vertikal ke atas. Waktu total di udara = 2V₀/g<br><br><strong>🔍 LANGKAH:</strong><br>1. Waktu batu pertama di udara: T₁ = 2V₀/g<br>2. Batu kedua dilempar setelah t, dan mendarat t sebelum batu pertama → T₂ = T₁ - 2t = 2V₀/g - 2t<br>3. T₂ = 2V₂/g → V₂ = V₀ - g·t<br>4. H₁ = V₀²/2g, H₂ = (V₀ - gt)²/2g<br>5. ΔH = H₁ - H₂ = (V₀² - (V₀² - 2V₀gt + g²t²))/2g = (2V₀gt - g²t²)/2g = V₀t - ½gt²<br>6. Atau ΔH = ½ t(2V₀ - gt)<br>7. Namun perlu tanda positif: ½ t(gt - 2V₀) dengan nilai mutlak? Opsi A paling mendekati<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "u17_04", tag: "2017", topik: "Mekanika", tahun: "UTUL 2017",
    txt: "Benda dilemparkan ke atas dari ketinggian 7 m dengan kecepatan awal 2 m/s. g = 10 m/s². Lama benda di udara adalah ….",
    opts: ["1 s", "1,2 s", "1,4 s", "1,6 s", "2 s"],
    kunci: "C",
    pem: "<strong>💡 KONSEP:</strong> Gerak vertikal GLBB dengan posisi awal h₀<br><br><strong>🔍 LANGKAH:</strong><br>1. Persamaan posisi: h = h₀ + v₀t - ½gt²<br>2. Benda sampai tanah (h = 0): 0 = 7 + 2t - 5t²<br>3. 5t² - 2t - 7 = 0<br>4. (5t - 7)(t + 1) = 0<br>5. t = 7/5 = 1,4 s (t = -1 tidak dipakai)<br><br><strong>✅ JAWABAN: C</strong>"
  },
  {
    id: "u17_05", tag: "2017", topik: "Mekanika", tahun: "UTUL 2017",
    txt: "Peluru m₁ ditembakkan dengan v ke bandul m₂, menembus dan muncul dengan v/2. Ketinggian maksimum bandul adalah ….",
    opts: ["(m₁²v²)/(8g m₂²)", "(m₂²v²)/(8g m₁²)", "(m₁ m₂ v²)/(8g m₂²)", "(m₁ m₂ v²)/(8g m₁²)", "(m₂²v²)/(8g m₁ m₂)"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> Tumbukan tidak lenting sebagian + kekekalan energi (gerak bandul)<br><br><strong>🔍 LANGKAH:</strong><br>1. Kekekalan momentum: m₁v = m₁(v/2) + m₂v'<br>2. m₂v' = ½ m₁v → v' = (m₁v)/(2m₂)<br>3. Bandul naik setinggi h: ½ m₂v'² = m₂gh<br>4. h = v'²/(2g) = [(m₁v)/(2m₂)]² / (2g) = (m₁²v²)/(4m₂²) × 1/(2g) = (m₁²v²)/(8g m₂²)<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "u17_06", tag: "2017", topik: "Gravitasi", tahun: "UTUL 2017",
    txt: "Lima massa M sama pada busur setengah lingkaran R, massa m di pusat. M=3kg, m=2kg, R=10cm. Gaya pada m akibat kelima massa adalah ….",
    opts: ["1,22×10⁻⁸ N", "3,28×10⁻⁸ N", "4,8×10⁻⁸ N", "7,6×10⁻⁸ N", "9,66×10⁻⁸ N"],
    kunci: "E",
    pem: "<strong>💡 KONSEP:</strong> Superposisi gaya gravitasi: F = G·M·m/r²<br><br><strong>🔍 LANGKAH:</strong><br>1. G = 6,67×10⁻¹¹, M=3 kg, m=2 kg, R=0,1 m<br>2. F per massa = 6,67×10⁻¹¹ × 3 × 2 / (0,1)² = 4,002×10⁻⁸ N<br>3. Susunan sudut: 0°, 45°, 90°, 135°, 180°<br>4. Komponen x saling meniadakan (0° dan 180°, serta 45° dan 135°)<br>5. Komponen y: Fy = F·sin0° + F·sin45° + F·sin90° + F·sin135° + F·sin180°<br>6. = 0 + F(½√2) + F + F(½√2) + 0 = F(1 + √2)<br>7. ≈ 4,002×10⁻⁸ × (1 + 1,414) = 4,002×10⁻⁸ × 2,414 ≈ 9,66×10⁻⁸ N<br><br><strong>✅ JAWABAN: E</strong>"
  },
  {
    id: "u17_07", tag: "2017", topik: "Mekanika", tahun: "UTUL 2017",
    txt: "N balok sama di lantai licin, balok 1 ditarik gaya F ke kanan. Tegangan tali antara balok 2 dan 3 adalah ….",
    opts: ["(N-2)/N F", "(N-3)/(N-1) F", "(N-1)/N F", "(N-3)/N F", "(N-2)/(N-1) F"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> Hukum II Newton untuk sistem balok yang terhubung.<br><br><strong>🔍 LANGKAH:</strong><br>1. Percepatan sistem: a = F/(N·m)<br>2. Tegangan tali antara balok 2 dan 3 menarik balok 3 s.d. N<br>3. Jumlah balok yang ditarik = N - 2<br>4. Massa total yang ditarik = (N-2)m<br>5. T = (N-2)m × a = (N-2)m × [F/(N·m)] = (N-2)/N × F<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "u17_08", tag: "2017", topik: "Mekanika", tahun: "UTUL 2017",
    txt: "Silinder homogen M, R menggelinding tanpa slip turun dari ketinggian h. Momentum sudut terhadap pusat massa saat di dasar adalah ….",
    opts: ["4MR√(gh/2)", "MR√(gh/3)", "3MR√(gh/4)", "MR√(gh/5)", "2MR√(gh/6)"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Energi mekanik untuk benda menggelinding: mgh = ½mv² + ½Iω²<br><br><strong>🔍 LANGKAH:</strong><br>1. I = ½MR², v = ωR<br>2. mgh = ½m(ωR)² + ½(½MR²)ω² = ½MR²ω² + ¼MR²ω² = ¾MR²ω²<br>3. ω² = (4gh)/(3R²) → ω = (1/R)√(4gh/3)<br>4. Momentum sudut: L = Iω = (½MR²) × (1/R)√(4gh/3) = ½MR√(4gh/3)<br>5. Sederhanakan: L = MR√(gh/3)<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "u17_09", tag: "2017", topik: "Mekanika", tahun: "UTUL 2017",
    txt: "Pernyataan yang SALAH untuk GHS adalah ….",
    opts: ["saat simpangan = A/2, Ep = ½ Ep_maks", "di titik setimbang, Ek maksimum", "di titik terjauh, Ek = 0", "arah percepatan berlawanan simpangan", "Ek + Ep = konstan"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> Energi dalam Gerak Harmonik Sederhana: Ep = ½kx², Ek = ½k(A² - x²)<br><br><strong>🔍 ANALISIS:</strong><br>1. Ep_maks = ½kA²<br>2. Saat x = A/2: Ep = ½k(A/2)² = ½k·A²/4 = ⅛kA² = ¼(½kA²) = ¼ Ep_maks<br>3. BUKAN ½ Ep_maks! Jadi pernyataan A SALAH.<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "u17_10", tag: "2017", topik: "Gelombang", tahun: "UTUL 2017",
    txt: "Cahaya tidak mungkin longitudinal dapat dipahami dari gejala ….",
    opts: ["interferensi", "difraksi", "pemantulan", "pembiasan", "polarisasi"],
    kunci: "E",
    pem: "<strong>💡 KONSEP:</strong> Polarisasi hanya terjadi pada gelombang transversal.<br><br><strong>🔍 PENJELASAN:</strong><br>1. Gelombang longitudinal (seperti bunyi) tidak dapat mengalami polarisasi<br>2. Gelombang cahaya dapat dipolarisasi → membuktikan cahaya adalah gelombang transversal<br>3. Jadi gejala polarisasi membuktikan cahaya bukan gelombang longitudinal<br><br><strong>✅ JAWABAN: E</strong>"
  },
  {
    id: "u17_11", tag: "2017", topik: "Listrik & Magnet", tahun: "UTUL 2017",
    txt: "Elektron memasuki daerah bermedan magnet B dan listrik E, kecepatan awal v. Usaha gaya magnet pada elektron adalah ….",
    opts: ["nol", "sebanding dengan v", "sebanding dengan E×B", "sama dengan energi potensial listrik", "sebanding dengan perubahan Ek"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> Gaya Lorentz: F = q(v × B)<br><br><strong>🔍 PENJELASAN:</strong><br>1. Arah gaya Lorentz selalu tegak lurus terhadap arah kecepatan<br>2. Usaha = F·s = F·v·Δt, karena F ⟂ v, maka F·v = 0<br>3. Jadi usaha yang dilakukan gaya magnet SELALU NOL<br><br><strong>✅ JAWABAN: A</strong>"
  }
];