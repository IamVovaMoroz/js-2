export function createProductListMarkup (products) {
  return products
    .map(
      product =>
        `<li><img src="${product.images[0]}" alt="${product.title}" ><p> Model: ${product.title}</p><p>Description: ${product.description}</p><p>Price: ${product.price}$</p></li>`
    )
    .join('')
}

// С деструктуризацией та же функция

// export function createProductListMarkup (products) {
//   return products
//     .map(
//       ({ images, title, price }) =>
//         `<li><img src="${images[2]}" alt="${title}" ><p>${title}</p><p>Price: ${price}</p></li>`
//     )
//     .join('')
// }

export function createProductMarkup (product) {
  return `<img src="${product.images[0]}" alt="${product.title}" ><p> Model: ${product.title}</p><p>Description: ${product.description}</p><p>Price: ${product.price}$</p>`
}

// export function createProductMarkup (product) {
//   return `<img src="${product.images[2]}" alt="${product.title}"><p>${product.title}</p><p>Price: ${product.price}</p>`
// }

export function createNewProductMarkup (product) {
  return `<h2> Model: ${product.title}
  </h2>
  
  `
}
// <p>Description: ${product.description}</p>
// <p>Price: ${product.price}$</p>

// Удалить продукт по ID

export function deleteProductMarkup (product) {
  return `<h2> Товар был удалён с номером ID: ${product.id}
  </h2>
  
  `
}
