// Tipe Data String
const namaMasakan1 = "Rendang";
const namaMasakan2 = "Kue Klepon";
const namaMasakan3 = "Sambal Matah";

// Tipe Data Boolean
let isSpicy = true;
let isSweet = false;

// Tipe Data Number
const jumlahMasakan = 3;
const hargaRendang = 30000; // dalam Rupiah

// Tipe Data Array
const masakanIndonesia = [namaMasakan1, namaMasakan2, namaMasakan3,];

// Tipe Data BigInt (untuk harga dalam nilai yang sangat besar)
const estimasiPendapatan = BigInt(1e9); // dalam Rupiah

// Tipe Data Undefined (nilai awal belum diatur)
let region;

// Tipe Data Null (nilai kosong yang sudah ditetapkan)
let favoriteDish = null;

// Tipe Data Object
const rendang = {
    nama: "Rendang",
    jenis: "Daging",
    asal: "Sumatera Barat",
    harga: hargaRendang,
    pedas: true,
    manis: false
};

const kueKlepon = {
    nama: "Kue Klepon",
    jenis: "Kue Tradisional",
    asal: "Jawa",
    pedas: false,
    manis: true
};

const sambalMatah = {
    nama: "Sambal Matah",
    jenis: "Sambal",
    asal: "Bali",
    pedas: true,
    manis: false
};

// Tipe Data Symbol
const uniqueId = Symbol("id");

// Menggunakan type of untuk mengecek tipe data
console.log("=== Tipe Data Masakan ===");
console.log("Nama Masakan:", namaMasakan1, "| Tipe Data:", typeof namaMasakan1);
console.log("Harga Rendang:", hargaRendang, "| Tipe Data:", typeof hargaRendang);
console.log("Array Masakan:", masakanIndonesia, "| Tipe Data:", typeof masakanIndonesia);
console.log("Estimasi Pendapatan:", estimasiPendapatan, "| Tipe Data:", typeof estimasiPendapatan);
console.log("Nilai Undefined region:", region, "| Tipe Data:", typeof region);
console.log("Nilai Null favoriteDish:", favoriteDish, "| Tipe Data:", typeof favoriteDish);
console.log("Unique ID Symbol:", uniqueId, "| Tipe Data:", typeof uniqueId);

// Menggunakan operator logika AND, OR, NOT
console.log("=== Operator Logika ===");
console.log("Apakah Rendang Pedas dan Tidak Manis?", rendang.pedas && !rendang.manis); // true
console.log("Apakah Kue Klepon Pedas atau Manis?", kueKlepon.pedas || kueKlepon.manis); // true
console.log("Apakah Sambal Matah bukan Manis?", !sambalMatah.manis); // true

// Menampilkan objek masakan
console.log("=== Objek Masakan ===");
console.log("Detail Rendang:", rendang);
console.log("Detail Kue Klepon:", kueKlepon);
console.log("Detail Sambal Matah:", sambalMatah);