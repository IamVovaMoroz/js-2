import { instance } from '../services/api'

// Получения с сервера всех продуктов Limit 3 ограничения по продуктам загружаемым
// export function getAllProducts () {
//   return instance.get('products/?limit=3')
// }

export function getAllProducts () {
  return instance.get('products/?limit=4')
}

export function getAllUsers () {
  return instance.get('users/?limit=20')
}

// export function getAllProducts () {
//   return instance.get('products/')
// }

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

// Найти пользователей по имени
// export function getUserByName (firstName) {
//   return instance.get(`users/${firstName}`)
// }

export async function getUserByName (name) {
  return await instance.get(`users//filter?key=firstName&value=${name}`)
}

// {
//   "users": [
//     {
//       "firstName": "Demetrius",
//       "hair": {
//         "color": "Brown", // filter matched hair color
//       },
//       "id": 9,
//       "lastName": "Corkery"
//       // rest user data
//     }
//   ],
//   "total": 26,
//   "skip": 0,
//   "limit": 26
// }

// fetch('https://dummyjson.com/users/filter?key=hair.color&value=Brown')
// .then(res => res.json())
// .then(console.log);
