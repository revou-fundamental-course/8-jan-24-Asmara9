function hitungLuas() {
    var sideLength = document.getElementById("sideLength").value;
  
    if (sideLength === "" || isNaN(sideLength)) {
      alert("Masukkan panjang sisi dengan angka.");
      return;
    }
  
    var luas = sideLength * sideLength;
    document.getElementById("luas").innerText = luas;
  }

  function resetForm() {
    // Menghapus nilai pada input dan hasil luas
    document.getElementById("sideLength").value = "";
    document.getElementById("sisi").innerText = "";
    document.getElementById("luas").innerText = "";
  }
  
  // Menambahkan tombol reset pada fungsi hitungLuas
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