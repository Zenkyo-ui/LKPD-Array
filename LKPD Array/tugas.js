// Data awal
let nilaiSiswa = [80, 75, 90, 60, 85, 70];

// Tampilkan nilai siswa
console.log("Nilai siswa:", nilaiSiswa);

// Hitung rata-rata
let total = nilaiSiswa.reduce((sum, n) => sum + n, 0);
let rata = total / nilaiSiswa.length;
console.log("Rata-rata nilai:", rata);

// Tampilkan nilai >= 75
let nilaiBagus = nilaiSiswa.filter(n => n >= 75);
console.log("Nilai >= 75:", nilaiBagus);

// Tambah nilai baru
nilaiSiswa.push(95);
console.log("Setelah tambah nilai:", nilaiSiswa);

// Hapus nilai tertentu (misal nilai ke-3 -> index 2)
nilaiSiswa.splice(2, 1);
console.log("Setelah hapus nilai index ke-2:", nilaiSiswa);

// Tampilkan hasil akhir
console.log("Data akhir:", nilaiSiswa);

// Tambahan contoh penggunaan pop() dan filter()

// pop() = ngambil dan ngapus elemen terakhir array
let nilaiTerakhir = nilaiSiswa.pop();
console.log("Nilai terakhir yang dihapus:", nilaiTerakhir);
console.log("Setelah pop:", nilaiSiswa);

// filter() = nyaring data sesuai kondisi
// Misal: tampilkan nilai yang di bawah rata-rata
let nilaiRata = nilaiSiswa.reduce((a, b) => a + b, 0) / nilaiSiswa.length;
let nilaiDibawahRata = nilaiSiswa.filter(n => n < nilaiRata);
console.log("Nilai di bawah rata-rata:", nilaiDibawahRata);

// Misal lain: filter nilai genap
let nilaiGenap = nilaiSiswa.filter(n => n % 2 === 0);
console.log("Nilai genap:", nilaiGenap);

/*
tugas

    1. Mengapa kita memerlukan array?
    Karena kalau nyimpen banyak data satu-satu tuh ribet, bro. Nah, array itu kayak wadah besar buat nyimpen banyak nilai dalam satu variabel aja. Jadi lebih gampang dikelola dan diakses.


    2. Bagaimana array menghemat variabel?
    Ya simpel aja, daripada bikin variabel satu-satu buat tiap data, mending satu array isinya banyak data sekaligus. Hemat tempat, rapi, dan ga bikin pusing pas mau ubah atau nambah data.


    3. Apa dampak data bertambah pada array?
    Kalau datanya makin banyak, array bakal makin panjang. Tapi karena JavaScript array-nya dinamis, bisa nambah data kapan aja. Cuma ya makin besar datanya, prosesnya bisa agak berat dikit.


    4. Strategi menampilkan data tertentu?
    Bisa pakai loop buat nampilin semuanya, atau pakai filter() buat nampilin yang sesuai kondisi. Misal mau nampilin nilai di atas 75, tinggal nilai.filter(n => n >= 75).


    5. Kesalahan umum dalam penggunaan array?
    Biasanya salah akses indeks, lupa tanda kurung, atau salah pake metode kayak splice() dan pop(). Kadang juga ada yang lupa kalau index itu mulai dari 0, bukan 1

*/