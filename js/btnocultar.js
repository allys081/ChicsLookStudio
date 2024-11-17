// Referencia al botón y a la sección de productos
const toggleProductsBtn = document.getElementById("toggle-products-btn");
const productsSection = document.getElementById("products-section");

// Función para alternar la visibilidad de la sección de productos
toggleProductsBtn.addEventListener("click", () => {
  if (productsSection.style.display === "none" || productsSection.style.display === "") {
    productsSection.style.display = "block"; // Mostrar productos
    toggleProductsBtn.textContent = "Ocultar productos"; // Cambiar texto del botón
  } else {
    productsSection.style.display = "none"; // Ocultar productos
    toggleProductsBtn.textContent = "Mostrar productos"; // Cambiar texto del botón
  }
});

// Función para añadir productos al carrito
function addToCart(productName, price) {
  alert(`Producto añadido: ${productName} - $${price}`);
  // Llamamos a la función de carrito.js para manejar la adición
  addProductToCart(productName, price);
}
// Función para añadir productos al carrito
function addToCart(productName, price) {
  // Llamamos a la función de carrito.js para manejar la adición
  addProductToCart(productName, price);
  alert(`Producto añadido: ${productName} - $${price}`);
}

