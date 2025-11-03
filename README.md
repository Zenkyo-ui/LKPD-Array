# jawaban array

# 1. Mengapa kita memerlukan array?

Array diperlukan karena berfungsi untuk menyimpan banyak data dalam satu variabel. Dengan adanya array, proses pengelolaan data menjadi lebih efisien dan terstruktur, terutama ketika jumlah datanya banyak.
Contoh:
```Js
let nilai = [80, 75, 90, 60];
console.log(nilai); // Output: [80, 75, 90, 60]
```
Tanpa array, kita harus membuat banyak variabel seperti nilai1, nilai2, dan seterusnya, yang tentu kurang efisien.


---

# 2. Bagaimana array menghemat variabel?

Array menghemat penggunaan variabel karena seluruh data dapat disimpan dalam satu wadah (variabel array). Hal ini memudahkan pengelolaan dan mengurangi jumlah variabel yang dibuat.
Contoh:
```js
let nama = ["Budi", "Siti", "Rian"];
console.log(nama[1]); // Output: Siti
```
Kita cukup menggunakan satu variabel nama untuk menampung beberapa data sekaligus.


---

# 3. Apa dampak data bertambah pada array?

Ketika data bertambah, array akan menyesuaikan ukurannya (bersifat dinamis pada JavaScript). Hal ini memudahkan penambahan data tanpa perlu membuat variabel baru. Namun, semakin besar ukuran array, proses manipulasi datanya bisa memakan waktu lebih lama.
Contoh:
```js
let angka = [1, 2, 3];
angka.push(4);
console.log(angka); // Output: [1, 2, 3, 4]
```
Metode push() digunakan untuk menambahkan data baru ke dalam array.


---

# 4. Strategi menampilkan data tertentu

Untuk menampilkan data tertentu, dapat digunakan perulangan (for, forEach) atau metode seperti filter() untuk menyeleksi data sesuai kriteria.
Contoh:
```js
let nilai = [80, 60, 90, 70, 85];
let nilaiLulus = nilai.filter(n => n >= 75);
console.log(nilaiLulus); // Output: [80, 90, 85]
```
Metode filter() akan menghasilkan array baru yang berisi data yang memenuhi kondisi tertentu.


---

# 5. Kesalahan umum dalam penggunaan array

Kesalahan yang sering terjadi dalam penggunaan array antara lain:

Salah mengakses indeks (lupa bahwa indeks dimulai dari 0).

Menghapus atau menambah data dengan metode yang tidak sesuai.

Lupa menuliskan tanda kurung saat memanggil metode array.


Contoh:
```js
let data = [10, 20, 30, 40];
data.splice(1, 1); // Menghapus data pada indeks ke-1 (20)
console.log(data); // Output: [10, 30, 40]
```
Jika tidak hati-hati, data yang dihapus bisa salah karena salah indeks.
