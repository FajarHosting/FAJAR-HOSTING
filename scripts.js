// scripts.js
document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', function() {
    const options = this.nextElementSibling;
    options.style.display = (options.style.display === 'none' || options.style.display === '') ? 'block' : 'none';
  });
});

const priceOptions = document.querySelectorAll('.price-option');
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
      totalPrice += price;
      selectedProductName = name;
    } else {
      totalPrice -= price;
      selectedProductName = '';
    }

    updateTotalPrice();
  });
});

function updateTotalPrice() {
  totalPriceDisplay.textContent = "Rp " + totalPrice;
  selectedProductNameDisplay.textContent = selectedProductName || "Belum ada produk yang dipilih";
}

checkoutButton.addEventListener('click', function() {
  if (totalPrice > 0) {
    document.getElementById("payment-section").style.display = 'block';
  } else {
    alert("Pilih produk terlebih dahulu!");
  }
});
