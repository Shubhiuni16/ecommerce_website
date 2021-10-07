import React, { Component } from "react";
import ProductPgImage from "../components/productPgImages"
import ProductPgDescription from "../components/productPgDescription"
import * as ProductAPI from '../ProductAPI'
import "./productPg.css"
import NavBar from '../components/navBar';
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";

class ProductPg extends Component {
    state = {
      product:null
    }
    componentDidMount() {
      //console.log("PARAMS",this.props.match.params)
      ProductAPI.getProductId(this.props.match.params.id).then((res) => {
        this.setState({product:res})
      })
    }
    render(){
      //console.log("id fr URL",id)
      //console.log(this.state.product)
      return(
        <>
        <NavBar />
        <div className="ProductPgContainer">
          {this.state.product&&<ProductPgImage product={this.state.product}/>}
          {this.state.product&&<ProductPgDescription data={this.state.product}/>}
          {!this.state.product&&<h1>Loading Product</h1>}
        </div> 
        </>
      )
    }
  }
  export default withRouter(ProductPg);

  