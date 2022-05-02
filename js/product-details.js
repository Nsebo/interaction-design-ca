var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

function menutoggle() {
  if (MenuItems.style.maxHeight == '0px') {
    MenuItems.style.maxHeight = '300px';
  } else {
    MenuItems.style.maxHeight = '0px';
  }
}
const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get('id');
console.log(id);
// Wordpress returns all products for some reason
const API_URL = `https://nsebonkili-9438ad.ingress-alpha.easywp.com/wp-json/wc/store/products?id=${id}`;
console.log(API_URL);
const gameDetails = document.querySelector('.game-details');
let singleGameDetails;
async function getGameDetails() {
  try {
    const response = await fetch(API_URL);
    const allGameDetails = await response.json();

    // Iterate through response to find the actual single product
    for (let i = 0; i < allGameDetails.length; i++) {
      if (allGameDetails[i].id === Number(id)) {
        singleGameDetails = allGameDetails[i];
      }
    }
    gameDetails.innerHTML += `
    <div class="container">
 <div class="content">
 <img src="${singleGameDetails.images[0].src}">
 <h3>Title: ${singleGameDetails.name}</h3>
 <p>Description: ${singleGameDetails.description}</p>
 <p>Average _rating: ${singleGameDetails.average_rating}</p>
 <p>Id: ${singleGameDetails.id}</p>
 </div>
    </div>
    `;
    console.log(singleGameDetails);
  } catch (error) {}
}
getGameDetails();
