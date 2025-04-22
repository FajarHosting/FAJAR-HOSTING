// scripts.js
document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', function() {
    const options = this.nextElementSibling;
    // Mengubah tampilan menu harga setelah tombol diklik
    if (options.style.display === 'none' || options.style.display === '') {
      options.style.display = 'block';  // Menampilkan opsi harga
    } else {
      options.style.display = 'none';   // Menyembunyikan opsi harga
    }
  });
});

const priceOptions = document.querySelectorAll('.price-option input');
const totalPriceDisplay = document.getElementById("total-price");
const selectedProductNameDisplay = document.getElementById("selected-product-name");
const checkoutButton = document.getElementById("checkout-button");

let totalPrice = 0;
let selectedProductName = "";

priceOptions.forEach(option => {
  option.addEventListener('change', () => {
    const price = parseInt(option.dataset.price);
    const name = option.dataset.name;

    if (option.checked) {
      totalPrice += price;  // Menambahkan harga
      selectedProductName = name;  // Menyimpan nama produk
    } else {
      totalPrice -= price;  // Mengurangi harga
      selectedProductName = '';  // Menghapus nama produk
    }

    updateTotalPrice();
  });
});

function updateTotalPrice() {
  totalPriceDisplay.textContent = totalPrice.toLocaleString('id-ID');
  selectedProductNameDisplay.textContent = selectedProductName || "Belum ada produk yang dipilih";
}

checkoutButton.addEventListener('click', function() {
  if (totalPrice > 0) {
    document.getElementById("payment-section").style.display = 'block';  // Menampilkan metode pembayaran
  } else {
    alert("Pilih produk terlebih dahulu!");  // Memberi peringatan jika tidak ada produk yang dipilih
  }
});

// Fungsi untuk konfirmasi pembayaran
document.getElementById("confirm-payment").addEventListener('click', function() {
  if (document.querySelector('input[name="payment-method"]:checked')) {
    document.getElementById("buyer-info").style.display = 'block'; // Menampilkan form data pembeli
  } else {
    alert("Pilih metode pembayaran terlebih dahulu!");
  }
});

// Fungsi kirim data pembeli
document.getElementById("buyer-form").addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById("process-status").style.display = 'block'; // Menampilkan proses pembayaran
  setTimeout(function() {
    alert("Produk berhasil dikirim ke pembeli!");
    location.reload(); // Reload halaman setelah transaksi selesai
  }, 3000); // Proses selama 3 detik
});
