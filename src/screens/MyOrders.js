import { useEffect, useState } from "react";
import OrderedProduct from "../components/orderedProduct.js";
import NavBar from '../components/navBar';

const MyOrders = () => {
    const [orders,setOrders]=new useState("")
    
    useEffect(async()=>{
        await fetch("http://localhost:8000/orders").then((res)=>res.json()).then((res)=>setOrders(res))
        console.log("STATE MYORDERS",orders)
    },[])
    return <div>
                <NavBar />
                <h1 style={{color:"#8B2D2D",textAlign:"center",padding:"2px"}}>YOUR ORDERS</h1>
                {orders&&<div>
                        {orders.map((p)=>{return<OrderedProduct key={p.id} image={p.img} price={p.price} title={p.title} pId={p.productId}/>})}
                    </div>}
            </div>
        
}
 
export default MyOrders;