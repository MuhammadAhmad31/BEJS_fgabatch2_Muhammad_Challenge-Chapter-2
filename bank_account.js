let saldo = 0;

function convertToRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(number);
}

function updateSaldoDisplay() {
  document.getElementById(
    "saldoDisplay"
  ).innerText = `Saldo saat ini: ${convertToRupiah(saldo)}`;
}

function tambahSaldo() {
  let jumlah = parseFloat(
    window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:")
  );

  if (!isNaN(jumlah) && jumlah > 0) {
    saldo += jumlah;
    alert(`Saldo berhasil ditambah. Saldo baru: ${convertToRupiah(saldo)}`);
    updateSaldoDisplay();
  } else {
    alert("Jumlah yang dimasukkan tidak valid.");
  }
}

function kurangiSaldo() {
  let jumlah = parseFloat(
    window.prompt("Masukkan jumlah saldo yang ingin dikurangi:")
  );

  if (!isNaN(jumlah) && jumlah > 0 && jumlah <= saldo) {
    saldo -= jumlah;
    alert(`Saldo berhasil dikurangi. Saldo baru: ${convertToRupiah(saldo)}`);
    updateSaldoDisplay();
  } else if (jumlah > saldo) {
    alert("Jumlah yang dimasukkan melebihi saldo saat ini.");
  } else {
    alert("Jumlah yang dimasukkan tidak valid.");
  }
}

window.onload = function () {
  updateSaldoDisplay();

  document.getElementById("tambahSaldoBtn").onclick = tambahSaldo;
  document.getElementById("kurangiSaldoBtn").onclick = kurangiSaldo;
};