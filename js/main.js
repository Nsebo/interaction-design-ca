let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name: 'Gaming Mouse',
    tag: 'mouse',
    price: 50,
    inCart: 0,
  },
  {
    name: 'Gaming Pad',
    tag: 'pad',
    price: 55,
    inCart: 0,
  },
  {
    name: 'Xbox one ',
    tag: 'xbox',
    price: 65,
    inCart: 0,
  },
  {
    name: 'Gaming keypad',
    tag: 'game',
    price: 65,
    inCart: 0,
  },
  {
    name: 'Colorful game',
    tag: 'game',
    price: 65,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');

  console.log('my cartCost is', cartCost);
  console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
  } else {
    localStorage.setItem('totalCost', product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector('.products');
  let cartCost = localStorage.getItem('totalCost');
  // console.log(cartItems);
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <div class="product">
      <i class="fa-solid fa-circle-xmark"></i>
      <img src="./img/${item.tag}.jpg">
      <span>${item.name}</span>
      </div>
      <div class="price">$${item.price},00</div>
      <div class="quantity">
      <i class="fa-solid fa-circle-chevron-left"></i>
      <span>${item.inCart}</span>
      <i class="fa-solid fa-circle-chevron-right"></i>
      </div>
      <div class="total">  
      $${item.inCart * item.price},00
      </div>
      `;
    });

    productContainer.innerHTML += `
    <div class="basketTotalContainer">
    <h4 class="basketTotalTitle">
    Basket Total
    </h4>
    <h4 class="basketTotal">
    $${cartCost},00
    </h4>
    </div>
    `;
  }

  deleteButtons();
  manageQuantity();
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll('.product i');
  let productName;
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem('totalCost');

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () => {
      productName = deleteButtons[i].parentElement.textContent
        .trim()
        .toLowerCase()
        .replace(/ /g, '');
      localStorage.setItem(
        'cartNumber',
        productNumbers - cartItems[productName].inCart
      );
      localStorage.setItem(
        'totalCost',
        cartCost - cartItems[productName].price * cartItems[productName].inCart
      );

      delete cartItems[productName];
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      displayCart();
      onLoadCartNumbers();
    });
  }
}

function manageQuantity() {
  let decreaseButtons = document.querySelectorAll('.decrease');
  let increaseButtons = document.querySelectorAll('.increase');
  for (let i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener('click', () => {
      console.log('decreased button');
    });
  }
}

onLoadCartNumbers();
displayCart();
