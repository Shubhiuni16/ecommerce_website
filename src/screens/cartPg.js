import { useEffect, useState } from "react";
import CartProduct from "../components/cartProduct.js";
import NavBar from '../components/navBar';

const CartPg = () => {
    const [cart,setCart]=new useState("")
    let cartRep=cart
    
    useEffect(()=>{
        fetch("http://localhost:8000/cart").then((res)=>res.json()).then((res)=>setCart(res)).then(()=>cartRep=cart)
    },[])
    console.log(cart)
    let cartPrice=cartRep?cartRep.reduce((a,v)=>a=a+v.price,0):0
    return <div>
                <NavBar />
                {cart&&<div>
                        {cart.map((p)=>{return<CartProduct key={p.id} image={p.img} price={p.price} title={p.title}/>})}
                    </div>}
                    <div style={{display:"flex",alignItems:"center",flexFlow:"column"}}>
                        <h3>TOATL CART VALUE = ${cartPrice}</h3>
                        <button >BUY NOW</button>
                    </div>
            </div>
        
}
 
export default CartPg;