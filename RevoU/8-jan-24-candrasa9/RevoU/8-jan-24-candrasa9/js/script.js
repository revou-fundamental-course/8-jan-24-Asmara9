function hitungLuas() {
    var sideLength = document.getElementById("sideLength").value;
  
    if (sideLength === "" || isNaN(sideLength)) {
      alert("Masukkan panjang sisi dengan angka.");
      return;
    }
  
    var luas = sideLength * sideLength;
    document.getElementById("luas").innerText = luas;

    // Update calculation steps
  document.getElementById("sisi").innerText = sideLength + " x " + sideLength;
  }
  
  function hitungKeliling() {
    var sisi = parseFloat(document.getElementById('sideLength').value);
    if (sisi === "" || isNaN(sisi)) {
      alert("Masukkan panjang sisi dengan angka.");
      return;
    }
    var keliling = 4 * sisi;

    document.getElementById('keliling').textContent = keliling;
    document.getElementById("Sisi").innerText = 4 + " x " + sisi;
}


  function resetForm() {
    document.getElementById('sideLength').value = '';
    document.getElementById('sisi').textContent = '';
    document.getElementById('Sisi').textContent = '';
    document.getElementById('luas').textContent = '';
    document.getElementById('keliling').textContent = '';
}
