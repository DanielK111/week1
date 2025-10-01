const data = {
    sitename: 'Vue.js Pet Depot',
    product: {
        id: 1001,
        title: 'Cat Food, 25lb bag',
        description: 'A 25 pound bag of <em>irresistible</em>, organic goodness for your cat.',
        price: 2000,
        image: 'images/product-fullsize.png'
    }
}

let calc = new Vue({
  el: '#app',
  data: data,
});