// scripts.js

// Fungsi untuk menghitung total harga berdasarkan produk yang dipilih
document.querySelectorAll('.product-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    let selectedProducts = document.querySelectorAll('.product-checkbox:checked');
    let totalPrice = 0;
    let productNames = [];

    selectedProducts.forEach(product => {
      totalPrice += parseInt(product.value);
      productNames.push(product.closest('.product-card').querySelector('h3').innerText);
    });

    // Update ringkasan pembelian
    document.getElementById('selected-product-name').innerText = productNames.join(", ") || 'Belum ada produk yang dipilih';
    document.getElementById('total-price').innerText = totalPrice.toLocaleString();
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

// Fungsi untuk mengonfirmasi pembayaran
document.getElementById('confirm-payment').addEventListener('click', function() {
  let paymentMethod = document.querySelector('input[name="payment-method"]:checked');
  if (paymentMethod) {
    alert(`Pembayaran dengan metode: ${paymentMethod.value} berhasil!`);
    document.getElementById('payment-section').style.display = 'none';
    document.getElementById('send-product').style.display = 'block';
  } else {
    alert("Silakan pilih metode pembayaran.");
  }
});

// Fungsi untuk mengirimkan produk (otomatisasi pengiriman)
function sendProduct() {
  alert("Produk telah dikirimkan ke email atau WhatsApp Anda.");
  // Di sini, kamu bisa menambahkan pengiriman email atau WhatsApp menggunakan API (misalnya, dengan Node.js atau PHP)
}
