import React from "react"
import ProductPgImage from "../components/productPgImages"
import ProductPgDescription from "../components/productPgDescription"
import * as ProductAPI from '../ProductAPI'
import "./productPgImage.css"

class ProductPg extends React.Component {
    state = {
      productImage:null
    }
    componentDidMount() {
      ProductAPI.getProductId(this.props.id).then((res) => {
        this.setState({productImage:res})
      })
    }
    render(){
      console.log(this.state.productImage)
      return(
        <div className="ProductPgContainer">
          {this.state.productImage&&<ProductPgImage image={this.state.productImage.image}/>}
          {this.state.productImage&&<ProductPgDescription data={this.state.productImage}/>}
          {!this.state.productImage&&<h1>Loading Product</h1>}
        </div> 
      )
    }
  }
  export default ProductPg;
  