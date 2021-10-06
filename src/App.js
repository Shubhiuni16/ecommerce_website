import './App.css';
import React from 'react';
import * as ProductAPI from './ProductAPI'
import ProductPg from './screens/productPg';
import Login from './screens/loginPage';

class App extends React.Component {
  state = {
    products:null
  }
  componentDidMount() {
    ProductAPI.getProductId(4).then((res) => {
      this.setState({products:res})
    })
  }
  render(){
    /* return(
      this.state.products!==null?
      <div><h1>{this.state.products.title}</h1></div>:<h1>Loading</h1>
    ) */
    return(
      <div>
        {/* <ProductPg id={5}/> */}
        {/* <ProductPg id={10}/> */}
        <Login />
      </div> 
    )
  }
}
export default App;
