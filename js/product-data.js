const resultsContainer = document.querySelector('.results');
const URL =
  'https://nsebonkili-9438ad.ingress-alpha.easywp.com/wp-json/wc/store/products';

// my proxy server
const proxy = 'https://noroffcors.herokuapp.com/';

const corsFixUrl = proxy + URL;
async function makeApiCall() {
  try {
    const response = await fetch(corsFixUrl);

    const productsData = await response.json();
    resultsContainer.innerHTML = alert('success', 'successful');
  } catch (error) {
    resultsContainer.innerHTML = alert('error', error);
  }
}
makeApiCall();
