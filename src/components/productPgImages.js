import React,{Component} from 'react';
import * as ProductAPI from '../ProductAPI'

var ReactDOM=require('react-dom')
class ProductPgImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productImage:null,
        }
    }
    componentDidMount() {
        ProductAPI.getProductId(this.props.id).then((res) => {
          this.setState({productImage:res.image})
        })
      }
    imageSelector(imgId){
        console.log("CLICKED");
        document.querySelector(`#${imgId}`).setAttribute('class','selected');
        console.log(document.querySelector(`#${imgId}`))
        //ReactDOM.findDOMNode(clickedElement).className="selected"
    }
    render() { 
        return ( 
            this.productImage===null?<h1>LOADING</h1>:
            <div className="productImageContainer">
                <img className="productImage" src={this.state.productImage} alt="Selected Image" />
                <p className="wishlistButton" id="unliked">&hearts;</p>
                <div className="moreImages">
                    <img id="extraImage1" className="selected" onclick={()=>this.imageSelector('extraImage1')} src={this.state.productImage} width="80" height="80" />
                    <img id="extraImage2" className="unselected" onclick={()=>this.imageSelector('extraImage2')} src={this.state.productImage} width="80" height="80" />
                    <img id="extraImage3" className="unselected" onclick={()=>this.imageSelector('extraImage3')} src={this.state.productImage} width="80" height="80" />
                </div>
                <div className="buyBtns">
                    <button className="addToCartbtn">ADD TO CART</button>
                    <button className="buyNowbtn">BUY NOW</button>
                </div>
            </div>
         )
    }
}
 
export default ProductPgImage;