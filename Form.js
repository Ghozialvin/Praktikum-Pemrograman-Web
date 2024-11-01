function calculateGrade() {
    // Bobot nilai
    const weightTugas = 0.3;
    const weightUTS = 0.3;
    const weightUAS = 0.4;
    const passingGrade = 60;
  
    // Mengambil nilai dari input
    let tugas = parseFloat(document.getElementById('tugas').value);
    let uts = parseFloat(document.getElementById('uts').value);
    let uas = parseFloat(document.getElementById('uas').value);
  
    // Validasi input nilai (0-100)
    if (isNaN(tugas) || tugas < 0 || tugas > 100 ||
        isNaN(uts) || uts < 0 || uts > 100 ||
        isNaN(uas) || uas < 0 || uas > 100) {
      alert("Mohon masukkan nilai yang valid (0-100) untuk semua komponen.");
      return;
    }
  
    // Hitung rata-rata tertimbang
    let finalScore = (tugas * weightTugas) + (uts * weightUTS) + (uas * weightUAS);
  
    // Tentukan nilai huruf
    let grade;
    if (finalScore >= 90) grade = "A";
    else if (finalScore >= 80) grade = "B";
    else if (finalScore >= 70) grade = "C";
    else if (finalScore >= 60) grade = "D";
    else grade = "E";
  
    // Status kelulusan
    let status = finalScore >= passingGrade ? "Lulus" : "Tidak Lulus";
    let statusClass = finalScore >= passingGrade ? "pass" : "fail";
  
    // Tampilkan hasil
    document.getElementById('result').innerHTML = `
      <p>Nilai Tugas: ${(tugas * weightTugas).toFixed(2)}</p>
      <p>Nilai UTS: ${(uts * weightUTS).toFixed(2)}</p>
      <p>Nilai UAS: ${(uas * weightUAS).toFixed(2)}</p>
      <p>Rata-rata Tertimbang: ${finalScore.toFixed(2)}</p>
      <p>Nilai Huruf: ${grade}</p>
      <p class="${statusClass}">Status: ${status}</p>
    `;
  }
  