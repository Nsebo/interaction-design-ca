var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

function menutoggle() {
  if (MenuItems.style.maxHeight == '0px') {
    MenuItems.style.maxHeight = '200px';
  } else {
    MenuItems.style.maxHeight = '0px';
  }
}

const API_URL =
  'https://imaginary-growler.flywheelsites.com/wp-json/wc/store/products';
const productsContainer = document.querySelector('.results');
async function getGamehubProducts() {
  try {
    const response = await fetch(API_URL);
    const responseJSON = await response.json();
    const productsData = responseJSON;
    productsContainer.innerHTML = '';
    for (let i = 0; i < productsData.length; i++) {
      productsContainer.innerHTML += `
     <div class="card">
     <div class="heading">
     <a href="product-details.html?id=${productsData[i].id}"><strong> ProductName: ${productsData[i].name}</strong></a>
     </div>
     <p>Description : ${productsData[i].description}</p>
     <p>Id : ${productsData[i].id}</p>
   
     </div>
     `;
    }
  } catch (error) {}
}
getGamehubProducts();
