// ========== SOAL LATIHAN ZAT & KALOR (16 SOAL) ==========
window.SOAL_ZATKALOR = [
  {
    id: "zk_01", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "400 g air 40°C dicampur 100 g air 30°C. Suhu akhir = ….",
    opts: ["13°C", "26°C", "36°C", "38°C", "44°C"],
    kunci: "D",
    pem: "<strong>💡 KONSEP:</strong> Asas Black: Kalor lepas = kalor terima<br><br><strong>🔍 LANGKAH:</strong><br>1. m₁·c·ΔT₁ = m₂·c·ΔT₂ (c air sama, bisa dicoret)<br>2. 400(40 - T) = 100(T - 30)<br>3. 16000 - 400T = 100T - 3000<br>4. 19000 = 500T → T = 38°C<br><br><strong>✅ JAWABAN: D</strong>"
  },
  {
    id: "zk_02", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Gas ideal volume tetap, suhu meningkat. Yang meningkat: I. tekanan, II. Ek rata-rata, III. jumlah mol",
    opts: ["hanya I", "I dan II", "II dan III", "hanya II", "hanya III"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Hukum Gay-Lussac: P ∝ T (V tetap), Ek = (3/2)kT, mol tetap karena wadah tertutup<br><br><strong>✅ JAWABAN: B (I dan II)</strong>"
  },
  {
    id: "zk_03", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Volume gas diperkecil, suhu konstan. Apa yang terjadi?",
    opts: ["Ek molekul bertambah", "Ek molekul berkurang", "massa gas berkurang", "volume gas bertambah", "volume gas berkurang"],
    kunci: "E",
    pem: "<strong>💡 KONSEP:</strong> Proses isotermal: T konstan → Ek konstan. Soal menyatakan volume diperkecil, jadi volume berkurang.<br><br><strong>✅ JAWABAN: E</strong>"
  },
  {
    id: "zk_04", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Pompa panas menyerap 90 J, melakukan kerja 60 J. Panas dikirim ke rumah = ….",
    opts: ["5400 J", "150 J", "30 J", "1,5 J", "0,67 J"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Hukum I Termodinamika: Q_masuk + W = Q_keluar (untuk pompa panas)<br><br><strong>🔍 LANGKAH:</strong><br>1. Q_masuk = 90 J, W_masuk = 60 J<br>2. Q_dikirim = 90 + 60 = 150 J<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "zk_05", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Molekul gas meningkatkan tabrakan per satuan waktu pada volume konstan. Yang juga meningkat: I. tekanan, II. suhu, III. jumlah mol",
    opts: ["hanya I", "hanya II", "I dan II", "II dan III", "I dan III"],
    kunci: "C",
    pem: "<strong>💡 KONSEP:</strong> Volume tetap, tabrakan meningkat berarti suhu naik, suhu naik → tekanan naik. Jumlah mol tetap.<br><br><strong>✅ JAWABAN: C (I dan II)</strong>"
  },
  {
    id: "zk_06", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Grafik suhu vs waktu. Interval perubahan dari cair ke gas adalah ….",
    opts: ["AB", "AC", "BC", "CD", "DE"],
    kunci: "D",
    pem: "<strong>💡 KONSEP:</strong> Perubahan fase cair ke gas (menguap) terjadi pada suhu konstan (titik didih). Pada grafik, bagian mendatar setelah fase cair.<br><br><strong>✅ JAWABAN: D (CD)</strong>"
  },
  {
    id: "zk_07", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Gas ideal dalam wadah tertutup, suhu diubah dari T menjadi 4T. Pasangan tekanan dan volume yang mungkin adalah ….",
    opts: ["P dan V", "P dan V/2", "4P dan 4V", "4P dan V", "P/4 dan V"],
    kunci: "D",
    pem: "<strong>💡 KONSEP:</strong> PV = nRT, nR konstan. Jika suhu menjadi 4T, maka PV harus menjadi 4 kali.<br><br><strong>✅ JAWABAN: D (4P × V = 4PV)</strong>"
  },
  {
    id: "zk_08", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Gas menyerap 300 J panas, dilakukan kerja 100 J terhadap gas, lalu gas melakukan kerja 50 J. ΔU = ….",
    opts: ["450 J", "400 J", "350 J", "200 J", "100 J"],
    kunci: "C",
    pem: "<strong>💡 KONSEP:</strong> Hukum I Termodinamika: ΔU = Q + W_masuk - W_keluar<br><br><strong>🔍 LANGKAH:</strong><br>1. Q = +300 J<br>2. W_masuk = +100 J<br>3. W_keluar = 50 J<br>4. ΔU = 300 + 100 - 50 = 350 J<br><br><strong>✅ JAWABAN: C</strong>"
  },
  {
    id: "zk_09", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Besi 2 kg (c=200 J/kg°C, 120°C) dimasukkan ke cairan 4 kg (c=600 J/kg°C, 20°C). Suhu kesetimbangan = ….",
    opts: ["24°C", "34°C", "48°C", "68°C", "100°C"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Asas Black: m₁c₁ΔT₁ = m₂c₂ΔT₂<br><br><strong>🔍 LANGKAH:</strong><br>1. 2×200×(120-T) = 4×600×(T-20)<br>2. 400(120-T) = 2400(T-20)<br>3. 48000 - 400T = 2400T - 48000<br>4. 96000 = 2800T → T ≈ 34,3°C ≈ 34°C<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "zk_10", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Dari soal sebelumnya, jika sebagian panas hilang ke lingkungan, suhu setimbang akan ….",
    opts: ["lebih rendah", "lebih tinggi", "kalor jenis cairan lebih rendah", "kalor jenis cairan lebih tinggi", "panas lebih banyak diserap"],
    kunci: "A",
    pem: "<strong>💡 KONSEP:</strong> Jika panas hilang ke lingkungan, berarti tidak semua kalor dari besi diserap cairan, sehingga suhu akhir lebih rendah.<br><br><strong>✅ JAWABAN: A</strong>"
  },
  {
    id: "zk_11", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Yang BUKAN asumsi gas ideal monoatomik adalah ….",
    opts: ["atom terus bergerak", "tumbukan atom menciptakan tekanan", "tumbukan elastik", "satu-satunya gaya akibat tumbukan", "volume atom diabaikan"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Tekanan gas ideal disebabkan oleh tumbukan molekul dengan dinding wadah, BUKAN tumbukan antarmolekul.<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "zk_12", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Grafik P-T untuk volume tetap adalah ….",
    opts: ["Garis horizontal", "Garis miring ke atas", "Garis miring ke bawah", "Kurva parabola", "Hiperbola"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Volume tetap → Hukum Gay-Lussac: P ∝ T (garis lurus melalui titik asal, miring ke atas)<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "zk_13", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Campuran dua gas ideal massa molekul berbeda pada kesetimbangan termal. Pernyataan BENAR adalah ….",
    opts: ["Ek ringan < Ek berat", "Ek ringan > Ek berat", "v_rms ringan < v_rms berat", "v_rms ringan = v_rms berat", "v_rms ringan > v_rms berat"],
    kunci: "E",
    pem: "<strong>💡 KONSEP:</strong> Suhu sama → Ek rata-rata sama. Ek = ½mv² → v ∝ 1/√m. Molekul ringan memiliki v_rms lebih besar.<br><br><strong>✅ JAWABAN: E</strong>"
  },
  {
    id: "zk_14", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Efisiensi mesin 30%, 800 J panas diambil tiap siklus. Panas dikeluarkan = ….",
    opts: ["120 J", "240 J", "280 J", "400 J", "560 J"],
    kunci: "E",
    pem: "<strong>💡 KONSEP:</strong> Efisiensi η = W/Q_H, Q_H = Q_C + W<br><br><strong>🔍 LANGKAH:</strong><br>1. W = η × Q_H = 0,3 × 800 = 240 J<br>2. Q_C = Q_H - W = 800 - 240 = 560 J<br><br><strong>✅ JAWABAN: E</strong>"
  },
  {
    id: "zk_15", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Sebanyak 500 g es -10°C dipanaskan hingga menjadi uap 110°C. Kalor total = … (c_es=2100, c_air=4200, c_uap=2010, L_es=336000, L_uap=2260000 J/kg)",
    opts: ["~1,2 MJ", "~1,5 MJ", "~1,8 MJ", "~2,1 MJ", "~2,4 MJ"],
    kunci: "B",
    pem: "<strong>💡 KONSEP:</strong> Kalor total = Q_es naik + Q_lebur + Q_air naik + Q_uap + Q_uap naik<br><br><strong>🔍 LANGKAH:</strong><br>1. Q1 = 0,5×2100×10 = 10.500 J<br>2. Q2 = 0,5×336.000 = 168.000 J<br>3. Q3 = 0,5×4200×100 = 210.000 J<br>4. Q4 = 0,5×2.260.000 = 1.130.000 J<br>5. Q5 = 0,5×2010×10 = 10.050 J<br>6. Total ≈ 1.528.550 J ≈ 1,5 MJ<br><br><strong>✅ JAWABAN: B</strong>"
  },
  {
    id: "zk_16", tag: "Zat & Kalor", topik: "Zat & Kalor", tahun: "Latihan Topik",
    txt: "Sebuah mesin Carnot bekerja antara reservoir 527°C dan 27°C. Efisiensi mesin adalah ….",
    opts: ["25%", "33,3%", "50%", "62,5%", "75%"],
    kunci: "D",
    pem: "<strong>💡 KONSEP:</strong> Efisiensi Carnot: η = 1 - T_c/T_h<br><br><strong>🔍 LANGKAH:</strong><br>1. T_h = 527 + 273 = 800 K, T_c = 27 + 273 = 300 K<br>2. η = 1 - 300/800 = 1 - 0,375 = 0,625 = 62,5%<br><br><strong>✅ JAWABAN: D</strong>"
  }
];