const querySelector = document.location.search;

const params = new URLSearchParams(querySelector);
const id = params.get('id');
const API_URL = `https://nsebonkili.flywheelsites.com/wp-json/wc/store/products/${id}`;

const productDetails = document.querySelector('.product-details');

let thumbnail =
  'https://nsebonkili.flywheelsites.com/wp-content/uploads/2022/04/gaming-pad-324x324.webp';

async function getProductDetails() {
  try {
    const response = await fetch(API_URL);
    const singleProductDetails = await response.json();
    thumbnail += `${singleProductDetails.thumbnail}`;
    productDetails.innerHTML += `
     <div class="container">
     <img src="${thumbnail}" alt"keypad image"/>
     <div class="content">
     <h2>Name: ${singleProductDetails.name}</h2>
     <p>Description: ${singleProductDetails.description}</p>
     </div>
     </div>
     `;
  } catch (e) {}
}
getProductDetails();
