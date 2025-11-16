/**
 * Class Student
 * Representasi dari seorang siswa dengan data dan nilai-nilainya
 * 
 * TODO: Implementasikan class Student dengan:
 * - Constructor untuk inisialisasi properti (id, name, class, grades)
 * - Method addGrade(subject, score) untuk menambah nilai mata pelajaran
 * - Method getAverage() untuk menghitung rata-rata nilai
 * - Method getGradeStatus() untuk menentukan status Lulus/Tidak Lulus
 * - Method displayInfo() untuk menampilkan informasi siswa
 * 
 * Kriteria Lulus: rata-rata >= 75
 */

class Student {
  // TODO: Implementasikan constructor
  // Properti yang dibutuhkan:
  // - id: ID unik siswa
  // - name: Nama siswa
  // - class: Kelas siswa
  // - grades: Object untuk menyimpan nilai {subject: score}
  
  constructor(id, name, studentClass) {
    // Implementasi constructor di sini
    if (!id) throw new Error("ID tidak boleh kosong");
    if (!name) throw new Error("Nama tidak boleh kosong");
    if (!studentClass) throw new Error("Kelas tidak boleh kosong");

    this.id = id;
    this.name = name;
    this.class = studentClass;
    this.grades = {}; // { subject: score }
  }

  /**
   * Menambah atau update nilai mata pelajaran
   * @param {string} subject - Nama mata pelajaran
   * @param {number} score - Nilai (0-100)
   * TODO: Validasi bahwa score harus antara 0-100
   */
  addGrade(subject, score) {
    // Implementasi method di sini
    if (!subject) {
      console.log("Mata pelajaran tidak boleh kosong.");
      return false;
    }

    if (typeof score !== "number" || score < 0 || score > 100) {
      console.log("Nilai harus berupa angka 0-100.");
      return false;
    }

    this.grades[subject] = score;
    return true;
  }

  /**
   * Menghitung rata-rata nilai dari semua mata pelajaran
   * @returns {number} Rata-rata nilai
   * TODO: Hitung total nilai dibagi jumlah mata pelajaran
   */
  getAverage() {
    // Implementasi method di sini
    const subjects = Object.keys(this.grades);

    if (subjects.length === 0) return 0;

    const total = subjects.reduce(
      (sum, subject) => sum + this.grades[subject],
      0
    );

    return total / subjects.length;
  }

  /**
   * Menentukan status kelulusan siswa
   * @returns {string} "Lulus" atau "Tidak Lulus"
   * TODO: Return "Lulus" jika rata-rata >= 75, selain itu "Tidak Lulus"
   */
  getGradeStatus() {
    // Implementasi method di sini
    const avg = this.getAverage();
    return avg >= 75 ? "Lulus" : "Tidak Lulus";
  }

  /**
   * Menampilkan informasi lengkap siswa
   * TODO: Tampilkan ID, Nama, Kelas, semua nilai, rata-rata, dan status
   */
  displayInfo() {
    // Implementasi method di sini
    console.log(`\nID: ${this.id}`);
    console.log(`Nama: ${this.name}`);
    console.log(`Kelas: ${this.class}`);
    console.log("Mata Pelajaran:");

    const subjects = Object.keys(this.grades);
    if (subjects.length === 0) {
      console.log("  - Belum ada nilai");
    } else {
      subjects.forEach((subject) => {
        console.log(`  - ${subject}: ${this.grades[subject]}`);
      });
    }

    const avg = this.getAverage().toFixed(2);
    console.log(`Rata-rata: ${avg}`);
    console.log(`Status: ${this.getGradeStatus()}`);
    console.log("---------------------------");
  }
}

export default Student;
