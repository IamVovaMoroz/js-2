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
  return `<p> Model: ${product.title}</p><p>Description: ${product.description}</p><p>Price: ${product.price}$</p>
  
  
  `
}
// <p>Description: ${product.description}</p>
// <p>Price: ${product.price}$</p>

export function createAllUsersListMarkup (users) {
  return users
    .map(
      user =>
        `<li><p> FirstName: ${user.firstName}</p><p>LastName: ${user.lastName}</p><p>Age: ${user.age}</p><p>Email: ${user.email}</p><p>Phone: ${user.phone}</p></li>`
    )
    .join('')
}

// export function findUserByIdMarkup (users) {
//   return users.filter(user => user.firstName === 0).map(
//     user =>
//       `<li><p> Вот данные User(s) с FirstName: ${user.firstName}</p><p>LastName: ${user.lastName}</p><p>Age: ${user.age}</p><p>Email: ${user.email}</p><p>Phone: ${user.phone}</p></li>`
//   )
// }
