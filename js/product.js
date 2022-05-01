const API_URL =
  'https://nsebonkili-9438ad.ingress-alpha.easywp.com/wp-json/wc/store/products';
let productsContainer = document.querySelector('.results');
async function getGamehubProducts() {
  try {
    const response = await fetch(API_URL);
    const responseJSON = await response.json();
    const productsData = responseJSON;
    productsContainer.innerHTML = '';
    for (let i = 0; i < productsData.length; i++) {
      console.log(productsData[i].images[0].src);
      productsContainer.innerHTML += `
     <div class="card">
     <div class="heading">
     <img src=${productsData[i].images[0].src}>
     <a href="product-details.html?id=${productsData[i].id}"><strong> Product Name: ${productsData[i].name}</strong></a>
     </div>
     <p>Description : ${productsData[i].description}</p>
     <p>Id : ${productsData[i].id}</p>
   
     </div>
     `;
    }
  } catch (error) {}
}
getGamehubProducts();
