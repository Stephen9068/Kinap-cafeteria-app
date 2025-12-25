document.addEventListener("DOMContentLoaded", function () {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCountElement = document.getElementById("cart-count");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  updateCartCount();

  addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {

      const name = this.dataset.name;
      const price = Number(this.dataset.price);

      cart.push({ name, price });
      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartCount();
    });
  });

  function updateCartCount() {
    cartCountElement.textContent = cart.length;
  }

  window.openCart = function () {
    window.location.href = "cart.html";
  };

});