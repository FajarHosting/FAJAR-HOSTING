// scripts.js

// Fungsi untuk menghitung total harga berdasarkan produk yang dipilih
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', function() {
    let productName = this.querySelector('h3').innerText;
    let productPrice = this.getAttribute('data-price');

    // Update ringkasan pembelian
    document.getElementById('selected-product-name').innerText = productName;
    document.getElementById('total-price').innerText = parseInt(productPrice).toLocaleString();

    // Simpan produk yang dipilih untuk checkout
    document.getElementById('checkout-button').setAttribute('data-product', productName);
    document.getElementById('checkout-button').setAttribute('data-price', productPrice);
  });
});

// Fungsi untuk menampilkan halaman pembayaran setelah klik checkout
document.getElementById('checkout-button').addEventListener('click', function() {
  let total = parseInt(document.getElementById('total-price').innerText.replace(/\./g, ''));
  if (total > 0) {
    document.querySelector('.products').style.display = 'none';
    document.getElementById('order-summary').style.display = 'none';
    document.getElementById('payment-section').style.display = 'block';
  } else {
    alert("Silakan pilih produk terlebih dahulu.");
  }
});

// Fungsi untuk pembayaran dengan PayPal (contoh integrasi dengan PayPal)
function payWithPayPal() {
  alert("Arahkan ke halaman PayPal untuk pembayaran.");
  // Di sini, kamu bisa menambahkan integrasi PayPal menggunakan API atau SDK mereka
  setTimeout(() => {
    document.getElementById('payment-section').style.display = 'none';
    document.getElementById('send-product').style.display = 'block';
  }, 2000); // Simulasikan pengiriman setelah pembayaran
}

// Fungsi untuk mengirimkan produk (otomatisasi pengiriman)
function sendProduct() {
  alert("Produk telah dikirimkan ke email atau WhatsApp Anda.");
  // Di sini, kamu bisa menambahkan pengiriman email atau WhatsApp menggunakan API (misalnya, dengan Node.js atau PHP)
}
