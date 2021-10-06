import shareBtn from '../Images/shareBtn.png'
import {useState,useEffect} from 'react'
import * as ProductAPI from '../ProductAPI'

const shareProduct=()=>{
    alert("SHARE BUTTON CLICKED")
}
const ProductPgDescription = (props) => {
    const [details,setDetails]=new useState(props.data)
    useEffect(()=>{
        
    })

    const mrp=parseInt(details.price)*(Math.floor(Math.random()*3+1)+1)
    console.log(details.rating.rate)
    return ( 
        !details?null:<div className="productDescription">
            <div className="heading">
                <h1>{details.title}</h1>
                <img onClick={()=>shareProduct()} src={shareBtn} width="20" height="20" align="right" padding="3px" />
            </div>
            <h1 className="offerPrice"><b> ₹{details.price}</b></h1>
            <h3 className="actualPrice"><strike> ₹{mrp}</strike></h3>
            <h3 className="discount">{(mrp-details.price)/mrp*100}% DISCOUNT</h3>
            <div className="DescriptionBox">
                <b>{details.title}</b>
                <br /><br /><b>ABOUT</b> : {details.description}
                <br/><br/><b>RATINGS</b> : {details.rating.rate}/5 by {details.rating.count} people
            </div>
        </div>
     );
}
 
export default ProductPgDescription;