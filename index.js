/**
 * Main Application - CLI Interface
 * File ini adalah entry point aplikasi
 * 
 * TODO: Implementasikan CLI interface yang interaktif dengan menu:
 * 1. Tambah Siswa Baru
 * 2. Lihat Semua Siswa
 * 3. Cari Siswa (by ID)
 * 4. Update Data Siswa
 * 5. Hapus Siswa
 * 6. Tambah Nilai Siswa
 * 7. Lihat Top 3 Siswa
 * 8. Keluar
 */

import readlineSync from 'readline-sync';
import Student from './src/Student.js';
import StudentManager from './src/StudentManager.js';

// Inisialisasi StudentManager
const manager = new StudentManager();

/**
 * Menampilkan menu utama
 */
function displayMenu() {
  console.log('\n=================================');
  console.log('SISTEM MANAJEMEN NILAI SISWA');
  console.log('=================================');
  console.log('1. Tambah Siswa Baru');
  console.log('2. Lihat Semua Siswa');
  console.log('3. Cari Siswa');
  console.log('4. Update Data Siswa');
  console.log('5. Hapus Siswa');
  console.log('6. Tambah Nilai Siswa');
  console.log('7. Lihat Top 3 Siswa');
  console.log('8. Keluar');
  console.log('=================================');
}

/**
 * Handler untuk menambah siswa baru
 * TODO: Implementasikan function ini
 * - Minta input: ID, Nama, Kelas
 * - Buat object Student baru
 * - Tambahkan ke manager
 * - Tampilkan pesan sukses/gagal
 */
function addNewStudent() {
  // Implementasi di sini
  console.log('\n--- Tambah Siswa Baru ---');
  // TODO: Lengkapi implementasi
  const id = readlineSync.question('Masukkan ID Siswa: ');
  const name = readlineSync.question('Masukkan Nama Siswa: ');
  const className = readlineSync.question('Masukkan Kelas Siswa (misal 10A): ');

  if (!id || !name || !className) {
    console.log("Semua field harus diisi!");
    return;
  }

  const newStudent = new Student(id, name, className);
  manager.addStudent(newStudent);
}

/**
 * Handler untuk melihat semua siswa
 * TODO: Implementasikan function ini
 * - Panggil method displayAllStudents dari manager
 * - Jika tidak ada siswa, tampilkan pesan
 */
function viewAllStudents() {
  // Implementasi di sini
  console.log('\n--- Daftar Semua Siswa ---');
  // TODO: Lengkapi implementasi
  manager.displayAllStudents();
}

/**
 * Handler untuk mencari siswa berdasarkan ID
 * TODO: Implementasikan function ini
 * - Minta input ID
 * - Cari siswa menggunakan manager
 * - Tampilkan info siswa jika ditemukan
 */
function searchStudent() {
  // Implementasi di sini
  console.log('\n--- Cari Siswa ---');
  // TODO: Lengkapi implementasi
  const id = readlineSync.question('Masukkan ID Siswa: ');

  const student = manager.findStudent(id);

  if (!student) {
    console.log("Siswa tidak ditemukan.");
  } else {
    student.displayInfo();
  }
}

/**
 * Handler untuk update data siswa
 * TODO: Implementasikan function ini
 * - Minta input ID siswa
 * - Tampilkan data saat ini
 * - Minta input data baru (nama, kelas)
 * - Update menggunakan manager
 */
function updateStudent() {
  // Implementasi di sini
  console.log('\n--- Update Data Siswa ---');
  // TODO: Lengkapi implementasi
  const id = readlineSync.question('Masukkan ID Siswa yang akan diupdate: ');

  const student = manager.findStudent(id);
  if (!student) {
    console.log("Siswa tidak ditemukan.");
    return;
  }

  console.log("\nData saat ini:");
  student.displayInfo();

  const newName = readlineSync.question('Masukkan Nama Baru (kosong = tidak diubah): ');
  const newClass = readlineSync.question('Masukkan Kelas Baru (kosong = tidak diubah): ');

  const data = {};
  if (newName) data.name = newName;
  if (newClass) data.class = newClass;

  manager.updateStudent(id, data);
}

/**
 * Handler untuk menghapus siswa
 * TODO: Implementasikan function ini
 * - Minta input ID siswa
 * - Konfirmasi penghapusan
 * - Hapus menggunakan manager
 */
function deleteStudent() {
  // Implementasi di sini
  console.log('\n--- Hapus Siswa ---');
  // TODO: Lengkapi implementasi
  const id = readlineSync.question('Masukkan ID Siswa yang akan dihapus: ');

  const confirm = readlineSync.question('Yakin ingin menghapus? (y/n): ');

  if (confirm.toLowerCase() === 'y') {
    manager.removeStudent(id);
  } else {
    console.log("Penghapusan dibatalkan.");
  }
}

/**
 * Handler untuk menambah nilai siswa
 * TODO: Implementasikan function ini
 * - Minta input ID siswa
 * - Tampilkan data siswa
 * - Minta input mata pelajaran dan nilai
 * - Tambahkan nilai menggunakan method addGrade
 */
function addGradeToStudent() {
  // Implementasi di sini
  console.log('\n--- Tambah Nilai Siswa ---');
  // TODO: Lengkapi implementasi
  const id = readlineSync.question('Masukkan ID Siswa: ');
  const student = manager.findStudent(id);

  if (!student) {
    console.log("Siswa tidak ditemukan.");
    return;
  }

  student.displayInfo();

  const subject = readlineSync.question('Masukkan Nama Mata Pelajaran: ');
  const score = Number(readlineSync.question('Masukkan Nilai (0-100): '));

  const success = student.addGrade(subject, score);

  if (success) {
    console.log("Nilai berhasil ditambahkan.");
  }
}

/**
 * Handler untuk melihat top students
 * TODO: Implementasikan function ini
 * - Panggil getTopStudents(3) dari manager
 * - Tampilkan informasi siswa
 */
function viewTopStudents() {
  // Implementasi di sini
  console.log('\n--- Top 3 Siswa ---');
  // TODO: Lengkapi implementasi
  const topStudents = manager.getTopStudents(3);

  if (topStudents.length === 0) {
    console.log("Belum ada data siswa.");
    return;
  }

  topStudents.forEach((student) => student.displayInfo());
}

/**
 * Main program loop
 * TODO: Implementasikan main loop
 * - Tampilkan menu
 * - Baca input pilihan
 * - Panggil handler yang sesuai
 * - Ulangi sampai user pilih keluar
 */
function main() {
  console.log('Selamat datang di Sistem Manajemen Nilai Siswa!');
  
  // TODO: Implementasikan loop utama program
  let running = true;
  
  while (running) {
    // Tampilkan menu
    // Baca pilihan user
    // Jalankan action sesuai pilihan
    // TODO: Lengkapi implementasi
    displayMenu();
    const choice = readlineSync.question('Pilih menu (1-8): ');

    switch (choice) {
      case '1':
        addNewStudent();
        break;
      case '2':
        viewAllStudents();
        break;
      case '3':
        searchStudent();
        break;
      case '4':
        updateStudent();
        break;
      case '5':
        deleteStudent();
        break;
      case '6':
        addGradeToStudent();
        break;
      case '7':
        viewTopStudents();
        break;
      case '8':
        running = false;
        break;
      default:
        console.log('Pilihan tidak valid!');
    }
    
    // Hint: gunakan switch-case untuk handle berbagai pilihan
  }
  
  console.log('\nTerima kasih telah menggunakan aplikasi ini!');
}

// Jalankan aplikasi
main();
