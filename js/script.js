// ================== Java Script Luas Segitiga ==============//

const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");
const hitung = document.getElementById("hitung");
const output = document.getElementById("output");
hitung.addEventListener("click", function () {
  let a = alas.value;
  let t = tinggi.value;
  let l = 0.5 * a * t;
  output.innerHTML = `Luas Segitiga dari alas ${a} cm dan tinggi ${t} cm adalah ${l} cm2`;
});

// Validasi Form Luas Segitiga
function iniKosong() {
  if (document.getElementById("alas", "tinggi").value == "") {
    alert("Tidak Boleh Kosong !");
  }
  return;
}

// Reset Luas
function reset_luas() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("output").value = "";
}

// End Java Script Hitung Luas Segitiga -------------

//=======================Java Script Keliling Segitiga ==============================//
function keliling() {
  let s1 = document.getElementById("s1").value;
  let s2 = document.getElementById("s2").value;
  let s3 = document.getElementById("s3").value;
  let hasil = document.getElementById("hasil");
  let jumlah = parseInt(s1) + parseInt(s2) + parseInt(s3);
  hasil.innerHTML = `Hasil dari seluruh sisi atau keliling segitiga adalah ${jumlah} cm2`;

  // Validasi Form Keliling
  if (document.getElementById("s1", "s2", "s3", "hasil").value == "") {
    alert("Masukkan nilai di field, Jangan Kosong !");
  }
  return;
}
// Reset Keliling
function reset_keliling() {
  document.getElementById("s1").value = "";
  document.getElementById("s2").value = "";
  document.getElementById("s3").value = "";
}

// End Java Script Hitung Keliling Segitiga -----------
