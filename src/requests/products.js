import { instance } from '../services/api'

export function getAllProducts () {
  return instance.get('products/?limit=3')
}

// function getAllProducts () {
//   fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(console.log)
// }

// Тоже самое через fetch а не axios

// export function getAllProducts() {
//     return instance.get('products');
// };

// export function getProductById(id) {
//     return instance.get(`products/${id}`);
// };

// export function productAdd(title) {
//     return instance.post('products/add', {title});
// };
