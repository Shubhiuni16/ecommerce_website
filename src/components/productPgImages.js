import React,{Component} from 'react';
import * as ProductAPI from '../ProductAPI'

var ReactDOM=require('react-dom')
class ProductPgImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productImage:this.props.image,
        }
    }
    /* componentDidMount() {
        ProductAPI.getProductId(this.props.id).then((res) => {
          this.setState({productImage:res.image})
        })
      } */
    imageSelector(imgId){
        console.log("CLICKED");
        document.querySelector('.selected').setAttribute('class','unselected');
        document.querySelector(`#${imgId}`).setAttribute('class','selected');
    }
    render() { 
        console.log(this.props.image)
        return ( 
            this.productImage===null?null:
            <div className="productImageContainer">
                <img className="productImage" src={this.state.productImage} alt="Selected Image" />
                <p className="wishlistButton" id="unliked">&hearts;</p>
                <div className="moreImages">
                    <img id="extraImage1" className="selected" onClick={()=>this.imageSelector('extraImage1')} src={this.state.productImage} width="80" height="80" />
                    <img id="extraImage2" className="unselected" onClick={()=>this.imageSelector('extraImage2')} src={this.state.productImage} width="80" height="80" />
                    <img id="extraImage3" className="unselected" onClick={()=>this.imageSelector('extraImage3')} src={this.state.productImage} width="80" height="80" />
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