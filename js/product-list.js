const API_URL = 'imaginary-growler.flywheelsites.com/wp-json/wc/store/products';
const productsContainer = document.querySelector('.results');

async function getGamehubProducts() {
  try {
    const response = await fetch(API_URL);
    console.log(API_URL);
  } catch (error) {}
}
