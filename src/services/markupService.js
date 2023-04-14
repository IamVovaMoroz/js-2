// export function createProductListMarkup (products) {
//   return products
//     .map(
//       product =>
//         `<li><img src="${product.images[0]}" alt="${product.title}" ><p> Model: ${product.title}</p><p>Description: ${product.description}</p><p>Price: ${product.price}$</p></li>`
//     )
//     .join('')
// }

// С деструктуризацией та же функция

// export function createProductListMarkup (products) {
//   return products
//     .map(
//       ({ images, title, price }) =>
//         `<li><img src="${images[2]}" alt="${title}" ><p>${title}</p><p>Price: ${price}</p></li>`
//     )
//     .join('')
// }

// export function createProductMarkup (product) {
//   return `<img src="${product.images[0]}" alt="${product.title}" ><p> Model: ${product.title}</p><p>Description: ${product.description}</p><p>Price: ${product.price}$</p>`
// }

// export function createProductMarkup (product) {
//   return `<img src="${product.images[2]}" alt="${product.title}"><p>${product.title}</p><p>Price: ${product.price}</p>`
// }

// export function createNewProductMarkup (product) {
//   return `<p> Model: ${product.title}</p><p>Description: ${product.description}</p><p>Price: ${product.price}$</p>

//   `
// }
// <p>Description: ${product.description}</p>
// <p>Price: ${product.price}$</p>

// export function createAllUsersListMarkup (users) {
//   return users
//     .map(
//       user =>
//         `<li><p> FirstName: ${user.firstName}</p><p>LastName: ${user.lastName}</p><p>Age: ${user.age}</p><p>Email: ${user.email}</p><p>Phone: ${user.phone}</p></li>`
//     )
//     .join('')
// }

// export function findUserByIdMarkup (users) {
//   return users.filter(user => user.firstName === 0).map(
//     user =>
//       `<li><p> Вот данные User(s) с FirstName: ${user.firstName}</p><p>LastName: ${user.lastName}</p><p>Age: ${user.age}</p><p>Email: ${user.email}</p><p>Phone: ${user.phone}</p></li>`
//   )
// }

// Задача 7

// export function createCardMarkup (card) {
//   return `<p> Discounted Total: ${card.discountedTotal}</p>
//   <p> User ID: ${card.userId}</p>

//   <p>Total Products: ${card.totalProducts}</p>
//   <p>Product 1:" ${card.products[0].title}"
//   <span>Discount: ${card.products[0].discountPercentage}%</span>
//   <span>Quantity: ${card.products[0].quantity}</span>
//   <span>Price: ${card.products[0].price}$</span>
//   </p>
//   <p>Product 2:" ${card.products[1].title}"
//   <span>Discount: ${card.products[1].discountPercentage}%</span>
//   <span>Quantity: ${card.products[1].quantity}</span>
//   <span>Price: ${card.products[1].price}$</span>
//   </p>
//   <p>Product 3: "${card.products[2].title}"
//   <span>Discount: ${card.products[2].discountPercentage}%</span>
//   <span>Quantity: ${card.products[2].quantity}</span>
//   <span>Price: ${card.products[2].price}$</span>
//   </p>
//   <p>Product 4: "${card.products[3].title}"
//   <span>Discount: ${card.products[3].discountPercentage}%</span>
//   <span>Quantity: ${card.products[3].quantity}</span>
//   <span>Price: ${card.products[3].price}$</span>
//   </p>
//   <p>Product 5: "${card.products[4].title}"
//   <span>Discount: ${card.products[4].discountPercentage}%</span>
//   <span>Quantity: ${card.products[4].quantity}</span>
//   <span>Price: ${card.products[4].price}$</span>
//   </p>`
// }

// discountedTotal, title, quantity, discountedPrice )

// Задача 8a получить постпо ID поста

// export function createPostMarkup (post) {
//   return `
//   <h3> Post title: ${post.title}</h3>
//   <p> Post: ${post.body}</p>
//   <p> Post ID: ${post.id}</p>
//   <p> Post tags: ${post.tags}</p>
//   <p> Post reactions: ${post.reactions} Likes</p>
//   `
// }

// <p>Total Products: ${card.totalProducts}</p>
//   <p>Product 1:" ${card.products[0].title}"
//   <span>Discount: ${card.products[0].discountPercentage}%</span>
//   <span>Quantity: ${card.products[0].quantity}</span>
//   <span>Price: ${card.products[0].price}$</span>
//   </p>
//   <p>Product 2:" ${card.products[1].title}"
//   <span>Discount: ${card.products[1].discountPercentage}%</span>
//   <span>Quantity: ${card.products[1].quantity}</span>
//   <span>Price: ${card.products[1].price}$</span>
//   </p>
//   <p>Product 3: "${card.products[2].title}"
//   <span>Discount: ${card.products[2].discountPercentage}%</span>
//   <span>Quantity: ${card.products[2].quantity}</span>
//   <span>Price: ${card.products[2].price}$</span>
//   </p>
//   <p>Product 4: "${card.products[3].title}"
//   <span>Discount: ${card.products[3].discountPercentage}%</span>
//   <span>Quantity: ${card.products[3].quantity}</span>
//   <span>Price: ${card.products[3].price}$</span>
//   </p>
//   <p>Product 5: "${card.products[4].title}"
//   <span>Discount: ${card.products[4].discountPercentage}%</span>
//   <span>Quantity: ${card.products[4].quantity}</span>
//   <span>Price: ${card.products[4].price}$</span>
//   </p>`

// Задача 8 получить пост по ID пользователя

// export function createPostsMarkup (posts) {
//   return `
//   <h3> Post title: ${post.title}</h3>
//   <p> Post: ${post.body}</p>
//   <p> Post ID: ${post.id}</p>
//   <p> Post tags: ${post.tags}</p>
//   <p> Post reactions: ${post.reactions} Likes</p>
//   `
// }

// export function createPostsMarkup (posts) {
//   return `<li><p> Limit: ${posts.limit}</p><p>Total: ${posts.total}</p><p>Skip: ${posts.skip}$</p><p>Skip: ${posts.posts}$</p></li>`// }

// чат gpt вариант
// export function createCardMarkup (card) {
//   return `
//     <p>Discounted Total: ${card.discountedTotal}</p>
//     <p>User ID: ${card.userId}</p>
//     <p>Total Products: ${card.totalProducts}</p>
//     ${card.products
//       .map(({ title, discountPercentage, quantity, price }, index) => {
//         return `
//         <p>Product ${index + 1}: "${title}"
//           <span>Discount: ${discountPercentage}%</span>
//           <span>Quantity: ${quantity}</span>
//           <span>Price: ${price}$</span>
//         </p>
//       `
//       })
//       .join('')}
//   `
// }

// Наталья вариант
// export function createCardMarkup (card) {
//   return `
//   <p> Discounted Total: ${card.discountedTotal}</p>
//   <p> User ID: ${card.userId}</p>
//   <p>Total Products: ${card.totalProducts}</p>
// ${card.products.map(({ title, discountPercentage, quantity, price }, index) => {
//   return `<p>Product ${index + 1}:"${title}"
//   <span>Discount: ${discountPercentage}%</span>
//   <span>Quantity: ${quantity}</span>
//   <span>Price: ${price}$</span>
//   </p>`
// })}`
// }
