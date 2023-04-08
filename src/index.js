import './styles/normalize.css'
import './styles/index.css'

import {
  getAllProducts,
  getProductById,
  productAdd,
  deleteProductById,
  productAddByRequest
} from './requests/products'
import {
  createProductListMarkup,
  createProductMarkup,
  createNewProductMarkup
} from './services/markupService'

// Задача 1 получение всех продуктов
// const allProductsList = document.querySelector('#allProducts')
// console.log(allProductsList)

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

//   const newTitle = event.target.elements.title.value.trim()
//   // const newDescription = event.target.elements.description.value.trim()
//   // const newPrice = event.target.elements.price.value.trim()

//   productAddByRequest(newTitle).then(({ data }) => {
//     newProductSection.innerHTML = createNewProductMarkup(data)
//   })
// }
// // formNewProduct.addEventListener('submit', onNewProductSubmit);

// // function onNewProductSubmit(event) {
// //     event.preventDefault();

// //     const title = event.target.elements.title.value.trim();

// //     productAdd(title).then(({ data }) => {
// //         newProductSection.innerHTML = createNewProductMarkup(data);
// //     })
// // };

// // Задача 4 удалить продукт по ID

const deletionProductForm = document.querySelector('#deletionProductForm')
const deletionProductSection = document.querySelector('#deleteProductSection')

deletionProductForm.addEventListener('submit', onDeletionProductForm)

function onDeletionProductForm (event) {
  event.preventDefault()

  const inputValue = event.target.elements.deletionId.value.trim()
  console.log(inputValue)

  deleteProductById(inputValue)
    .then(
      res =>
        (deletionProductSection.innerHTML = `<h2> Товар был удалён с номером ID: ${inputValue}
    </h2>`)
    )
    .catch(error => console.log(alert(error)))
}
