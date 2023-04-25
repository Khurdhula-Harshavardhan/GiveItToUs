const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99
    },
    {
      id: 3,
      name: 'Product 3',
      price: 7.99
    },
    {
      id: 4,
      name: 'Product 4',
      price: 24.99
    }
  ];
  
  const cart = [];
  
  const cartItemsElem = document.getElementById('cart-items');
  const productItemsElem = document.getElementById('product-items');
  const totalElem = document.getElementById('total');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  // Populate product list
  products.forEach(product => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${product.name}</span>
      <span>$${product.price.toFixed(2)}</span>
    `;
    const button = li.querySelector('button');
    button.addEventListener('click', () => addToCart(product));
    productItemsElem.appendChild(li);
  });
  
  // Add product to cart
  function addToCart(product) {
    const item = cart.find(item => item.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      });
    }
    updateCart();
  }
  
  // Remove product from cart
  function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    cart.splice(index, 1);
    updateCart();
  }
  
  // Update cart display
  function updateCart() {
    cartItemsElem.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${item.name}</span>
        <button class="remove-btn">Remove</button>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
        <input class="quantity" type="number" value="${item.quantity}" min="1" max="10">
      `;
      const removeBtn = li.querySelector('.remove-btn');
      removeBtn.addEventListener('click', () => removeFromCart(item.id));
      const quantityInput = li.querySelector('.quantity');
      quantityInput.addEventListener('input', () => updateQuantity(item.id, quantityInput.value));
      cartItemsElem.appendChild(li);
    });
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalElem.textContent = `Total: $${total.toFixed(2)}`;
    checkoutBtn.disabled = cart.length === 0;
  }
  
  // Update product quantity in cart
  function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    item.quantity = parseInt(quantity);
    updateCart();
  }
  
  // Checkout
  checkoutBtn.addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart.length = 0;
    updateCart();
  });
  