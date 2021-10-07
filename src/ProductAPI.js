
/* export const productData=fetch('https://fakestoreapi.com/products')
.then((response) =>response.json())
 */
/* export function getData(){fetch('https://fakestoreapi.com/products')
.then(function(response) {
   return response.json()
})}; */
const api = "https://fakestoreapi.com/products"

/* username: "mor_2314",
password: "83r5^_" */
export const userLogin=(user,password)=>{
   return fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: user,
                password: password
            })
        })
            .then(res=>res.json())
}

export const getAll =()=>
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())

export const limitProducts=async (count)=>{
    return await fetch(`https://fakestoreapi.com/products?limit=${count}`)
            .then(res=>res.json())
}
export const getProductId=(id)=>{
   let x= id.toString();
   return fetch(`https://fakestoreapi.com/products/${x}`)
      .then(res=>res.json())
}

export const getCategories=()=>{
   return fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
}
export const productsWithCategory=(category)=>{
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
}

//desc->descending------ asc->ascending-------------------------
export const sortResult=(type)=>{
    return fetch(`https://fakestoreapi.com/products?sort=${type}`)
            .then(res=>res.json())
}

export const getCartProducts=()=>{
    return fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
}

export const addToCart=(id,quantity)=>{
    return fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId:5,
                    date:Date.now().getYear()+"-"+Date.now().getMonth()+"-"+Date.now().getDate(),
                    products:[{productId:id,quantity:quantity}]
                }
            )
        }).then(res=>res.json())
}