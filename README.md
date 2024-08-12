# AttendanceApp

AttendanceApp adalah aplikasi berbasis web untuk mencatat presensi (kehadiran) menggunakan Node.js, Express, dan ReactJs Aplikasi ini diperuntukan untuk perusahaan yang ingin karyawannya dalam melakukan presensi ingin fleksibel jika karyawannya sedang remote.

## Fitur Backend

1. Manajemen Perusahaan

   - Dapatkan Semua Perusahaan: Mengambil data semua perusahaan yang terdaftar dalam sistem.
   - Dapatkan Perusahaan Berdasarkan ID: Mengambil data perusahaan tertentu berdasarkan ID.
   - Buat Perusahaan Baru: Menambahkan data perusahaan baru ke dalam sistem.
   - Perbarui Data Perusahaan: Memperbarui informasi perusahaan yang ada berdasarkan ID.
   - Hapus Perusahaan: Menghapus data perusahaan dari sistem.

2. Manajemen Pengguna

   - Dapatkan Semua Pengguna: Mengambil data semua pengguna yang terdaftar.
   - Dapatkan Pengguna Berdasarkan ID: Mengambil data pengguna tertentu berdasarkan ID.
   - Buat Pengguna Baru: Mendaftarkan pengguna baru dengan informasi seperti username, email, role, dll.
   - Perbarui Data Pengguna: Memperbarui informasi pengguna yang ada.
   - Hapus Pengguna: Menghapus pengguna dari sistem.
   - Autentikasi Pengguna: Memverifikasi kredensial pengguna dan mengeluarkan token JWT untuk sesi.
   - Dapatkan Profil Pengguna: Mengambil informasi profil pengguna yang sedang masuk.

3. Manajemen Kehadiran

   - Dapatkan Semua Kehadiran: Mengambil data kehadiran berdasarkan ID pengguna.
   - Dapatkan Kehadiran Berdasarkan ID: Mengambil data kehadiran tertentu berdasarkan ID.
   - Buat Kehadiran Baru: Mencatat kehadiran baru untuk pengguna yang sedang masuk.
   - Perbarui Data Kehadiran: Memperbarui informasi kehadiran tertentu.
   - Hapus Kehadiran: Menghapus catatan kehadiran dari sistem.

4. Penjadwalan Kehadiran

   - Dapatkan Semua Jadwal Kehadiran: Mengambil semua jadwal kehadiran yang berlaku untuk pengguna pada hari tertentu.
   - Dapatkan Jadwal Kehadiran Berdasarkan ID: Mengambil data jadwal kehadiran tertentu berdasarkan ID.
   - Buat Jadwal Kehadiran Baru: Menambahkan jadwal kehadiran baru ke sistem.
   - Perbarui Jadwal Kehadiran: Memperbarui informasi jadwal kehadiran tertentu.
   - Hapus Jadwal Kehadiran: Menghapus jadwal kehadiran dari sistem.

5. Manajemen Sesi Pengguna
   - Dapatkan Semua Sesi Pengguna: Mengambil data semua sesi pengguna yang terdaftar.
   - Dapatkan Sesi Pengguna Berdasarkan ID: Mengambil data sesi pengguna tertentu berdasarkan ID.
   - Buat Sesi Pengguna Baru: Mencatat sesi pengguna baru saat mereka login.
   - Perbarui Sesi Pengguna: Memperbarui informasi sesi pengguna tertentu.
   - Hapus Sesi Pengguna: Menghapus data sesi pengguna dari sistem.

## Fitur Frontend

1. Halaman Utama (Home)

   - Jam Real-Time: Menampilkan jam real-time dengan format yang sesuai dengan zona waktu Asia/Jakarta.
   - Kehadiran Langsung: Menampilkan jadwal kehadiran pengguna untuk hari ini dan memberikan opsi untuk melakukan Clock In dan Clock Out.

2. Halaman Tentang (About)

   - Profil Pengguna: Menampilkan informasi profil pengguna yang meliputi username, email, ID perusahaan, role, nomor telepon, dan status akun.

3. Halaman Login

   - Form Login: Pengguna dapat masuk ke sistem dengan memasukkan username dan password. Setelah berhasil login, pengguna akan diarahkan ke halaman utama.

4. Halaman Registrasi

   - Form Registrasi: Pengguna baru dapat mendaftar dengan memasukkan informasi seperti username, email, password, ID perusahaan, role, dan nomor telepon. Setelah berhasil registrasi, pengguna akan diarahkan ke halaman login.

5. Halaman Profil Pengguna

   - Lihat Profil: Menampilkan informasi lengkap mengenai profil pengguna termasuk tanggal pembuatan akun dan tanggal terakhir kali diperbarui.

6. Kehadiran Langsung (Live Attendance)

   - Lihat Jadwal Kehadiran: Menampilkan jadwal kehadiran pengguna yang sedang aktif.
   - Catat Kehadiran: Pengguna dapat melakukan Clock In dan Clock Out sesuai dengan jadwal yang telah ditentukan.
   - Riwayat Kehadiran: Menampilkan riwayat kehadiran pengguna berdasarkan catatan Clock In dan Clock Out.

7. Navigasi dan Rute
   - Navigasi Antar Halaman: Menyediakan navigasi antar halaman melalui Navbar yang mencakup tautan ke halaman Home, About, Login, dan Register.
   - Rute Dinamis: Mengatur rute dinamis menggunakan React Router untuk mempermudah perpindahan antar halaman.

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

1. Node.js dan npm

   - Pastikan Anda telah menginstal Node.js dan npm (Node Package Manager). Aplikasi ini menggunakan Node.js sebagai runtime environment.

2. MySQL
   - Pastikan MySQL telah diinstal dan berjalan di sistem Anda. Anda bisa mengunduhnya dari MySQL Official Website.
   - Buat database baru di MySQL yang akan digunakan oleh aplikasi backend.

## Persiapan Direktori Backend

1. Clone repositori ini:

```bash
   git clone https://github.com/farhanhunter/FSW-47-Gold-Kelvin-Desman-Farhan-Adi-Saputra.git
```

2. Install Dependencies
   - Navigasikan ke direktori backend dan jalankan perintah berikut untuk menginstal dependencies yang dibutuhkan:

```bash
cd path/to/backend
npm install
```

3. Menjalankan Backend
   - Jalankan backend server di port 3000 (atau port lain yang Anda pilih):

```bash
npm start
```

## Persiapan Direktori Frontend

1. Install Dependencies
   - Navigasikan ke direktori frontend dan jalankan perintah berikut untuk menginstal dependencies yang dibutuhkan:

```bash
cd path/to/frontend
npm install
```

2. Menjalankan Frontend
   - Jalankan frontend server di port 3001 (atau port lain yang Anda pilih):

```bash
npm start
```

## Menghubungkan Backend dan Frontend

- Pastikan frontend dikonfigurasi untuk mengakses backend API yang berjalan di http://localhost:3000. Ini biasanya dilakukan dengan mengatur URL backend dalam file konfigurasi atau environment variable di frontend.

## File Environment (.env)

1. Buat file .env di direktori backend jika belum ada dan tambahkan konfigurasi yang diperlukan seperti DATABASE_URL, JWT_SECRET, atau variabel lain yang dibutuhkan oleh aplikasi backend.

## Konfigurasi MySQL

1. Buat Database
   - Buat database baru untuk aplikasi ini, misalnya:

```bash
CREATE DATABASE nama_database;
```

2. File .env
   - Buat atau perbarui file .env di direktori backend untuk menyertakan detail koneksi ke database MySQL Anda. Contoh konfigurasi .env:

```bash
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=nama_database
JWT_SECRET=your_jwt_secret
```

## Menjalankan Aplikasi dengan MySQL

1. Migrasi dan Seed Database

- Jika aplikasi ini menggunakan migrasi, jalankan migrasi untuk membuat tabel-tabel di database:

```bash
npx sequelize db:migrate
```

- Jika ada seed data yang perlu dimasukkan, jalankan:

```bash
npx sequelize db:seed:all
```

2. Jalankan Backend

- Setelah konfigurasi database sudah benar dan migrasi selesai, Anda bisa menjalankan backend server:

```bash
npm start
```

2. Buka browser dan akses http://localhost:3001/presensi untuk melihat aplikasi.

## Penjelasan Singkat Struktur Direktori

1. Backend (ATTENDANCE-API)

- middleware/: Berisi middleware seperti autentikasi JWT.
- migrations/: Berisi file migrasi untuk manajemen database.
- models/: Berisi model database untuk entitas seperti kehadiran, jadwal kehadiran, perusahaan, pengguna, dan sesi pengguna.
- routes/: Berisi file rute untuk berbagai entitas dalam aplikasi.
- seeders/: Berisi data awal yang bisa disuntikkan ke database.
- app.js: File utama untuk konfigurasi aplikasi dan menghubungkan semua rute.

2. Frontend (MY-FRONTEND-PROJECT)

- src/: Berisi semua sumber kode frontend.
- assets/: Menyimpan aset statis seperti gambar.
- components/: Berisi komponen yang dapat digunakan ulang dalam berbagai halaman.
- pages/: Berisi halaman utama aplikasi seperti halaman login, register, dan profil pengguna.
- App.js: Komponen utama yang menghubungkan semua rute dan halaman.

## Struktur Direktori Backend

- Here’s the structure of your project from the root directory:

```bash
ATTENDANCE-API/
│
├── middleware/
│   └── authenticateJWT.js
│
├── migrations/
│   └── [migrations_files_here]
│
├── models/
│   ├── attendance.js
│   ├── attendanceschedule.js
│   ├── company.js
│   ├── index.js
│   ├── user.js
│   └── usersession.js
│
├── routes/
│   ├── attendanceRoutes.js
│   ├── attendanceScheduleRoutes.js
│   ├── companyRoutes.js
│   ├── userRoutes.js
│   └── userSessionRoutes.js
│
├── seeders/
│   └── [seeder_files_here]
│
├── .env
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
└── README.md
```

## Struktur Direktori Frontend

- Here’s the structure of your project from the root directory:

```bash
MY-FRONTEND-PROJECT/
│
├── node_modules/
│   └── [node_modules_files_here]
│
├── public/
│   └── [public_files_here]
│
├── src/
│   ├── assets/
│   │   └── [assets_files_here]
│   │
│   ├── components/
│   │   └── [component_files_here]
│   │
│   ├── pages/
│   │   ├── About.js
│   │   ├── ClockPage.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── UserProfile.js
│   │
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .gitignore
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

```bash
Dengan penambahan ini, README.md Anda akan mencerminkan penggunaan Sequelize ORM dan MySQL, serta memberikan petunjuk yang lebih rinci tentang cara mengkonfigurasi dan menjalankan aplikasi.
```
