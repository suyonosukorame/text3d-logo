# 🖼️ 3D Text Logo Generator

Sebuah aplikasi web sederhana untuk membuat logo teks 3D menggunakan [Three.js](https://threejs.org/). Anda dapat menyesuaikan teks, material, pencahayaan, dan mengekspor hasil akhirnya sebagai gambar PNG.


*(Anda bisa mengganti gambar ini dengan screenshot atau GIF dari proyek Anda)*

## ✨ Fitur

-   **Render Teks 3D**: Merender teks dalam ruang 3D dengan geometri yang dapat disesuaikan.
-   **Kode Modular**: Proyek dibagi menjadi modul-modul logis untuk pencahayaan, pembuatan teks, dan aplikasi utama.
-   **Ekspor ke PNG**: Simpan tampilan saat ini dengan mudah sebagai gambar PNG berkualitas tinggi.
-   **Pintasan Keyboard**: Tekan tombol `S` untuk menyimpan hasil karya Anda dengan cepat.
-   **Desain Responsif**: Ukuran kanvas secara otomatis menyesuaikan dengan jendela browser.

## 🚀 Memulai

Untuk menjalankan proyek ini di komputer lokal Anda, Anda memerlukan server web lokal. Hal ini karena proyek menggunakan ES Modules, yang memiliki batasan keamanan saat dijalankan langsung dari sistem file lokal (`file:///...`).

### Prasyarat

-   Browser web modern.
-   Node.js (opsional, untuk menggunakan `npx serve`).

### Instalasi

1.  **Clone repositori ini:**
    ```sh
    git clone https://github.com/username-anda/text3d-logo.git
    ```

2.  **Masuk ke direktori proyek:**
    ```sh
    cd text3d-logo
    ```

3.  **Jalankan server lokal.** Cara termudah adalah dengan menggunakan `npx`:
    ```sh
    npx serve
    ```
    Atau, jika Anda memiliki Python:
    ```sh
    # Untuk Python 3
    python -m http.server
    ```

4.  **Buka browser Anda** dan kunjungi URL yang diberikan oleh server lokal Anda (biasanya `http://localhost:3000` atau `http://localhost:8000`).

## 🛠️ Penggunaan

-   Teks 3D akan ditampilkan di layar.
-   Untuk menyimpan gambar, klik tombol **⬇️ Save PNG** di pojok kiri atas.
-   Sebagai alternatif, Anda dapat menekan tombol **`S`** pada keyboard untuk mengunduh gambar. Notifikasi akan muncul untuk mengonfirmasi bahwa file PNG telah diekspor.

## 🎨 Kustomisasi

-   **Konten & Gaya Teks**: Untuk mengubah string teks, font, ukuran, warna, dan properti material, Anda perlu memodifikasi kode di dalam file `text3d.js`.
-   **Pencahayaan**: Untuk menyesuaikan pencahayaan (misalnya, warna, intensitas, posisi), edit kode di dalam file `lights.js`.
-   **Animasi**: Untuk menambah atau mengubah animasi (seperti rotasi), modifikasi fungsi `animate()` di dalam file `app.js`.

## 📜 Lisensi

Proyek ini dilisensikan di bawah Lisensi ISC. Lihat file `package.json` untuk detail lebih lanjut.
