import NavBar from "../components/navBar";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Images/flopkart1.png'
import {useState,useEffect} from 'react'
import * as ProductAPI from '../ProductAPI'
import ListGroup from 'react-bootstrap/ListGroup'
import offer1 from '../Images/offer1.jpg'
import offer2 from '../Images/offer2.jpg'
import offer3 from '../Images/offer3.png'
import ProductCard from "../components/productCard";

const getCategoryProduct=async(category,setProducts)=>{
    await ProductAPI.productsWithCategory(category).then((res)=>setProducts(res))
}
const Home = () => {
    const [categories,setCategories]=new useState(null)
    useEffect(()=>{
        ProductAPI.getCategories().then((res) => {
            setCategories(res)
            console.log(res)
          })
    },[setCategories])
    const [products,setProducts]=new useState(null)
    useEffect(()=>{
        ProductAPI.limitProducts(8).then((res) => {
            setProducts(res)
            console.log(res)
          })
    },[])
    return ( 
        <div style={{backgroundColor:"#E7DDDD"}}>
            <NavBar />
            <Carousel variant="light">
                <Carousel.Item>
                    <img
                    className="d-block w-100" height ="400px"
                    src={offer1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>50% off on Hemlet Packman Laptops</h5>
                        <p>Only on flopkart.com T&C </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" height ="400px"
                    src={offer2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Get 100% off on clothes</h5>
                        <p>just kidding</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" height ="400px"
                    src={offer3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Cell phones that won't blast</h5>
                        <p>Only on flopkart.com T&C </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br/>
                {categories&&<div style={{display:"flex",justifyContent:"center",}}>
                    {categories.map((c,i)=>{
                        return <button key={i} style={{height:"70px", width:"10%",margin:"5px",padding:"5px"}}
                                onClick={()=>{getCategoryProduct(c,setProducts)}}>{c}</button>
                    })}
                </div>}
                {products&&<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                    {products.map((p)=>{
                        return <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} img={p.image}/>
                    })}
                </div>}
        </div>
     );
}
 
export default Home;