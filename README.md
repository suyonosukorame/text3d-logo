# 🖼️ Poster Undangan Ilmiah dengan Teks 3D

Sebuah aplikasi web untuk membuat poster undangan digital dengan elemen judul teks 3D yang dinamis menggunakan [Three.js](https://threejs.org/).


*(Gantilah gambar ini dengan screenshot poster yang sudah jadi)*

## ✨ Fitur

-   **Render Teks 3D**: Merender teks dalam ruang 3D dengan geometri yang dapat disesuaikan.
-   **Layout Poster**: Informasi acara (pemateri, jadwal, dll.) ditampilkan dengan jelas menggunakan HTML & CSS.
-   **Kode Modular**: Proyek dibagi menjadi modul-modul logis untuk pencahayaan, pembuatan teks, dan aplikasi utama.
-   **Ekspor Teks 3D**: Simpan elemen teks 3D saja sebagai gambar PNG transparan.
-   **Pintasan Keyboard**: Tekan tombol `S` untuk menyimpan hasil karya Anda dengan cepat.
-   **Desain Responsif**: Ukuran kanvas secara otomatis menyesuaikan dengan jendela browser.

## 🚀 Memulai

Untuk menjalankan proyek ini di komputer lokal Anda, Anda memerlukan server web lokal. Hal ini karena proyek menggunakan ES Modules yang memiliki batasan keamanan saat dijalankan langsung dari sistem file (`file:///...`).

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
-   Untuk menyimpan **hanya teks 3D-nya saja** (dengan latar belakang transparan), klik tombol **⬇️ Save 3D Text** atau tekan tombol `S`.
-   Untuk menyimpan **keseluruhan poster**, gunakan fitur *screenshot* pada browser atau sistem operasi Anda.

## 🎨 Kustomisasi

-   **Konten & Gaya Teks 3D**: Untuk mengubah string teks, font, ukuran, dan properti material 3D, modifikasi file `text3d.js`.
-   **Konten Poster**: Untuk mengubah detail acara seperti pemateri, jadwal, dan tautan, edit file `index.html`.
-   **Pencahayaan**: Untuk menyesuaikan pencahayaan (misalnya, warna, intensitas, posisi), edit kode di dalam file `lights.js`.
-   **Animasi**: Untuk menambah atau mengubah animasi (seperti rotasi), modifikasi fungsi `animate()` di dalam file `app.js`.
-   **Tampilan Poster**: Untuk mengubah warna, font, dan tata letak poster, modifikasi file `style.css`.

## 📜 Lisensi

Proyek ini dilisensikan di bawah Lisensi ISC. Lihat file `package.json` untuk detail lebih lanjut.
