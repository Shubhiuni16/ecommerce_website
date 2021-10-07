import React, { Component } from "react";
import ProductPgImage from "../components/productPgImages"
import ProductPgDescription from "../components/productPgDescription"
import * as ProductAPI from '../ProductAPI'
import "./productPgImage.css"
import NavBar from '../components/navBar';
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";

class ProductPg extends Component {
    state = {
      productImage:null
    }
    componentDidMount() {
      //console.log("PARAMS",this.props.match.params)
      ProductAPI.getProductId(this.props.match.params.id).then((res) => {
        this.setState({productImage:res})
      })
    }
    render(){
      //console.log("id fr URL",id)
      console.log(this.state.productImage)
      return(
        <>
        <NavBar />
        <div className="ProductPgContainer">
          {this.state.productImage&&<ProductPgImage image={this.state.productImage.image}/>}
          {this.state.productImage&&<ProductPgDescription data={this.state.productImage}/>}
          {!this.state.productImage&&<h1>Loading Product</h1>}
        </div> 
        </>
      )
    }
  }
  export default withRouter(ProductPg);

  