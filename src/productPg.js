import React from "react"
import ProductPgImage from "./components/productPgImages"
import "./productPgImage.css"

class ProductPg extends React.Component {
    state = {
    }
    componentDidMount() {

    }
    render(){
      return(
        <div>
          <ProductPgImage id={this.props.id}/>
        </div> 
      )
    }
  }
  export default ProductPg;
  