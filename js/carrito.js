// Función para añadir un producto al carrito y guardarlo en LocalStorage
function addProductToCart(name, price) {
  // Recupera los productos del carrito almacenados en LocalStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Busca si el producto ya está en el carrito
  const existingProduct = cart.find(product => product.name === name);
  if (existingProduct) {
    existingProduct.quantity += 1;
    existingProduct.total = existingProduct.quantity * price;
  } else {
    cart.push({ name, price, quantity: 1, total: price });
  }
  

  // Guarda los datos actualizados en LocalStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${name} añadido al carrito.`);
}

// Función para formatear números como pesos chilenos
function formatChileanPeso(value) {
  return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Cargar el carrito desde LocalStorage
function loadCart() {
  const cartItems = document.getElementById('cart-items');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>
        <input type="number" class="form-control" value="${item.quantity}" min="0" data-index="${index}">
      </td>
      <td>$${formatChileanPeso(item.price)}</td>
      <td>$${formatChileanPeso(item.total)}</td>
      <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button></td>
    `;
    cartItems.appendChild(row);
    total += item.total;
  });

  document.getElementById('total').textContent = formatChileanPeso(total);

  // Añadir eventos para actualizar cantidades
  attachQuantityChangeEvents();
}

// Actualizar cantidad del producto
function attachQuantityChangeEvents() {
  const quantityInputs = document.querySelectorAll('input[type="number"]');
  quantityInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const index = e.target.getAttribute('data-index');
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const quantity = parseInt(e.target.value);

      if (quantity > 0) {
        cart[index].quantity = quantity;
        cart[index].total = cart[index].price * quantity;
      } else if (quantity === 0) {
        // Si la cantidad es cero, actualizar el total y mostrar un mensaje
        cart[index].quantity = 0;
        cart[index].total = 0;
        alert(`${cart[index].name} no está disponible en la cantidad solicitada.`);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      loadCart();
    });
  });
}

// Eliminar producto del carrito
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

// Evento para el botón de finalizar compra
document.getElementById('finalize-btn').addEventListener('click', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert('El carrito está vacío. Agrega productos antes de finalizar la compra.');
  } else {
    alert('Gracias por tu compra. ¡Tu pedido esta siendo procesado!');
    localStorage.removeItem('cart'); // Limpia el carrito
    loadCart(); // Recarga el carrito vacío
  }
});

// Cargar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', loadCart);

// Función para añadir un producto al carrito y guardarlo en LocalStorage
function addToCart(name, price) {
  // Recupera los productos del carrito almacenados en LocalStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Busca si el producto (producto o gift card) ya está en el carrito
  const existingProduct = cart.find(product => product.name === name);

  if (existingProduct) {
    // Si ya existe, solo aumentamos la cantidad y actualizamos el total
    existingProduct.quantity += 1;
    existingProduct.total = existingProduct.quantity * price;
  } else {
    // Si no existe, agregamos el producto o gift card
    cart.push({ name, price, quantity: 1, total: price });
  }

  // Guardamos los datos actualizados en LocalStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${name} añadido al carrito.`);
}

// Función para formatear números como pesos chilenos
function formatChileanPeso(value) {
  return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Cargar el carrito desde LocalStorage
function loadCart() {
  const cartItems = document.getElementById('cart-items');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>
        <input type="number" class="form-control" value="${item.quantity}" min="0" data-index="${index}">
      </td>
      <td>$${formatChileanPeso(item.price)}</td>
      <td>$${formatChileanPeso(item.total)}</td>
      <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button></td>
    `;
    cartItems.appendChild(row);
    total += item.total;
  });

  document.getElementById('total').textContent = formatChileanPeso(total);

  // Añadir eventos para actualizar cantidades
  attachQuantityChangeEvents();
}

// Actualizar cantidad del producto
function attachQuantityChangeEvents() {
  const quantityInputs = document.querySelectorAll('input[type="number"]');
  quantityInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const index = e.target.getAttribute('data-index');
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const quantity = parseInt(e.target.value);

      if (quantity > 0) {
        cart[index].quantity = quantity;
        cart[index].total = cart[index].price * quantity;
      } else if (quantity === 0) {
        // Si la cantidad es cero, actualizar el total y mostrar un mensaje
        cart[index].quantity = 0;
        cart[index].total = 0;
        alert(`${cart[index].name} no está disponible en la cantidad solicitada.`);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      loadCart();
    });
  });
}




  
