import { instance } from '../services/api'

// Получения с сервера всех продуктов Limit 3 ограничения по продуктам загружаемым
// export function getAllProducts () {
//   return instance.get('products/?limit=3')
// }

export function getAllProducts () {
  return instance.get('products/')
}

// Тоже самое через fetch а не axios

// function getAllProducts () {
//   fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(console.log)
// }

// Получения с сервера  продуктов по id

export function getProductById (id) {
  return instance.get(`products/${id}`)
}

// Добавление на backend (products/add это данные с бекенда для добавления)

// export function productAddByRequest (description) {
//   return instance.post(`products/add`, { description }).then(function (response) {
//     console.log(response);
//   })
// }

// export function productAddByRequest (title) {
//   return instance.post('products/add', { title })
// }

// Удалить продукт по ID
export function deleteProductById (id) {
  return instance.delete(`products/${id}`)
}


