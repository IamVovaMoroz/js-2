import './styles/normalize.css'
import './styles/index.css'

import { getUserByName } from './requests/products'

import {
  getMoviesByName,
  getAllProducts,
  getProductById,
  productAdd,
  deleteProductById,
  productAddByRequest,
  getAllUsers,
  getUserById,
  getCardById,
  getPostById,
  getPostsByIdUser
} from './requests/products'
import {
  createProductListMarkup,
  createProductMarkup,
  createNewProductMarkup,
  createAllUsersListMarkup,
  findUserByIdMarkup,
  createCardMarkup,
  createPostMarkup,
  createPostsMarkup
} from './services/markupService'

// ---------------------------------

// Задача 1 получение всех продуктов
// const allProductsList = document.querySelector('#allProducts')
// // console.log(allProductsList)

// getAllProducts().then(({ data: { products } }) => {
//   allProductsList.innerHTML = createProductListMarkup(products)
// })

// getAllProducts()
//   .then(res => console.log(res.data.products[2].brand))
//   .catch(error => {
//     console.log(error)
//   })
// getAllProducts().then(({ data: { products } }) => {
//   allProductsList.innerHTML = createProductListMarkup(products)
// })
// allProductsList.innerHTML = getAllProducts(res.data.products[0])
// // Задача 2 получение продуктов по ID

// const productsForm = document.querySelector('#singleProductForm')
// const productPlace = document.querySelector('#singleProduct')

// productsForm.addEventListener('submit', onProductsFormSubmit)

// function onProductsFormSubmit (event) {
//   event.preventDefault()

//   const idValueInput = event.target.elements.id.value
//   console.log(idValueInput)

//   getProductById(idValueInput).then(({ data }) => {
//     productPlace.innerHTML = createProductMarkup(data)
//   })
// }

// // Задача 3 добавление информации по товару и вывод на нашу разметку новых данных

// const formNewProduct = document.querySelector('#new-product')
// const newProductSection = document.querySelector('#newProductSection')

// formNewProduct.addEventListener('submit', onFormNewProductSubmit)

// function onFormNewProductSubmit (event) {
//   event.preventDefault()

//   const title = event.target.elements.title.value.trim()
//   const description = event.target.elements.description.value.trim()
//   const price = event.target.elements.price.value.trim()

//   productAddByRequest({ title, description, price }).then(({ data }) => {
//     function createNewProductMarkup (product) {
//       return `<p> Model: ${product.title}</p><p>Description: ${product.description}</p><p>Price: ${product.price}$</p>

//       `
//     }
//     newProductSection.innerHTML = createNewProductMarkup(data)
//   })
// }
// formNewProduct.addEventListener('submit', onNewProductSubmit);

// // function onNewProductSubmit(event) {
// //     event.preventDefault();

// //     const title = event.target.elements.title.value.trim();

// //     productAdd(title).then(({ data }) => {
// //         newProductSection.innerHTML = createNewProductMarkup(data);
// //     })
// // };

// // Задача 4 удалить продукт по ID

// const deletionProductForm = document.querySelector('#deletionProductForm')
// const deletionProductSection = document.querySelector('#deleteProductSection')

// deletionProductForm.addEventListener('submit', onDeletionProductForm)

// function onDeletionProductForm (event) {
//   event.preventDefault()

//   const inputValue = event.target.elements.deletionId.value.trim()
//   console.log(inputValue)

//   deleteProductById(inputValue)
//     .then(
//       res =>
//         (deletionProductSection.innerHTML = `<h2> Товар был удалён с номером ID: ${inputValue}
//     </h2>`)
//     )
//     .catch(error => console.log(alert(error)))
// }

// Задача 5 получить всех юзеров

// const allUsersList = document.querySelector('#allUsers')
// console.log(allUsersList)

// getAllUsers().then(({ data: { users } }) => {
//   allUsersList.innerHTML = createAllUsersListMarkup(users)
// })

// Задача 6 получить  юзера по именам

// const usersForm = document.querySelector('#userByNameForm')
// const usersPlace = document.querySelector('#usersByName')

// usersForm.addEventListener('submit', onUsersFormSubmit)

// function onUsersFormSubmit (event) {
//   event.preventDefault()
//   // Тут вводим event.target.elements потом значение с импута в html - name и value
//   const usersNameInput = event.target.elements.name.value.trim()
//   console.log(usersNameInput)

//   getUserByName(usersNameInput).then(({ data: { users } }) => {
//     let markupUser = users
//       .map(
//         user =>
//           `<li><p> Вот данные User(s) с FirstName: ${user.firstName}</p><p>LastName: ${user.lastName}</p><p>Age: ${user.age}</p><p>Email: ${user.email}</p><p>Phone: ${user.phone}</p></li>`
//       )
//       .join('')
//     usersPlace.innerHTML = markupUser
//   })
// }

// function onProductsFormSubmit (event) {
//   event.preventDefault()

//   const idValueInput = event.target.elements.id.value
//   console.log(idValueInput)

//   getProductById(idValueInput).then(({ data }) => {
//     productPlace.innerHTML = createProductMarkup(data)
//   })
// }

// export function createProductListMarkup (products) {
//   return products
//     .map(
//       product =>
//         `<li><img src="${product.images[0]}" alt="${product.title}" ><p> Model: ${product.title}</p><p>Description: ${product.description}</p><p>Price: ${product.price}$</p></li>`
//     )
//     .join('')
// }

// Задача 7:
// Получи и отрендери список карт по ID пользователя.

// const cardForm = document.querySelector('#userCartsForm')
// const cardPlace = document.querySelector('#carts')

// cardForm.addEventListener('submit', onCardFormSubmit)

// function onCardFormSubmit (event) {
//   event.preventDefault()

//   const inputValueCard = event.target.elements.userId.value

//   // console.log(inputValue)

//   getCardById(inputValueCard).then(({ data }) => {
//     console.log(data)
//     cardPlace.innerHTML = createCardMarkup(data)
//   })
// }

// Задача 8a:
// Получи пост по ID и отрендери его.

// const postForm = document.querySelector('#userPostForm')
// const postPlace = document.querySelector('#posts')

// postForm.addEventListener('submit', onPostFormSubmit)

// function onPostFormSubmit (event) {
//   event.preventDefault()
//   // userId - input name="userId"
//   const inputIdPost = event.target.elements.userId.value
//   // console.log(inputIdPost)
//   getPostById(inputIdPost).then(({ data }) => {
//     console.log(data)
//     postPlace.innerHTML = createPostMarkup(data)
//   })
// }

// Задача 8
// Получи и отрендери список постов по ID пользователя.
// const postsForm = document.querySelector('#userPostsForm')
// const postsPlace = document.querySelector('#posts')

// postsForm.addEventListener('submit', onPostsFormSubmit)

// function onPostsFormSubmit (event) {
//   event.preventDefault()
//   // userId - input name="userId"
//   const inputIdUserPost = event.target.elements.userId.value
//   console.log(inputIdUserPost)
//   getPostsByIdUser(inputIdUserPost).then(({ data }) => {
//     console.log(data)
//     postsPlace.innerHTML = createCardMarkup(data)
//   })
// }

const searchBarForm = document.querySelector('#searchBar-form')
// console.log(searchBarForm)
const allMoviesPlace = document.querySelector('#allMoviesPlace')
// console.log(allMoviesPlace)

searchBarForm.addEventListener('submit', onSearchBarFormSubmit)

function onSearchBarFormSubmit (event) {
  event.preventDefault()

  const onSearchBarInput = event.target.elements.searchBarInput.value
  console.log(onSearchBarInput)
  // Обьект получаем
  getMoviesByName(onSearchBarInput).then(res => console.log(res))

  //  Рендерим в разметку
  // allMoviesPlace.innerHTML = getMoviesByName(data)
}

// then(({ data: { results } })
