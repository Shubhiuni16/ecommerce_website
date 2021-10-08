import { useEffect, useState } from "react";
import CartProduct from "../components/cartProduct.js";
import NavBar from '../components/navBar';


const CartPg = (props) => {
    const [cart,setCart]=new useState("")
    let cartRep=cart
    
    useEffect(()=>{
        fetch("http://localhost:8000/cart").then((res)=>res.json()).then((res)=>setCart(res)).then(()=>cartRep=cart)
    },[])
   //console.log(cart)
   const orderPlaced=()=>{
    if(cart)
    cart.forEach((c)=>{
        console.log("ORDERS DATA",c) 
        let img=c.img;
        let title=c.title
        let price=c.price
        let productId=c.productId
        const Product={img,title,price,productId}
        fetch("http://localhost:8000/orders",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Product)}).then(async()=>
                await fetch(`http://localhost:8000/cart/${c.id}`,{method:'DELETE'}))
        alert("YAY!!! ALL ORDERS PLACED.")
        props.history.push('/cart')})
    }
    let cartPrice=cartRep?cartRep.reduce((a,v)=>a=a+v.price,0):0
    return <div>
                <NavBar />
                {cart&&<div>
                        {cart.map((p)=>{return<CartProduct key={p.id} image={p.img} price={p.price} title={p.title} pId={p.productId} id={p.id}/>})}
                    </div>}
                    <div style={{display:"flex",alignItems:"center",flexFlow:"column"}}>
                        <h3>TOATL CART VALUE = ${cartPrice}</h3>
                        <button onClick={()=>{orderPlaced()}}>BUY NOW</button>
                    </div>
            </div>
        
}
 
export default CartPg;