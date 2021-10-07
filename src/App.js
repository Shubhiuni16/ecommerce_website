import './App.css';
import React from 'react';
import * as ProductAPI from './ProductAPI'
import ProductPg from './screens/productPg';
import Login from './screens/loginPage';
import Home from './screens/HomePg';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'

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
      <Router>
      <div className="App">
      <div>
        
        <Switch>
          <Route exact path="/"><Login /></Route>
          <Route exact path="/product/:id"><ProductPg id={3}/></Route>
          <Route exact path="/Home"><Home /></Route>
          <Route path="/AboutUs" component={Login}/>
        </Switch>
      </div>
    </div>
    </Router>
    )
  }
}
export default App;
