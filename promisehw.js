//1
// function fetchUser(users, id){
//     return new Promise((resolve, reject) => {
//         const user = users.find(user => user.id === id);
//         if(user){
//             resolve(user);
//         } else {
//             reject(`User with id ${id} not found.`);
//         }
//     }
//     );}


// const users = [
// {id:1, name:"Ann", role:"admin"},
// {id:2, name:"John", role:"user"},
// ]

// fetchUser(users, 2)
//   .then(user => console.log(user))
//   .catch(e => console.error(e.message));



//2
// function fetchProduct(products, id){
//  return new Promise((resolve, reject) => {
//         const product = products.find(product => product.id === id);    
//         if(product){
//             resolve(product);
//         } else {
//             reject(new Error(`Product with id ${id} not found.`));
//         }});

// }
// const products = [
// {id:10, name:"Laptop", price:1000},
// {id:11, name:"Phone", price:600},
// ]

// fetchProduct(products, 105)
//     .then(console.log)
//     .catch(e=>console.error(e.message));

//3

// function createOrder(orders, userId, items){
//      return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!Array.isArray(items) || items.length === 0) {
//         reject(new Error('Items array is empty'));
//         return;
//       }
//       const total = items.reduce((s, it) => s + (it.price || 0), 0);
//       const newOrder = { userId, items, total, status: 'created' };
//       orders.push(newOrder);
//       resolve(newOrder);
//     }, 0);
//   });
 

// }
// const ordersList = []
// createOrder(ordersList, 2, [{name:"Laptop", price:1000}])
//     .then(order => console.log(order))
//     .catch(e => console.error(e.message));


//4
// function deleteOrder(orders, orderId){

//     return new Promise((resolve, reject) => {       
//         const order = orders.findIndex(order => order.id === orderId);
//         if(order !== -1){
//             const deletedOrder = orders.splice(order, 1)[0];
//             resolve(deletedOrder);
//         } else {
//             reject(new Error(`Order with id ${orderId} not found.`));
//         } });   
// }
// const ordersList = [
// {id:101, total:100},
// {id:102, total:200}
// ]
// deleteOrder(ordersList, 102)
//     .then(order =>{
//         console.log("deleted")
//          console.log(order)
//     })  
//     .catch(e => console.error(e.message));



// //5

// const VALID_ROLES = ['admin', 'user'];
// function updateUserRole(users, userId, role) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!VALID_ROLES.includes(role)) { reject(new Error('Invalid role')); return; }
//       const u = users.find(x => x.id === userId);
//       if (!u) { reject(new Error('User not found')); return; }
//       u.role = role;
//       resolve(u);
//     }, 0);
//   });
// }

// const users = [
//   { id: 1, name: "Ann", role: "admin" },
//   { id: 2, name: "John", role: "user" },
// ];  
// updateUserRole(users, 2, 'superuser')
//   .then(user => console.log(user))
//   .catch(e => console.error(e.message));    

//6

// function checkStock(products, productId){

//     return new Promise((resolve, reject) => {       
//         const product = products.find(product => product.id === productId); 
//         if(product){    
//             if(product.stock > 0){
//                 resolve(`Product ${product.name} is in stock.`);
//             } else {
//                 reject(new Error(`Product ${product.name} is out of stock.`));
//             }}});
// }
//  const productsList = [
// {id:10,name:"Laptop",stock:5},
// {id:11,name:"Phone",stock:0}
// ]
// checkStock(productsList, 11)
//     .then(message => console.log(message))
//     .catch(e => console.error(e.message));

//7

// function changeOrderStatus(orders, orderId, status){
//     return new Promise((resolve, reject) => {       
//         const order = orders.find(order => order.id === orderId);   
//         if(order){
//             order.status = status;
//             resolve(order);
//         } else {
//             reject(new Error(`Order with id ${orderId} not found.`));
//         } });

// }

// const ordersList = [
// {id:101, total:100, status:"created"},
// {id:102, total:200, status:"created"}
// ]
// changeOrderStatus(ordersList, 101, "shipped")
//     .then(order => console.log(order))
//     .catch(e => console.error(e.message));

//8

// function topExpensiveProducts(products, n){
//     return new Promise((resolve, reject) => {
//         if(n > products){
//             reject(new Error("n must not be greater than length arr."));
//             return;
//         }
//         const sortedProducts = products.sort((a, b) => b.price - a.price);
//         const topProducts = sortedProducts.slice(0, n);
//         resolve(topProducts);
//     });
// }
// const productsList = [
// {id:10, name:"Laptop", price:1000},
// {id:11, name:"Phone", price:600},
// {id:12, name:"Tablet", price:300},
// {id:13, name:"Monitor", price:4088880},
// {id:14, name:"Keyboard", price:150}
// ]
// topExpensiveProducts(productsList, 2)
//     .then(products => console.log(products))
//     .catch(e => console.error(e.message));

//9


// function blockUser(users, userId){
//     return new Promise((resolve, reject) => {
//         const user = users.find(user => user.id === userId);
//         if(user){
//             if(user.blocked){
//                 reject(new Error(`User with id ${userId} is already blocked.`));
//                 return;
//             }
//             user.blocked = true;
//             resolve(user);
//         } else {
//             reject(new Error(`User with id ${userId} not found.`));
//         }});
// }
// const usersList = [
// {id:1, name:"Anna", role:"admin"},
// {id:2, name:"Bob", role:"user"}
// ]
// blockUser(usersList, 2)
//     .then(user => console.log(user))
//     .catch(e => console.error(e.message));


///Homework 2


//1

// function fakeFetch(url) {
//     return new Promise((resolve, reject) => {   
//         setTimeout(() => {
//             if (url.includes("data")) {//erevi eli
//                 resolve({ data: "Sample data from " + url });
//             }
//             else {
//                 reject(new Error("404 Not Found"));
//             }}, 0);
//     });
// }

// fakeFetch("https://api.example.com/data")
//     .then(response => console.log(response))
//     .catch(error => console.error(error.message));



//2

function makeorder(order){
    return new Promise((resolve, reject) => {
        if (order=="pizza"){
            resolve("Order accepted");
        } else{
            reject(new Error("Order We make only pizza"));
        }
        });}
    
makeorder("burger")
    .then(message => console.log(message))
    .catch(e => console.error(e.message));